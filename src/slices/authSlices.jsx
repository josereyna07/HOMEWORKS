import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null
  },
  reducers: {
    register: (state, action) => {
      state.email = action.payload.email
    },
    login: (state, action) => {
      const { uid, email, displayName, photoURL } = action.payload;
      state.uid = uid;
      state.email = email;
      state.displayName = displayName;
      state.photoUrl = photoURL;
      state.status = 'authenticated';
      state.errorMessage = null;
    },
    logout: (state, action) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = action?.payload?.errorMessage || null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
})

export const { login, logout, checkingCredentials, register } = authSlice.actions
