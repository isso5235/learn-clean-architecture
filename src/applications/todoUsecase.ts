import { Todo } from "domains/todoEntity";

export interface TodoUsecase {
  testFunc(data: any): void;
  createTodo(todo: Todo): void;
  // readTodoList(): TodoList;
  // updateTodo(todo: Todo): void;
  // deleteTodo(id: string): void;
}
