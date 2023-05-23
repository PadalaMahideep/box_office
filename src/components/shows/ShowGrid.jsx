import ShowCard from './ShowCard';
const ShowGrid = ({ show }) => {
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
        />
      ))}
    </div>
  );
};
export default ShowGrid;
