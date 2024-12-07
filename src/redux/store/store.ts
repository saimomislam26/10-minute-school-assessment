
import { configureStore } from '@reduxjs/toolkit';
import courseReducer from '../slices/courseSlice'
import detailReducer from '../slices/detailsSlice'

export const store = configureStore({
  reducer: {
    course: courseReducer,
    details: detailReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
