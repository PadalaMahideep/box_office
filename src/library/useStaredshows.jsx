import { useReducer } from 'react';
import { useEffect } from 'react';

const usePersistedReducer = (reducer, intialstate, localStoragekey) => {
  const [state, dispatch] = useReducer(reducer, intialstate, intial => {
    const PercistentValue = localStorage.getItem(localStoragekey);

    return PercistentValue ? JSON.parse(PercistentValue) : intial;
  });

  useEffect(() => {
    localStorage.setItem(localStoragekey, JSON.stringify(state));
  }, [state, localStoragekey]);

  return [state, dispatch];
};

const staredfn = (staredid, action) => {
  switch (action.type) {
    case 'star':
      return staredid.concat(action.showid);
    case 'unstar':
      return staredid.filter(showid => showid !== action.showid);
    default:
      return staredid;
  }
};

export const useStaredshows = () => {
  return usePersistedReducer(staredfn, [], 'starredshows');
};
