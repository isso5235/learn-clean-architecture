import { TodoInteracter } from "applications/todoInteracter";
import { TodoUsecase } from "applications/todoUsecase";
import { Todo } from "domains/todoEntity";
import { SubmitHandler, useForm } from "react-hook-form";

export function TodoUi() {
  const todo: TodoUsecase = new TodoInteracter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    mode: "onSubmit",
    reValidateMode: "onChange",
});
  const onSubmit: SubmitHandler<Todo> = (data: Todo) => todo.createTodo(data);

  return (
    <>
      <h1>Todo Management App</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input type="hidden" value="34657"{...register("id")} /> */}
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
