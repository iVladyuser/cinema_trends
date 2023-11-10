import styled from 'styled-components';

export const ListCastStyle = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ItemCastStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  width: 170px;
  height: 250px;
  cursor: pointer;
  overflow: hidden;
`;

export const CastHaracter = styled.p`
  min-height: 40px;
`;
