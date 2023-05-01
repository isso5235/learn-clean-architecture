import { render, screen, waitFor } from "@testing-library/react";
import { TodoInteracter } from "applications/todoInteracter";
import { Todo } from "domains/todoEntity";
import { TodoUi } from "./todoUi";

const mockTodo1: Todo = {
  id: "id1",
  title: "title1",
  content: "content1",
  isDone: false,
  createdDate: new Date("2022-3-15"),
};

const mockTodo2: Todo = {
  id: "id2",
  title: "title2",
  content: "content2",
  isDone: false,
  createdDate: new Date("2022-3-16"),
};

describe("todoUi", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Todoが存在する
  it("has some todo", async () => {
    const createTodoMock = jest.spyOn(TodoInteracter.prototype, "createTodo");
    const readTodoListMock = jest
      .spyOn(TodoInteracter.prototype, "readTodoList")
      .mockResolvedValue([mockTodo1, mockTodo2]);

    render(<TodoUi />);

    expect((await screen.findByTestId("todo-form")).textContent).toEqual(
      "TitleContentcreate"
    );

    await waitFor(() =>
      expect(screen.getByTestId("todo-list").textContent).toEqual(
        "title: title1 content: content1title: title2 content: content2"
      )
    );

    expect(createTodoMock).toBeCalledTimes(0);
    expect(readTodoListMock).toBeCalledTimes(1);
  });
});
