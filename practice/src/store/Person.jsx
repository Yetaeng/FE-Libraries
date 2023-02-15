import React from "react";
import { useDispatch } from 'react-redux';
import { remove } from './slice';

export default function Person({ info }) {
  const dispatch = useDispatch();

  return (
    <li onClick={() => dispatch(remove(info.id))}>
      <span>{info.name} </span>
      <span>{info.age} </span>
      <span>{info.address}</span>
    </li>
  );
};