import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/slices/counter";
import { increament, decrement } from './store/slices/counterToolkit';

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{value}</span>
      <button onClick={() => dispatch(increament())}>+</button>
    </div>
  );
}

export default App;
