const Cast = ({ cast }) => {
  return (
    <div>
      <p> Total cast :{cast.length}</p>

      <div>
        {cast.map(cast => (
          <div key={cast.person.id}>
            <img
              src={
                cast.person.image ? cast.person.image.medium : "'/NOTFOUND.png'"
              }
              alt="name"
            />
            <p> name : {cast.person.name}</p>
            <p> Acted as : {cast.character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
