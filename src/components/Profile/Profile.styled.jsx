import styled from '@emotion/styled'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 20px auto;
  font-size: 40;
  border-radius: 4px;
  color: #010101;
  background-color: white;  
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 40px;
`;

export const CardDescriptionImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`
export const CardDescriptionName = styled.p`
  font-weight: 900;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border: 1px solid rgb(216, 204, 204);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const StatsQuantity = styled.span`
  font-weight: 900;
`;
