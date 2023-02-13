import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: "counter",
  initialState: {value: 0},
  reducers: {
    // 리듀서에서 액션 설정
    increament: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  },
})

export const { increament, decrement } = counterSlice.actions;
export default counterSlice.reducer;