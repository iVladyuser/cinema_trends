import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  gap: 20px;
  justify-content: start;
  color: white;
`;

export const StyledReviewsItem = styled.li`
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #4d4545;
  color: white;
`;

export const StyledReviewsAutor = styled.p`
  text-transform: uppercase;
  font-size: 15px;
  margin-bottom: 10px;
  color: orangered;
`;
