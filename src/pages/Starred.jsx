import { useStaredshows } from '../library/useStaredshows';
const Starred = () => {
  const [starredshows] = useStaredshows();

  return <div>Starred page , stared {starredshows.length}</div>;
};

export default Starred;
