import { Todo } from "domains/todoEntity";
import { DBRepository } from "interfaceAdapters/dbRepository";
import { TodoUsecase } from "./todoUsecase";

export class TodoInteracter implements TodoUsecase {
  private dbRepository: DBRepository;

  constructor(dbRepository: DBRepository) {
    this.dbRepository = dbRepository;
  }

  public createTodo(todo: Todo) {
    const data = {
      id: todo.id,
      title: todo.title,
      content: todo.content,
      isDone: todo.isDone,
    };
    this.dbRepository.createTodo(data);
  }

  public async readTodoList() {
    const serverResponse = await this.dbRepository.readTodoList();

    const todoList: Todo[] = serverResponse.map((v) => {
      return {
        id: v.id,
        title: v.title,
        content: v.content,
        isDone: v.isDone,
        createdDate: new Date(),
      };
    });

    return todoList;
  }
}
