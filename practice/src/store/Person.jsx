import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePerson, remove } from "./slice";

export default function Person({ info }) {
  const [updated, setUpdated] = useState(false);
  const [person, setPerson] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  useState(() => {
    setPerson(info);
  }, [person]);

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
      {/* 초기 상태 : 변경 버튼 / 클릭 후 상태 : 확인 버튼 */}
      <button
        onClick={() => {
          // console.log(info);
          setUpdated(!updated);

          if (updated) {
            // 수정 가능 상태
            console.log("변경하기", person);
            dispatch(updatePerson(person));
            setPerson({});
          }
        }}
      >
        {updated ? "확인" : "변경"}
      </button>
    </>
  );
}

// 변경버튼을 누르면 해당 버튼은 확인버튼으로 바뀌고 추가된 텍스트가 Input 창으로 바뀌어서 편집할 수 있게끔
// 그리고 state에서도 update가 되어야함
