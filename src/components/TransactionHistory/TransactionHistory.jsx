import PropTypes from 'prop-types';

import { TableTransactions, TableHead, TableBody, TableBodyItem, TableRowHead, TableRowBody } from './TransactionHistory.styled';

export function TransactionHistory( {transactions} ){
  return (
    <TableTransactions>
      <TableHead>
        <tr>
            <TableRowHead>Type</TableRowHead>
            <TableRowHead>Amount</TableRowHead>
            <TableRowHead>Currency</TableRowHead>
        </tr>
      </TableHead>

      <TableBody>
        {
          transactions.map( ({id, type, amount, currency}) => 
          <TableBodyItem key={id}>
            <TableRowBody>{type}</TableRowBody>
            <TableRowBody>{amount}</TableRowBody>
            <TableRowBody>{currency}</TableRowBody>
          </TableBodyItem>
        )
        }
      </TableBody>
    </TableTransactions>
  )
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired,
};
