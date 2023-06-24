import { useStaredshows } from '../library/useStaredshows';
import { useQuery } from '@tanstack/react-query';
import { getShowsByIds } from '../api/tvmaze';
import { TextCenter } from '../components/common/TextCenter';

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
    return <TextCenter>There are no shows</TextCenter>;
  }

  if (starredshowErrors) {
    return <TextCenter>Error occured : {starredshowErrors.message}</TextCenter>;
  }

  return <TextCenter>shows are loading</TextCenter>;
};

export default Starred;
