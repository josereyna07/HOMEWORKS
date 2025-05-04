import { useDispatch } from "react-redux";
import { startGoogleSignIn } from "../slices/auth/startGoogleSignIn";

export const LoginGoogle = () => {
  const dispatch = useDispatch();

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <button onClick={onGoogleSignIn}>Login with Google</button>
  );
};
