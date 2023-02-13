import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../slices/todos";

export default function ToDoInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const onSubmitInput = (e) => {
    e.preventDefault();
    dispatch(create(input));
    setInput("");
  };

  return (
    <form onSubmit={onSubmitInput}>
      <input value={input} onChange={onChangeInput} placeholder="할 일 등록" />
      <button type="submit">등록</button>
    </form>
  );
}
