import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

import { register } from "../authSlices"; // asegúrate de tener esta acción en tu slice

export const registerAuth = (email, password) => {
  return async (dispatch) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (response) {
      await updateProfile(auth.currentUser, {
        displayName: 'Jonathan',
        photoURL: ''
      });

      const { email } = response.user;
      dispatch(register({ email }));
    } else {
      throw new Error('login failed');
    }
  };
};
