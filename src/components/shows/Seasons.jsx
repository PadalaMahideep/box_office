import styled from 'styled-components';

const Seasons = ({ Seasons }) => {
  return (
    <SeasonsWrapper>
      <p>Seasons : {Seasons.length}</p>
      <p>
        Total Episode :{' '}
        {Seasons.reduce((sum, Seasons) => sum + Seasons.episodeOrder, 0)}{' '}
      </p>

      <h3>Each Season Discription</h3>
      <SeasonList>
        {Seasons.map(season => (
          <div key={season.id} className="season-item">
            <div className="  left">
              <p>Season : {season.number}</p>
              <p>Episodes : {season.episodeOrder}</p>{' '}
            </div>

            <div className="right">
              Aired :{' '}
              <strong>
                {' '}
                {season.premierDate} - {season.endDate}
              </strong>
            </div>
          </div>
        ))}
      </SeasonList>
    </SeasonsWrapper>
  );
};

export default Seasons;

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;
