import styled from 'styled-components';

export const ComponentContainer = styled.div`
  border: 2px solid darkblue;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 20px;
    gap: 20px;
  }
`;

export const Photo = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 240px;
  height: 360px;
  border: 2px solid darkblue;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`;

export const Span = styled.span``;
