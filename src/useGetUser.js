import React, { useEffect, useState } from "react";
import { db } from "./firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
const useGetUser = (collectionName) => {
    const [loading,setLoading] = useState(true)
  const [user, setUser] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getUser = async () => {
      await onSnapshot(collectionRef, (snapshot) => {
        setUser(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      });
    };
    getUser();
  }, []);
  return { user,loading };
};

export default useGetUser;
