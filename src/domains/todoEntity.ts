export type TodoList = [Todo];

export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  createdDate?: Date;
  //   deadLine: Date;
};
