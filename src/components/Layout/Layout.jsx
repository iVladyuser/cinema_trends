import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  HeaderStyled,
  NavStyled,
  StyledNavLink,
} from './Layout.styled';
import { Loader } from 'components';

const Layout = () => {
  return (
    <div>
      <HeaderStyled>
        <NavStyled>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </NavStyled>
      </HeaderStyled>

      <main>
        <Suspense fallback={<Loader />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
