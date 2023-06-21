import { useStaredshows } from '../library/useStaredshows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';

import ShowGrid from '../components/shows/ShowGrid';
const Starred = () => {
  const [starredshowsIds] = useStaredshows();

  const { data: starredshows, error: starredshowErrors } = useQuery({
    queryKey: ['starred', starredshowsIds],
    queryFn: () =>
      getShowsByIds(starredshowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredshows?.length > 0) {
    return <ShowGrid show={starredshows} />;
  }

  if (starredshows?.length === 0) {
    return <div>There are no shows</div>;
  }

  if (starredshowErrors) {
    return <div>Error occured : {starredshowErrors.message}</div>;
  }

  return <div>shows are loading</div>;
};

export default Starred;
