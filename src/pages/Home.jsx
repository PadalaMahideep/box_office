/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { searchforpeople, searchsomeresult } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorGrid from '../components/actors/ActorGrid';
import styled, { css } from 'styled-components';
import { TextCenter } from '../components/common/TextCenter';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.$primary &&
    css`
      background: black;
      color: white;
    `};
`;

const Home = () => {
  // const [apidata, setapidata] = useState(null);
  // const [dataerror, setdataerror] = useState(null);

  const [filter, setfilter] = useState(null);

  const { data: apidata, error: dataerror } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchopt === 'shows'
        ? searchsomeresult(filter.q)
        : searchforpeople(filter.q),
    enabled: !!filter,
  });

  const onsearch = async ({ q, searchopt }) => {
    setfilter({ q, searchopt });

    //   try {
    //     setdataerror(null);
    //     if (searchopt === 'shows') {
    //       const result = await searchsomeresult(q);
    //       setapidata(result);
    //     } else {
    //       const result = await searchforpeople(q);
    //       setapidata(result);
    //     }
    //   } catch (error) {
    //     setdataerror(error);
    //   }
  };

  const renderapidata = () => {
    if (dataerror) {
      return <TextCenter>{dataerror.message}</TextCenter>;
    }

    if (apidata?.length === 0) {
      return <TextCenter>There is no result</TextCenter>;
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
    <TextCenter>
      <SearchForm onsearch={onsearch} />
      <TextCenter>{renderapidata()}</TextCenter>
    </TextCenter>
  );
};

export default Home;
