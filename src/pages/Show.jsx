/* eslint-disable no-undef */
import { getshowId } from '../api/tvmaze';
import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ShowMaindata from '../components/shows/ShowMaindata';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/cast';
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
      <div>
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

        <div>
          <h2>Seasons</h2>
          <Seasons Seasons={showdata._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={showdata._embedded.cast} />
        </div>
      </div>
    );
  }

  if (showError) {
    return <div>`There is error ${showError.message}`</div>;
  }
  return <div>Data is Loading please wait</div>;
};
export default Show;
