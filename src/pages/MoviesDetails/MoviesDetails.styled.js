import styled from 'styled-components';

export const Container = styled.div``;

export const PageTitle = styled.h1``;

export const Button = styled.button`
  margin: 20px;
  margin-left: 0;
  margin-right: auto;
  height: 40px;
  width: 100%;

  border: 2px solid darkblue;
  border-radius: 6px;

  color: white;
  background-color: darkblue;
  font-weight: 400;

  /* color: darkblue;
  background-color: white;
  font-weight: 700; */

  @media screen and (min-width: 768px) {
    margin: 20px;
    margin-left: 0px;
    width: 150px;
  }
`;
