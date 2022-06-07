import { useState, useEffect } from "react";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { collection, getDocs, query } from "firebase/firestore";

const useQuery = (collectionName) => {
  const [data, setData] = useState([]);

  useEffect(() => {
  const getCollections = async () => {
  const colletionsRef = collection(db, collectionName)
  const q = query(colletionsRef)
   const querySnapshot = await getDocs(q)
   const collectionsMap = convertCollectionsSnapshotToMap(querySnapshot)
   setData(collectionsMap);
  }
  
  getCollections()

/*   return (
    () => getCollections()) */
}, [collectionName]);

  return data;
};

export default useQuery;
