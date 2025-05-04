import { ref, set, push, onValue } from "firebase/database";
import { database } from "../../firebase/config";
import { setLoading, setData } from "../slices/firebaseSlice";

export const fetchFirebaseData = () => (dispatch) => {
  dispatch(setLoading());
  const dbRef = ref(database, "mensajes");
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    dispatch(setData(data ? Object.values(data) : []));
  });
};

export const addDataToFirebase = (newData) => () => {
  const dbRef = ref(database, "mensajes");
  const newEntry = push(dbRef);
  set(newEntry, newData);
};
