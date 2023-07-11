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
        <div>---------------</div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div>---------------</div>
        FOOTER
      </footer>
    </>
  );
};

export default Layout;
