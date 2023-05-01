import { render, screen } from "@testing-library/react";
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

jest.mock("applications/todoInteracter");
const mockTodoInteracter = TodoInteracter as jest.Mock;

describe("todoUi", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  // Todoが存在する
  it("has some todo", async () => {
    mockTodoInteracter.mockImplementation(() => ({
      createTodo: jest.fn().mockResolvedValue({}),
      readTodoList: jest.fn().mockResolvedValue([mockTodo1, mockTodo2]),
    }));

    render(<TodoUi />);

    expect((await screen.findByTestId("todo-form")).textContent).toEqual(
      "TitleContentcreate"
    );
  });
});
