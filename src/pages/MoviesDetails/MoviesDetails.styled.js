import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const PageTitle = styled.h1``;

export const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding-top: 4px;
  text-align: center;
  margin: 20px;
  height: 28px;
  width: 100%;
  margin-left: 0px;

  color: white;
  background-color: darkblue;
  border: 2px solid darkblue;
  border-radius: 6px;

  @media screen and (min-width: 576px) {
    width: 150px;
  }
`;
