import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ToastState {
  isVisible: boolean;
  isErrorToast: boolean;
  message: string;
}

interface ShowToast {
  message: string;
  isErrorToast: boolean;
}

const initialState: ToastState = {
  isVisible: false,
  isErrorToast: false,
  message: '',
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<ShowToast>) {
      const { message, isErrorToast } = action.payload;
      state.message = message;
      state.isErrorToast = isErrorToast;
      state.isVisible = true;
    },
    hiddenToast(state) {
      state.isVisible = false;
    },
  },
});

export const { showToast, hiddenToast } = toastSlice.actions;

export const toastState = toastSlice.reducer;
