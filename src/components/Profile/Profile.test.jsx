import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';
import user from '../../user.json';

describe('Profile component', () => {
  test('img render', () => {
    render( <Profile 
      user={user}
      /> );
      
    expect(screen.getByTestId('img')).toBeInTheDocument();
  })
  test('list render', () => {
    render( <Profile 
      user={user}
      /> );

    expect(screen.getByTestId('list')).toBeInTheDocument();
})
  test('have class "stats"', () => {
    render( <Profile 
      user={user}
      /> );

    expect(screen.getByTestId('list')).toHaveClass('stats');
})
});
