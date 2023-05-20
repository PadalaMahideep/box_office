import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Link to={'/staredpage'}>Go To Stared pages</Link>
    </div>
  );
};

export default Home;
