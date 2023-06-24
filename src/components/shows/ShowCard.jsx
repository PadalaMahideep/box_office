/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchCard, SearchImgWrapper } from '../common/Searchcard';
import { StarIcon } from '../common/Staricon';
const ShowCard = ({ name, image, id, summary, onstaredMe, isStared }) => {
  const summaryshort = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ') + '.....'
    : 'NoDiscription';

  return (
    <SearchCard>
      <SearchImgWrapper>
        {' '}
        <img src={image} alt={name}></img>
      </SearchImgWrapper>

      <h1>{name}</h1>
      <p>{id}</p>
      <p>{summaryshort}</p>
      <ActionSection>
        <Link to={`/show/${id}`}>ReadMore </Link>
        <StarBtn type="button" onClick={() => onstaredMe(id)}>
          <StarIcon active={isStared} />

          {/* {isStared ? 'unstar me' : 'star me'} */}
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default ShowCard;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
