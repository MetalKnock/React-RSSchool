import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CharactersState {
  search: string;
}

const initialState: CharactersState = {
  search: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    changeSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { changeSearch } = charactersSlice.actions;

export const characterState = charactersSlice.reducer;
