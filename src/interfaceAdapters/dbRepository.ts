import { ServerResponse } from "applications/serverResponse";

export interface DBRepository {
  // testFunc(data: any): void;
  createTodo(todo: ServerResponse): void;
  readTodoList(): Promise<ServerResponse[]>;
  // updateTodo(todo: Todo): void;
  // deleteTodo(id: string): void;
}
