import styled from 'styled-components';

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

export const Li = styled.li`
  margin-bottom: 15px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 8px; */
`;

export const Photo = styled.img`
  display: flex;
  width: 200px;
  height: 300px;
  overflow: hidden;
  justify-content: center;
  border-radius: 6px;
`;

export const SubTitle = styled.h3`
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
`;
