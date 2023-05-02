import { render, screen } from '@testing-library/react';
import { Profile } from './Profile';
import user from '../../user.json';

describe('Profile component', () => {
  test('img render', () => {
    render( <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      /> );
      
    expect(screen.getByRole('img')).toBeInTheDocument();
  })
  test('list render', () => {
    render( <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      /> );

    expect(screen.getByRole('list')).toBeInTheDocument();
})
  test('list class render', () => {
    render( <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      /> );

    expect(screen.getByRole('list')).toHaveClass('stats');
})
});
