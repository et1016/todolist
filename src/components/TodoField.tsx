import React from "react";
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Todo } from "../types/Todo";

interface TodoFieldProps {
  todoObj: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const TodoField: React.FC<TodoFieldProps> = ({
  todoObj,
  todos,
  setTodos,
}) => {
  const editTodoHandler = (e: any) => {
    const newTodos: Todo[] = [];
    todos.forEach((todo: Todo) => {
      if (todo.id === todoObj.id) {
        newTodos.push({ ...todo, todoText: e });
        return;
      }
      newTodos.push(todo);
    });
    setTodos(newTodos);
  };

  const HandleTodoDone = () => {
    setTodos(
      todos.map((todo) =>
        todo.id !== todoObj.id
          ? todo
          : { ...todo, completed: !todoObj.completed }
      )
    );
  };

  const HandleTodoDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== todoObj.id));
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Editable
        w="50%"
        m="0rem 1rem"
        defaultValue={todoObj.todoText}
        onSubmit={editTodoHandler}
      >
        <EditablePreview
          style={{
            textDecoration: todoObj.completed === true ? "line-through" : "",
            opacity: todoObj.completed === true ? "0.5" : "",
          }}
        />

        <EditableInput />
      </Editable>

      <IconButton
        mr="0.5rem"
        aria-label="done"
        icon={<CheckIcon />}
        size="sm"
        variant="ghost"
        onClick={HandleTodoDone}
      />

      <IconButton
        aria-label="close"
        icon={<CloseIcon />}
        size="sm"
        variant="ghost"
        onClick={HandleTodoDelete}
      />
    </Box>
  );
};
