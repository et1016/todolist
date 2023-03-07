import React, { useState, useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import defaultTheme from "./components/defaultTheme";
import { Todo } from "./types/Todo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("list") || "[]")
  );

  useEffect(() => {
    if (todos) {
      localStorage.setItem("list", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <ChakraProvider theme={defaultTheme}>
      {/* 夜色模式 */}
      <Container>
        {/* <Center> */}
        <InputTodo todos={todos} setTodos={setTodos} />

        <TodoList todos={todos} setTodos={setTodos} />
        {/* </Center> */}
      </Container>
    </ChakraProvider>
  );
};

export default App;
