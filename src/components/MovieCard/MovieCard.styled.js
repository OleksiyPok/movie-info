import styled from 'styled-components';

export const ComponentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 2px solid darkblue;
  display: flex;
  padding: 20px;
  gap: 20px;
  border-radius: 8px;
`;

export const Photo = styled.img`
  display: flex;
  width: 300px;
  height: 450px;
  justify-content: center;
  border: 2px solid darkblue;
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0px;
`;

export const SubTitle = styled.h3`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 0;
`;

export const Homepage = styled.p`
  margin-top: auto;
`;

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Span = styled.span``;
