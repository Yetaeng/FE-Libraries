import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePerson, remove } from "./slice";

export default function Person({ info }) {
  const [updated, setUpdated] = useState(false);
  const [person, setPerson] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setPerson(info);
  }, []);

  return (
    <>
      {updated ? (
        <li>
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
        </li>
      ) : (
        <li>
          <span>{info.name} </span>
          <span>{info.age} </span>
          <span>{info.address}</span>
        </li>
      )}
      <button onClick={() => dispatch(remove(info.id))}>삭제</button>
      <button
        onClick={() => {
          // 버튼만 누르고, input창을 건드리지 않으면 값이 들어있는 프로퍼티만 person에 담김
          console.log(person);
          if (updated) {
            dispatch(updatePerson(person));
          }
          setUpdated(!updated);
        }}
      >
        {updated ? "확인" : "변경"}
      </button>
    </>
  );
}
