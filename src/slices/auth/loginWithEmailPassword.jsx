import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { logout } from "../authSlices";
import { login } from "../authSlices";


export const loginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      const resp = await signInWithEmailAndPassword(auth, email, password);
      const { uid, displayName, photoURL } = resp.user;
      dispatch(login({ uid, email, displayName, photoURL }));
    } catch (error) {
      console.error('Login failed', error);
    }
  };
};
