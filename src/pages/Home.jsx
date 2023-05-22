/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchsomeresult } from '../api/tvmaze';

const Home = () => {
  const [searchstr, setsearchstr] = useState('');
  const [apidata, setapidata] = useState(null);
  // const [apidata, setapidata] = useState([]);
  const [dataerror, setdataerror] = useState(null);

  const onsearchstrchange = ev => {
    setsearchstr(ev.target.value);
  };

  const onsearch = async ev => {
    ev.preventDefault();
    try {
      setdataerror(null);
      const result = await searchsomeresult(searchstr);
      console.log(result);
      setapidata(result);
    } catch (error) {
      setdataerror(error);
    }
  };

  const renderapidata = () => {
    if (dataerror) {
      return <div>{dataerror.message}</div>;
    }
    if (apidata) {
      return apidata.map(data => {
        return <div key={data.show.id}>{data.show.name}</div>;
      });
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={onsearch}>
        <h2>Home page</h2>
        <div>{searchstr}</div>
        <input type="text" value={searchstr} onChange={onsearchstrchange} />
        <button type="submit">Search</button>
      </form>

      <div>{renderapidata()}</div>
    </div>
  );
};

export default Home;
