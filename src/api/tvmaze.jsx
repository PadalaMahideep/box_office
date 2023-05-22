const BASEURL = 'https://api.tvmaze.com';

const apiGet = async query => {
  const response = await fetch(`${BASEURL}${query}`);
  const body = await response.json();

  return body;
};

export const searchsomeresult = query => apiGet(`/search/shows?q=${query}`);
