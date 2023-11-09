import { Outlet } from 'react-router-dom';
import { Suspense } from "react"; 
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
      <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
