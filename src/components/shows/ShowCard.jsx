/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
const ShowCard = ({ name, image, id, summary }) => {
  const summaryshort = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ')
    : 'NoDiscription';

  return (
    <div>
      <img src={image} alt={name}></img>
      <h1>{name}</h1>
      <p>{id}</p>
      <p>{summaryshort}</p>
      <div>
        <Link to="/">ReadMore </Link>
        <button type="button"> starred</button>
      </div>
    </div>
  );
};

export default ShowCard;
