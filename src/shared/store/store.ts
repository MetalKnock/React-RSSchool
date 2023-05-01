import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { toastState } from './reducers/toastSlice';
import { humansState } from './reducers/humansSlice';
import { characterState } from './reducers/charactersSlice';
import { characterApi } from './services/characterService';

const rootReducer = combineReducers({
  characters: characterState,
  humansSlice: humansState,
  toastSlice: toastState,
  [characterApi.reducerPath]: characterApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
