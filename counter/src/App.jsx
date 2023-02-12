import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/slices/counter";

function App() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onDecrease = () => dispatch(decrease());
  const onIncrease = () => dispatch(increase());

  return (
    <div className="App">
      <button onClick={onDecrease}>-</button>
      <span>{number}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}

export default App;
