import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let id = 0;

export type CounterSlice = {
    counter: number
} 

const initialState = {
    counter: 0
  } as CounterSlice
  

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    decrease: (state) => {
          state.counter -= 1
    },
    increase: (state) => {
      console.log('run in increase');
      
        state.counter += 1
    },
  },
});

export const { decrease, increase } = counterSlice.actions;

export const selectCounter = (state: { counter: { counter: number } }) => state.counter.counter

export default counterSlice.reducer;
