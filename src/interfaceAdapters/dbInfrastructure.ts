import { ServerResponse } from "applications/serverResponse";
import axios from "axios";
import { DBRepository } from "./dbRepository";

export class DBInfrastructure implements DBRepository {
  async createTodo(todo: ServerResponse) {
    await axios.post("http://localhost:3333/todoList", todo);
    console.log("new todo added");
  }

  async readTodoList() {
    const response = await axios.get<ServerResponse[]>(
      "http://localhost:3333/todoList"
    );

    return response.data;
  }
}
