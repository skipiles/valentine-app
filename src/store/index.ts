import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './photosSlice';
import memoriesReducer from './memoriesSlice';
import storyReducer from './storySlice';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
    memories: memoriesReducer,
    story: storyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;