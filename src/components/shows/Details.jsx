const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <h1>Details</h1>
      <div>
        <p> Status: {status}</p>
        <p>
          {' '}
          premiered {premiered} {network ? `on ${network.name}` : null}
        </p>
      </div> 
    </div>
  );
};

export default Details;
