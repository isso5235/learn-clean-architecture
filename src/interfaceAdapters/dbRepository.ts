import { Todo } from "domains/todoEntity";

export interface DBRepository {
    // testFunc(data: any): void;
    createTodo(todo: Todo): string;
    // readTodoList(): TodoList;
    // updateTodo(todo: Todo): void;
    // deleteTodo(id: string): void;
}