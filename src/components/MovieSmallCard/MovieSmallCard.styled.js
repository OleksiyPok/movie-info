import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const ComponentContainer = styled.div`
  max-height: 150px;
  margin-top: 15px;
  border: 2px solid darkblue;
  display: flex;
  padding: 15px;
  gap: 20px;
  border-radius: 8px;
`;

export const Photo = styled.img`
  display: flex;
  width: 100px;
  height: 150px;
  justify-content: center;
  border-radius: 5px;
`;

export const Description = styled.div``;

export const LinkToMovie = styled(Link)`
  display: flex;
  gap: 20px;
  text-decoration: none;
  &:visited {
    color: darkblue;
  }
`;

export const MovieTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0px;
  font-size: 20px;
  color: darkblue;
`;

export const SubTitle = styled.h3`
  margin-top: 30px;
  margin-bottom: 0;
  font-size: 16px;
  color: darkblue;
`;

export const Text = styled.p`
  margin-top: 8px;
  color: darkblue;
  -webkit-line-clamp: 3; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  overflow: hidden; /* Обрезаем всё за пределами блока */
`;

export const Span = styled.span``;
