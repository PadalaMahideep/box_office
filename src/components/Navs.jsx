import { Link } from 'react-router-dom';
const Navs = () => {
  const LINKS = [
    {
      text: 'HOME',
      to: '/',
    },
    {
      text: 'Starred',
      to: '/staredpage',
    },
  ];

  return (
    <div>
      <ul>
        {LINKS.map(iteam => (
          <li key={iteam.to}>
            {' '}
            <Link to={iteam.to}>{iteam.text}</Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
