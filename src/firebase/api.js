import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "./config";

  const collectionName = "thisUserNotes";

  export const saveNotes = (newLink) =>
  addDoc(collection(db, collectionName), newLink);
  
  export const updateNotes = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);
  
  export const onGetNotes = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};
  
  export const getNotes = () => getDocs(collection(db, collectionName));
  
  export const deleteNotes = (id) => deleteDoc(doc(db, collectionName, id));
  
  export const getNote = (id) => getDoc(doc(db, collectionName, id));