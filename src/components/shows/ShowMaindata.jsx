const ShowMaindata = ({ image, name, summary, rating, genres }) => {
  return (
    <div>
      <img src={image ? image.medium : '/NOTFOUND.png'} alt={name} />

      <div>
        <h1>{name}</h1>
        <div> Rating {rating.average || 'N/A'} </div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Genres:
          <div>
            {(genres.map = genres => <span key={genres}> {genres}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMaindata;
