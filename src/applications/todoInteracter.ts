import { Todo } from "domains/todoEntity";
import { TodoUsecase } from "./todoUsecase";

export class TodoInteracter implements TodoUsecase{
  public testFunc(data: unknown) {
    console.log("test", data)
  }

  public createTodo(todo: Todo){
    console.log(todo.id)
  };
}
