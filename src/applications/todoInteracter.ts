import { Todo } from "domains/todoEntity";
import { DBRepository } from "interfaceAdapters/dbRepository";
import { TodoUsecase } from "./todoUsecase";

export class TodoInteracter implements TodoUsecase {
  private dbRepository: DBRepository;

  constructor(dbRepository: DBRepository) {
    this.dbRepository = dbRepository;
  }

  public createTodo(todo: Todo) {
    console.log("interacter", todo.id);
    console.log(this.dbRepository.createTodo(todo));
  }

  public readTodoList() {
    this.dbRepository.readTodoList();
  }
}
