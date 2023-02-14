import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../slices/todosToolkit";

export const ToDoItem = React.memo(({ todo }) => {
  console.log("---item", todo);
  const dispatch = useDispatch();

  const onRemove = (id) => dispatch(remove(id)); // id가 payload

  return <div onClick={() => onRemove(todo.id)}>{todo.text}</div>;
});
