import PropTypes from 'prop-types';

import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList( {friends} ) {
  return (
    <ul className={css.friendList}>
      {friends.map( (item) => 
        <FriendListItem 
          key={item.id}
          item={item}
        />
      )}
    </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape ({
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
  })
  ).isRequired
};
