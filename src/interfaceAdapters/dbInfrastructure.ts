import { Todo } from "domains/todoEntity";
import { DBRepository } from "./dbRepository";
import axios from 'axios';

type Response = {
    id: string;
    title: string;
    content: string;
    isDone: boolean;
    createdDate?: string;
  };

export class DBInfrastructure implements DBRepository {
  createTodo(todo: Todo): string {
    console.log("infra", todo);
    return "ok";
  }

  async readTodoList() {
    const response = await axios.get<Response>('http://localhost:3333/todoList');
    console.log(response);
    return response.data;
  }
}
