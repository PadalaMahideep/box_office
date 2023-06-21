import { useState } from 'react';
import { useEffect } from 'react';

const usePersistanceReducer1 = (intialstate, sessionstoragekey) => {
  const [strsearch, action] = useState(intialstate, intial => {
    const PercistentValue = sessionStorage.getItem(sessionstoragekey);

    return PercistentValue ? JSON.parse(PercistentValue) : intial;
  });

  useEffect(() => {
    sessionStorage.setItem(sessionstoragekey, JSON.stringify(strsearch));
  }, [strsearch, sessionstoragekey]);

  return [strsearch, action];
};

export const useSearchstr = () => {
  return usePersistanceReducer1('', 'searchstr');
};
