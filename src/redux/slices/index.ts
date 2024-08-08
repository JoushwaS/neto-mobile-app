// redux/slices/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice'; // Adjust the path as needed

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,

  // add other slices here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
