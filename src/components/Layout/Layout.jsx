import { Outlet } from 'react-router-dom';
import { HeaderStyled, NavStyled, StyledNavLink } from './Layout.styled';

import { Footer } from 'pages/Footer';
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
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
