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
  friends: PropTypes.array.isRequired,
};
