// components/LogoutButton.jsx
import { useDispatch } from "react-redux";
import { startLogout } from "../slices/auth/startLogout";

export const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(startLogout())}>Logout</button>
  );
};
