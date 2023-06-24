/* eslint-disable no-undef */
import { useState } from 'react';
import { useSearchstr } from '../library/useSearchstr';
import styled from 'styled-components';

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
        <StyledRadio>
          Shows
          <input
            type="radio"
            name="search-option"
            checked={searchopt === 'shows'}
            value="shows"
            onChange={radiochange}
          />
          <span />
        </StyledRadio>

        <StyledRadio>
          Actor
          <input
            type="radio"
            name="search-option"
            checked={searchopt === 'actor'}
            value="actor"
            onChange={radiochange}
          />
          <span />
        </StyledRadio>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

const StyledRadio = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 13px;
  user-select: none;
  font-weight: 700;
  line-height: 1.65;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
    border-radius: 50%;
  }
  input:checked ~ span {
    background-color: #fff;
    border: 2px solid ${({ theme }) => theme.mainColors.blue};
  }
  span:after {
    content: '';
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mainColors.blue};
  }
`;

export default SearchForm;
