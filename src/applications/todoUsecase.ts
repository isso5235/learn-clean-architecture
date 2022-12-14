import { Todo } from "domains/todoEntity";

export interface TodoUsecase {
  createTodo(todo: Todo): void;
  readTodoList(): void;
  // updateTodo(todo: Todo): void;
  // deleteTodo(id: string): void;
}
