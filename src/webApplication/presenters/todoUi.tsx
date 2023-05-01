import { TodoInteracter } from "applications/todoInteracter";
import { TodoUsecase } from "applications/todoUsecase";
import { AxiosError } from "axios";
import { Todo } from "domains/todoEntity";
import { DBInfrastructure } from "interfaceAdapters/dbInfrastructure";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export function TodoUi() {
  const todoUsecase: TodoUsecase = new TodoInteracter(new DBInfrastructure());
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<Todo> = (data) => {
    todoUsecase.createTodo(data);
    setTodoList([...todoList, data]);
  };

  useEffect(() => {
    todoUsecase
      .readTodoList()
      .then((res: Todo[]) => {
        setTodoList(res);
      })
      .catch((e: AxiosError<{ error: string }>) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <h1>Todo Management App</h1>
      <h2>Create Todo</h2>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="todo-form">
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
      <h2>See Todo</h2>
      {todoList &&
        todoList.map((v) => {
          return (
            <div key={v.id}>
              <label>title: {v.title} </label>
              <label>content: {v.content}</label>
            </div>
          );
        })}
    </>
  );
}
