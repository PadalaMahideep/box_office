/* eslint-disable no-unused-vars */
import { useState } from 'react';

const Home = () => {
  const [searchstr, setsearchstr] = useState('');

  const onsearchstrchange = ev => {
    setsearchstr(ev.target.value);
  };

  const onsearch = async ev => {
    ev.preventDefault();
    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchstr}`
    );
    const body = await response.json();
  };
  return (
    <div>
      <form onSubmit={onsearch}>
        <h2>Home page</h2>
        <div>{searchstr}</div>
        <input type="text" value={searchstr} onChange={onsearchstrchange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
