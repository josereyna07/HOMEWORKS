// store/slices/auth/thunks.js
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { logout } from "../authSlices";


export const startLogout = () => {
  return async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
  };
};
