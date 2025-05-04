import { 
    collection, addDoc, query, where, getDocs, 
    updateDoc, deleteDoc, doc 
  } from "firebase/firestore";
  import { useState } from 'react';
  import { db } from './config';
  
  const useCollection = (table) => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
  
    const getAll = async (condition) => {
      setResults([]);
      let q = condition && condition.length === 3 
        ? query(collection(db, table), where(condition[0], condition[1], condition[2]))
        : collection(db, table);
  
      const resDoc = await getDocs(q);
      resDoc.forEach(docu => {
        setResults(list => [...list, { ...docu.data(), id: docu.id }]);
      });
    };
  
    const add = async (docData) => {
      setError(null);
      setIsPending(true);
      try {
        let resDoc = await addDoc(collection(db, table), docData);
        setIsPending(false);
        return resDoc;
      } catch (err) {
        setError("Error al guardar");
        setIsPending(false);
        return null;
      }
    };
  
    const update = async (id, newData) => {
      setError(null);
      try {
        const docRef = doc(db, table, id);
        await updateDoc(docRef, newData);
      } catch (err) {
        setError("Error al actualizar");
      }
    };
  
    const remove = async (id) => {
      setError(null);
      try {
        const docRef = doc(db, table, id);
        await deleteDoc(docRef);
      } catch (err) {
        setError("Error al eliminar");
      }
    };
  
    return { error, isPending, results, add, getAll, update, remove };
  };
  
  export default useCollection;
  