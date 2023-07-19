import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 90%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.div`
  height: 40px;
  background-color: darkblue;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`;

export const Main = styled.div``;

export const NavMenu = styled.nav`
  display: flex;
  gap: 25px;
  list-style: none;
`;

export const MenuLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
  &:active {
    color: orange;
  }
  &.active {
    color: yellow;
    font-weight: 700;
  }
`;
