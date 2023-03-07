import React from "react";
import { Todo } from "../types/Todo";
import { TodoField } from "./TodoField";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos &&
        todos.map((todo: Todo) => {
          return (
            <TodoField
              todoObj={todo}
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
            />
          );
        })}
    </div>
  );
};
