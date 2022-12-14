import { Todo } from "domains/todoEntity";

export interface DBRepository {
  // testFunc(data: any): void;
  createTodo(todo: Todo): string;
  readTodoList(): Promise<unknown>;
  // updateTodo(todo: Todo): void;
  // deleteTodo(id: string): void;
}
