import { TodoInteracter } from "applications/todoInteracter";
import { TodoUsecase } from "applications/todoUsecase";
import { Todo } from "domains/todoEntity";
import { DBInfrastructure } from "interfaceAdapters/dbInfrastructure";
import { SubmitHandler, useForm } from "react-hook-form";

export function TodoUi() {
  const todo: TodoUsecase = new TodoInteracter(new DBInfrastructure())

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    mode: "onSubmit",
    reValidateMode: "onChange",
});
  const onSubmit: SubmitHandler<Todo> = (data) => todo.createTodo(data);

  return (
    <>
      <h1>Todo Management App</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Title</p>
          <input {...register("title", { required: true })} />
          {errors.title && <span>need title</span>}
        </div>
        <div>
          <p>Content</p>
          <textarea {...register("content")} />
        </div>
        <input type="hidden" value="true" {...register("isDone")} />
        <button type="submit">create</button>
      </form>
    </>
  );
}
