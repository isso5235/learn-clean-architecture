import { Todo } from "domains/todoEntity";
import { DBRepository } from "./dbRepository";

export class DBInfrastructure implements DBRepository {
    createTodo(todo: Todo): string {
        console.log("infra", todo)
        return "ok"
    };
}