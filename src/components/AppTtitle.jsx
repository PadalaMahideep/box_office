const AppTitle = props => {
  const {
    title = 'BOXOFFICE',
    subtitle = 'Are you looking for a movie or actor ? ',
  } = props;

  return (
    <div>
      <h2>{title}</h2>
      {subtitle}
    </div>
  );
};

export default AppTitle;
