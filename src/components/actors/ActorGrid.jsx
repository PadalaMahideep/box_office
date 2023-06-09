import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';
const ActorGrid = ({ actor }) => {
  return (
    <FlexGrid>
      {actor.map(data => (
        <ActorCard
          key={data.person.id}
          name={data.person.name}
          summary={data.person.summary}
          dirthday={data.person.birthday}
          deathday={data.person.deathday}
          country={data.person.country ? data.person.country.name : null}
          gender={data.person.gender}
          image={data.person.image ? data.person.image.medium : '/NOTFOUND.png'}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
