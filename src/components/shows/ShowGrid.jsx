/* eslint-disable no-use-before-define */
import ShowCard from './ShowCard';
import { useStaredshows } from '../../library/useStaredshows';

const ShowGrid = ({ show }) => {
  const [starredshows, dispatchstarred] = useStaredshows();
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
          isStared={starredshows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
