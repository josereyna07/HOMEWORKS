
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { login } from "../authSlices";
import { auth } from "../../firebase/config";


const googleProvider = new GoogleAuthProvider();

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, email, uid, photoURL } = result.user;
      dispatch(login({ uid, displayName, email, photoURL }));
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };
};
