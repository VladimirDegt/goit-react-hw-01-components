import styled from '@emotion/styled'

export const TableTransactions = styled.table`
  width: 300px;
  background-color: white;
  border-radius: 4px;
`;

export const TableHead = styled.thead`
  background-color: rgb(0, 162, 255);
  color: white;
  font-size: 20px;
`;

export const TableBody = styled.tbody`
  text-align: center;

  tr:nth-child(even) {
    background-color:rgb(211, 202, 202);
  }
`;

export const TableBodyItem = styled.tr`
  font-size: 14px;
  border: 1px solid black;
`;

export const TableRowHead = styled.th`
  padding: 10px;
`;

export const TableRowBody = styled.td`
  padding: 10px;
`;


