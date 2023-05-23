import { Link } from 'react-router-dom';
const ActorCard = ({
  name,
  image,
  id,
  gender,
  birthday,
  country,
  deathday,
}) => {
  return (
    <div>
      <img src={image} alt={name}></img>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      {!!birthday && `Born ${birthday}`}

      <p>{country ? `comes from ${country}` : 'No country known'}</p>
      <p> {deathday ? deathday : 'alive'}</p>
      <div>
        <Link to="/">ReadMore </Link>
        <button type="button"> starred</button>
      </div>
    </div>
  );
};

export default ActorCard;
