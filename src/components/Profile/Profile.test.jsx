import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';
import user from '../../user.json';

describe('Profile component', () => {
  it('img render', () => {
    render( <Profile 
      user={user}
      /> );
      
    expect(screen.getByTestId('img')).toBeInTheDocument();
  })
  it('list render', () => {
    render( <Profile 
      user={user}
      /> );

    expect(screen.getByTestId('list')).toBeInTheDocument();
})
  it('have class "stats"', () => {
    render( <Profile 
      user={user}
      /> );

    expect(screen.getByTestId('list')).toHaveClass('stats');
})
});
