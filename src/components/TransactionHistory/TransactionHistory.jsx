import PropTypes from 'prop-types';

import css from './TransactionHistory.module.css'

export function TransactionHistory( {transactions} ){
  return (
    <table className={css.transactionHistory}>
      <thead className={css.transactionHead}>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionBody}>
        {
          transactions.map( ({id, type, amount, currency}) => 
          <tr key={id} className={css.transactionBodyItem}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        )
        }
      </tbody>
    </table>
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
