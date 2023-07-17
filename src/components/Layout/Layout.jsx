import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Main, Container, NavMenu, MenuLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavMenu>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/movies">Movies</MenuLink>
          </NavMenu>
        </Container>
      </Header>

      <Main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default Layout;
