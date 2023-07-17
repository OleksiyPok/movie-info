import styled from 'styled-components';

export const Container = styled.div`
  /* width: 90%; */
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
  /* overflow: hidden; */
  justify-content: center;
  border-radius: 8px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MovieTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 4px;
`;

export const Homepage = styled.p`
  margin-top: auto;
`;

export const Text = styled.p`
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const Span = styled.span``;
