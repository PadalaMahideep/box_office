/* eslint-disable no-undef */
import { getshowId } from '../api/tvmaze';
import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ShowMaindata from '../components/shows/ShowMaindata';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/cast';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';
// const ShowById = showId => {
//   const [showdata, setshowdata] = useState(null);
//   const [showError, setshowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       // You can await here
//       try {
//         const data = await getshowId(showId);
//         setshowdata(data);
//       } catch (err) {
//         setshowError(err);
//       }
//       // ...
//     }

//     fetchData();
//   }, [showId]);

//   return { showdata, showError };
// };

const Show = () => {
  const { showId } = useParams();
  // // const [showdata, showError] = ShowById(showId);
  // const [showdata, setshowdata] = useState(null);
  // const [showError, setshowError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     try {
  //       const data = await getshowId(showId);
  //       setshowdata(data);
  //     } catch (err) {
  //       setshowError(err);
  //     }
  //     // ...
  //   }
  //   fetchData();
  // }, [showId]);

  const { data: showdata, error: showError } = useQuery({
    queryKey: ['showid', showId],
    queryFn: () => getshowId(showId),
    refetchOnWindowFocus: false,
  });

  if (showdata) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/"> Back</Link>
        </BackHomeWrapper>

        <ShowMaindata
          image={showdata.image}
          summary={showdata.summary}
          rating={showdata.rating}
          genres={showdata.genres}
          name={showdata.name}
        />

        <Details
          status={showdata.status}
          premiered={showdata.premiered}
          network={showdata.network}
        />

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons Seasons={showdata._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Cast</h2>
          <Cast cast={showdata._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  if (showError) {
    return (
      <>
        {' '}
        <TextCenter>`There is error ${showError.message}`</TextCenter>{' '}
      </>
    );
  }
  return (
    <>
      <TextCenter>Data is Loading please wait</TextCenter>{' '}
    </>
  );
};
export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
