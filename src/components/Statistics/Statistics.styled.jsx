import styled from '@emotion/styled'
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Section = styled.section`
  width: 300px;
  height: 200px;
  margin: 0 auto;
  border-radius: 4px;
  color: #010101;
  background-color: white;
  border-radius: 4px;
`;

export const TitleStatistics = styled.h2`
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100px;
  margin: 0;
  text-align: center;
  font-weight: 700;
  border-bottom: 1px solid rgb(216, 204, 204);
`;

export const ListStatistics = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: 0;

  li:last-child {
    border: none;
`;

export const ListStatisticsItem = styled.li`
  width: 60px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  border-right: 1px solid rgb(216, 204, 204);
  gap:10px;

  background-color: ${getRandomHexColor}
`;

