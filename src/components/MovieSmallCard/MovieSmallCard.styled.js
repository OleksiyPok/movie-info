import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Li = styled.li``;

export const LinkToMovie = styled(NavLink)`
  border: 2px solid darkblue;
  border-radius: 8px;

  margin-top: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:visited {
    color: darkblue;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-height: 150px;
  }
`;

export const CardContent = styled.div`
  border: 2px solid darkblue;
  border-radius: 8px;

  margin-top: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:visited {
    color: darkblue;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-height: 150px;
  }
`;

export const Photo = styled.img`
  margin-left: 0;
  display: block;
  width: 100px;
  height: 150px;
  border-radius: 5px;
  background-color: gray;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTitle = styled.h2`
  margin-top: 0;
  font-size: 20px;
  color: darkblue;
`;

export const SubTitle = styled.h3`
  margin-top: auto;
  margin-bottom: 0;
  font-size: 16px;
  color: darkblue;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 0;
  color: darkblue;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-height: 150px;

    -webkit-line-clamp: 4; /* Число отображаемых строк */
    display: -webkit-box; /* Включаем флексбоксы */
    -webkit-box-orient: vertical; /* Вертикальная ориентация */
    overflow: hidden;
  }
`;
