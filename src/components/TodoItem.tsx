import React from "react";

interface TodoItemProps {
  task: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completed }) => {
  return (
    <li style={{ textDecoration: completed ? "line-through" : "none" }}>
      {task}
    </li>
  );
};

export default TodoItem;
