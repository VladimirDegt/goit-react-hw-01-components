import { render, screen } from '@testing-library/react';
import { Statistics } from './Statistics';
import data from '../../data.json'

describe( 'Statistics component', () => {
  it( 'render title', () => {
    render (
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
    );
    expect(screen.getByTestId('title')).toBeInTheDocument();
    
  })

  it( 'no title', () => {
    render (
      <Statistics
        stats={data}
      />
    );
    expect(screen.queryByTestId('title')).toBeNull();
  })
  
  it( 'render list', () => {
    render (
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
    );
    expect(screen.getByTestId('list')).toBeInTheDocument();
})

});
