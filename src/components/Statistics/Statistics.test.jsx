import { render, screen } from '@testing-library/react';
import { Statistics } from './Statistics';
import data from '../../data.json'
import { getRandomHexColor } from 'utils/getRandomHexColor';

describe( 'Statistics component', () => {
  test( 'render title', () => {
    render (
      <Statistics
        title="UPLOAD STATS"
        stats={data}
        rendomColor={getRandomHexColor}
      />
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    
  })
  
  test( 'render list', () => {
    render (
      <Statistics
        title="UPLOAD STATS"
        stats={data}
        rendomColor={getRandomHexColor}
      />
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
})
});
