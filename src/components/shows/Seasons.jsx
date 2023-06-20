const Seasons = ({ Seasons }) => {
  return (
    <div>
      <p>Seasons : {Seasons.length}</p>
      <p>
        Total Episode :{' '}
        {Seasons.reduce((sum, Seasons) => sum + Seasons.episodeOrder, 0)}{' '}
      </p>

      <h3>Each Season Discription</h3>
      <div>
        {Seasons.map(season => (
          <div key={season.id}>
            <p>Season : {season.number}</p>
            <p>Episodes : {season.episodeOrder}</p>{' '}
            <div>
              Aired : {season.premierDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
