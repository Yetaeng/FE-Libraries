import "./App.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, addPerson, addMessage, remove } from "./store/slice";
import Person from './store/Person';

function App() {
  const [item, setItem] = useState("");
  const [person, setPerson] = useState({});
  const [text, setText] = useState("");

  const items = useSelector(state => state.add.items);
  const people = useSelector(state => state.add.people);
  const message = useSelector(state => state.add.message)

  const dispatch = useDispatch();

  const handleChange = e => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch(addItem(item));
            setItem("");
          }}
        >
          <input
            type="text"
            name="item"
            value={item}
            placeholder="item"
            onChange={e => {
              setItem(e.target.value);
            }}
          />
          <button>add item</button>
        </form>
        <p>{items}</p>
      </div>
      <hr />
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch(addPerson(person));
            setPerson({});
          }}
        >
          <input
            type="text"
            name="name"
            value={person.name || ""}
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="age"
            value={person.age || ""}
            placeholder="age"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            value={person.address || ""}
            placeholder="address"
            onChange={handleChange}
          />
          <button>add person</button>
        </form>
        <ul>
          {people.map(person => (
            <Person key={person.id} info={person} />
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch(addMessage(text));
            setText("");
          }}
        >
          <input
            type="text"
            name="text"
            value={text}
            placeholder="message"
            onChange={e => {
              setText(e.target.value);
            }}
          />
          <button>add message</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
