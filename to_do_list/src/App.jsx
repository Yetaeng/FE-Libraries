import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ToDoInput from "./store/components/ToDoInput";
import { ToDoList } from "./store/components/toDoList";

function App() {
  return (
    <div className="App">
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
