import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { task: string; completed: boolean }[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} task={todo.task} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
