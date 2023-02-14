import { createSlice } from "@reduxjs/toolkit";

export const todosToolkit = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      text: "first",
    },
  ],
  reducers: {
    create: (state, action) => {
      return state.concat(action.payload); // 원본 그대로
      // state.push({ // 원본도 바꾸기
      //   id: Date.now(),
      //   text: action.payload,
      // });
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { create, remove } = todosToolkit.actions;
export default todosToolkit.reducer;
