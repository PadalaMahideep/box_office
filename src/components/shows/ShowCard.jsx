/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
const ShowCard = ({ name, image, id, summary, onstaredMe, isStared }) => {
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
        <Link to={`/show/${id}`}>ReadMore </Link>
        <button type="button" onClick={() => onstaredMe(id)}>
          {isStared ? 'unstar me' : 'star me'}
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
