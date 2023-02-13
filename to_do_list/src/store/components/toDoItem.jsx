import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../slices/todos";

export const ToDoItem = React.memo(({ todo }) => {
  console.log("---", todo);
  const dispatch = useDispatch();

  const onRemove = (id) => dispatch(remove(id));

  return <div onClick={() => onRemove(todo.id)}>{todo.text}</div>;
});
