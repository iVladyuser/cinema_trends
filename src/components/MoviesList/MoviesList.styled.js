import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

export const ItemStyle = styled.li`
  width: 250px;
  padding: 5px;
  border-radius: 5px;

  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #434343,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const StyledTitleMovie = styled(Link)`
  font-size: 20px;
  color: #fdfdfd;
  text-align: center;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: orangered;
  }
`;

export const StyledPosterMovie = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 5px;
`;
