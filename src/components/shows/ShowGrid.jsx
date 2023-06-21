/* eslint-disable no-use-before-define */
import ShowCard from './ShowCard';
import { useReducer } from 'react';
import { useEffect } from 'react';

const usePersistedReducer = (reducer, intialstate, localStoragekey) => {
  const [state, dispatch] = useReducer(reducer, intialstate, intial => {
    const PercistentValue = localStorage.getItem(localStoragekey);

    return PercistentValue ? JSON.parse(localStoragekey) : intial;
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
const ShowGrid = ({ show }) => {
  const [starredshows, dispatchstarred] = usePersistedReducer(
    staredfn,
    [],
    'starredshows'
  );

  const onstaredMe = showid => {
    const isStared = starredshows.includes(showid);

    if (isStared) {
      dispatchstarred({ type: 'unstar', showid });
    } else {
      dispatchstarred({ type: 'star', showid });
    }
  };
  return (
    <div>
      {show.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          id={data.show.id}
          image={
            data.show.image.medium ? data.show.image.medium : '/NOTFOUND.png'
          }
          summary={data.show.summary}
          onstaredMe={onstaredMe}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
