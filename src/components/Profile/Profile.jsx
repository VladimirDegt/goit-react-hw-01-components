import PropTypes from 'prop-types';

import css from "./Profile.module.css";

export function Profile( {user} ) {
  const { avatar, username, tag, location, stats } = user

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
        src={avatar}
        alt={username}
        className={css.avatar}
        data-testid='img'
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats} data-testid='list'>
        <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{stats.views}</span>
        </li>
        <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
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
  })
})
}
