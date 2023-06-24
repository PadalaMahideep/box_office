import styled from 'styled-components';

const Details = ({ status, premiered, network }) => {
  return (
    <DetailsWrapper>
      <h1>Details</h1>
      <div>
        <p> Status: {status}</p>
        <p>
          {' '}
          premiered {premiered} {network ? `on ${network.name}` : null}
        </p>
      </div>
    </DetailsWrapper>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
