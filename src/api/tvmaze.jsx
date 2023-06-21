const BASEURL = 'https://api.tvmaze.com';

const apiGet = async query => {
  const response = await fetch(`${BASEURL}${query}`);
  const body = await response.json();

  return body;
};

export const searchsomeresult = query => apiGet(`/search/shows?q=${query}`);
export const searchforpeople = query => apiGet(`/search/people?q=${query}`);
export const getshowId = showId =>
  apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async showIds => {
  const arr = showIds.map(showId => apiGet(`/shows/${showId}?`));

  const result = await Promise.all(arr);

  return result;
};
