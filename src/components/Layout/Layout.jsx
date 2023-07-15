import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <div>---------------</div>
      <main>
        <Outlet />
      </main>
      <div>---------------</div>
      <footer>FOOTER</footer>
    </>
  );
};

export default Layout;
