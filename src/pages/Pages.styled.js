import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  color: white;
  margin-top: 10px;
`;

export const TitleWithRation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  color: white;
  margin-top: 10px;
`;

export const StyledDescrip = styled.div`
  max-width: 600px;

  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #4d4545;
  color: white;
`;

export const AdditionalInformation = styled.div`
  margin-bottom: 30px;
`;

export const StyledInformationTitle = styled.h3`
  text-transform: uppercase;
  margin-top: 20px;
  font-size: 20px;
  text-align: start;
  color: white;
`;

export const StyledInformationBox = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: start;
  color: white;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  background-color: #5f5d5d;

  &:hover {
    color: orangered;
    border: 1px solid orangered;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const StyledGoToBack = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  margin: 20px;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    color: orangered;
  }
`;

export const StyledTrendingTitle = styled.h2`
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-style: italic;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.945);
  box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 14px 14px 30px 0px rgba(0, 0, 0, 0.51);
`;
