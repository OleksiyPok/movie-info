import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const PageTitle = styled.h1``;

export const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding-top: 5px;
  text-align: center;
  margin: 20px;
  height: 30px;
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

// export const Button_old = styled.button`
//   margin: 20px;
//   margin-left: 0;
//   margin-right: auto;
//   height: 40px;
//   width: 100%;

//   border: 2px solid darkblue;
//   border-radius: 6px;

//   color: white;
//   background-color: darkblue;
//   font-weight: 400;

//   @media screen and (min-width: 768px) {
//     height: 30px;
//     margin: 20px;
//     margin-left: 0px;
//     width: 150px;
//   }
// `;
