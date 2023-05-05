import { render, screen } from '@testing-library/react';
import { Statistics } from './Statistics';
import data from '../../data.json'
import { getRandomHexColor } from 'utils/getRandomHexColor';

describe( 'Statistics component', () => {
  it( 'render title', () => {
    render (
      <Statistics
        title="UPLOAD STATS"
        stats={data}
        rendomColor={getRandomHexColor}
      />
    );
    expect(screen.getByTestId('title')).toBeInTheDocument();
    
  })

  it( 'no title', () => {
    render (
      <Statistics
        stats={data}
        rendomColor={getRandomHexColor}
      />
    );
    expect(screen.queryByTestId('title')).toBeNull();
  })
  
  it( 'render list', () => {
    render (
      <Statistics
        title="UPLOAD STATS"
        stats={data}
        rendomColor={getRandomHexColor}
      />
    );
    expect(screen.getByTestId('list')).toBeInTheDocument();
})

  it( 'function was called', () => {
    const myFunction = jest.fn();
    render (
      <Statistics
        title="UPLOAD STATS"
        stats={data}
        rendomColor={myFunction}
      />
    );
    expect(myFunction).toHaveBeenCalled();
})
});
