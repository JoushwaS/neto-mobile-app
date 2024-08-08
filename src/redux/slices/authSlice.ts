import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'authSlice',
  version: 1,
  storage: AsyncStorage,
  blacklist: [],
};
interface ApiState {
  token: string;
  data: IUserProfile | null;
  isLogin: boolean;
  skipOnboarding: boolean;
}
const initialState: ApiState = {
  token: '',
  data: null,
  isLogin: false,
  skipOnboarding: false,
};
const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    handleLogin: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        isLogin: true,
      };
    },
    userLogout: (state) => {
      return initialState;
    },
    skipOnBoardingStep: (state, { payload }) => {
      return {
        ...state,
        skipOnboarding: payload.skipOnboarding,
      };
    },

    handleRegister: (state, { payload }) => {
      return {
        ...state,
        token: payload.token,
        data: payload.data,
        isLogin: false,
      };
    },
    userDetails: (state, data) => {
      if (data?.payload !== null) {
        let userData = { ...state.data, ...data.payload };
        state.data = userData;
      } else {
        state.data = data?.payload;
      }
    },
  },
});
export default persistReducer(persistConfig, authSlice.reducer);
export const {
  handleLogin,
  userLogout,
  userDetails,
  handleRegister,
  skipOnBoardingStep,
} = authSlice.actions;
