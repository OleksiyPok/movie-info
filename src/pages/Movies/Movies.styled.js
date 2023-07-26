import styled from 'styled-components';

export const Container = styled.div``;

export const PageTitle = styled.h1``;

export const Input = styled.input`
  color: darkblue;
  border: 2px solid darkblue;
  border-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin: 20px;
  margin-left: 0px;
  width: 80px;
  color: white;
  font-weight: 700;
  background-color: darkblue;
  border: 2px solid darkblue;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
