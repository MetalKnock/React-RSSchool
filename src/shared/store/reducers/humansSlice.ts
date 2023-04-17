import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Human } from '../../api/types';

interface HumansState {
  humans: Human[];
}

const initialState: HumansState = {
  humans: [],
};

export const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    addHuman(state, action: PayloadAction<Human>) {
      state.humans.push(action.payload);
    },
  },
});

export const { addHuman } = humansSlice.actions;

export const humansState = humansSlice.reducer;
