import { SearchCard } from '../common/Searchcard';
import { SearchImgWrapper } from '../common/Searchcard';

const ActorCard = ({
  name,
  image,
  key,
  gender,
  birthday,
  country,
  deathday,
}) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name}></img>
      </SearchImgWrapper>

      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      {!!birthday && `Born ${birthday}`}

      <p>{country ? `comes from ${country}` : 'No country known'}</p>
      <p> {deathday ? deathday : 'alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;
