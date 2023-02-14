import React from "react";
import { useSelector } from "react-redux";
import { ToDoItem } from "./toDoItem";
import { createSelector } from "@reduxjs/toolkit";

export const ToDoList = React.memo(() => {
  const todosState = (state) => state.todos || initialState.todos;
  const getTodos = createSelector(todosState, (state) => {
    return state;
  });
  const todos = useSelector(getTodos);
  console.log("---list", todos);
  return (
    <ul>
      {todos.map((todo) => {
        return <ToDoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
});
