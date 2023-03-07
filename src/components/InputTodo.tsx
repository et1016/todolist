import React, { useState } from "react";
import { Heading, Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Todo } from "../types/Todo";
import Theme from "./Theme";

interface InputTodoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const InputTodo: React.FC<InputTodoProps> = ({ todos, setTodos }) => {
  const [todoText, setTodoText] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const HandleTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const HandleTodoAdd = (e: any) => {
    e.preventDefault();
    setCompleted(false);
    setTodos([...todos, new Todo(todoText, completed)]);
    setTodoText("");
  };

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header>
        <Heading cursor="" mt={8} mb={10} as="h4" size="3xl">
          TodoList
        </Heading>
      </header>

      <main style={{ width: "100%", marginRight: "-38px" }}>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            w="80%"
            mr="5px"
            variant="filled"
            placeholder="請輸入代辦事項 ..."
            value={todoText}
            onChange={HandleTodoInput}
          />

          <IconButton
            aria-label="done"
            icon={<AddIcon />}
            size="md"
            variant="solid"
            type="submit"
            onClick={HandleTodoAdd}
          />
        </form>
      </main>

      <Theme />
      {/* 夜色模式的按鈕 */}
    </section>
  );
};
