import PropTypes from 'prop-types';

import { Card, CardDescription, CardDescriptionName, StatsQuantity, Stats, CardDescriptionImg, StatsItem } from './Profile.styled';

export function Profile( {user} ) {
  const { avatar, username, tag, location, stats } = user

  return (
    <Card>
      <CardDescription>
        <CardDescriptionImg
        src={avatar}
        alt={username}
        data-testid='img'
        />
        <CardDescriptionName>{username}</CardDescriptionName>
        <p>@{tag}</p>
        <p>{location}</p>
      </CardDescription>

      <Stats data-testid='list'>
        <StatsItem>
        <span>Followers</span>
        <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
        <span>Views</span>
        <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
        <span>Likes</span>
        <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </Card>
  )
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
  }).isRequired
}).isRequired
}
