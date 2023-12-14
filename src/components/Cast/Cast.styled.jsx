import styled from 'styled-components';

export const StyledCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`;

export const StyledCastItem = styled.li`
  width: 200px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #4d4545;
  color: white;
  text-align: center;
`;

export const StyledCastName = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
`;
