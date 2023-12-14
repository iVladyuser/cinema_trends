import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 10px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  background: -webkit-linear-gradient(to bottom, #434343, #000000);
  background: linear-gradient(to bottom, #434343, #000000);
  box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 31px -3px rgba(0, 0, 0, 0.75);
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 20px;
  font-weight: 500;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #b6aaaa;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  padding: 15px;
`;
