import styled from '@emotion/styled'

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 300px;
  background-color: white;
  border-radius: 4px;
  margin: 20px auto;
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
`;

export const StatusOff = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
`;

export const StatusOn = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: green;
`;

export const FriendAvatar = styled.img`
  margin: 0;
`;