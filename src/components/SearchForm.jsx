/* eslint-disable no-undef */
import { useState } from 'react';
import { useSearchstr } from '../library/useSearchstr';

const SearchForm = ({ onsearch }) => {
  const [searchstr, setsearch] = useSearchstr();
  const [searchopt, setsearchopt] = useState('show');

  const onsearchstrchange = ev => {
    setsearch(ev.target.value);
  };
  const radiochange = dat => {
    setsearchopt(dat.target.value);
  };

  const onsubmit = ev => {
    ev.preventDefault();
    const option = {
      q: searchstr,
      searchopt,
    };
    onsearch(option);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <h2>Home page</h2>
        <div>{searchstr}</div>
        <input type="text" value={searchstr} onChange={onsearchstrchange} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            checked={searchopt === 'shows'}
            value="shows"
            onChange={radiochange}
          />
        </label>

        <label>
          Actor
          <input
            type="radio"
            name="search-option"
            checked={searchopt === 'actor'}
            value="actor"
            onChange={radiochange}
          />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
