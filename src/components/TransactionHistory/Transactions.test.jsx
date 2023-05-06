import { render, screen } from '@testing-library/react';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../../transactions.json';

describe( 'TransactionHistory component', () => {
  it( 'render component', () => {
    render (
      <TransactionHistory 
      transactions={transactions}
      />
    )
    expect(screen.getByRole('table')).toBeInTheDocument();
  } )
} )