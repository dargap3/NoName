import { useState, useEffect } from 'react';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const useQuery = (collectionName) => {
  const [query, setQuery] = useState([]);

  useEffect( () => {
    const unsubscribe = firestore
      .collection(collectionName)
      .onSnapshot( async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        setQuery(collectionsMap);
      } );
    return (
      () => unsubscribe()
    );
  }, [collectionName] );

  return query;  
}

export default useQuery;