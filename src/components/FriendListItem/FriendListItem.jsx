import PropTypes from 'prop-types';

import css from './FriendListItem.module.css'

export function FriendListItem( {item} ) {
  const {isOnline, avatar, name} = item;

  return (
    <li className={css.item}>
      {isOnline 
      ? <span className={css.statusGreen}></span>
      : <span className={css.statusRed}></span>
      }
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
};

FriendListItem.propTypes = {
  item: PropTypes.shape ({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
})
};
