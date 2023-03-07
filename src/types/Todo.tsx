import { v4 as uuidv4 } from "uuid";

export class Todo {
  id: string;
  todoText: string;
  completed: boolean;

  constructor(todoText: string, completed: boolean) {
    this.id = uuidv4();
    this.todoText = todoText;
    this.completed = completed;
  }
}
