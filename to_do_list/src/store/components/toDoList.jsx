import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToDoItem } from "./toDoItem";

export const ToDoList = React.memo(() => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => {
        return <ToDoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
});
