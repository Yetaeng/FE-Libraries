import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "./slice";

function Item({ item }) {
  const dispatch = useDispatch();
  return <li onClick={() => dispatch(remove(item.id))}>{item.something}</li>;
}

export default Item;
