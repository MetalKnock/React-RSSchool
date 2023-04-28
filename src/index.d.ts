import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from 'shared/store/store';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState<RootState>;
  }
}
