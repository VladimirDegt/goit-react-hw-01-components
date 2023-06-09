import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList( {friends} ) {
  return (
    <ul>
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
      id: PropTypes.number.isRequired,
  }).isRequired
  ).isRequired
};
