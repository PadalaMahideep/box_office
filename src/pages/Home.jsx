/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchforpeople, searchsomeresult } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';

const Home = () => {
  const [apidata, setapidata] = useState(null);
  const [dataerror, setdataerror] = useState(null);

  const onsearch = async ({ q, searchopt }) => {
    try {
      setdataerror(null);
      if (searchopt === 'shows') {
        const result = await searchsomeresult(q);
        setapidata(result);
      } else {
        const result = await searchforpeople(q);
        setapidata(result);
      }
    } catch (error) {
      setdataerror(error);
    }
  };

  const renderapidata = () => {
    if (dataerror) {
      return <div>{dataerror.message}</div>;
    }

    if (apidata?.length === 0) {
      return <div>There is no result</div>;
    }
    if (apidata) {
      return apidata[0].show ? (
        <ShowGrid show={apidata} />
      ) : (
        <ActorGrid actor={apidata} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onsearch={onsearch} />
      <div>{renderapidata()}</div>
    </div>
  );
};

export default Home;
