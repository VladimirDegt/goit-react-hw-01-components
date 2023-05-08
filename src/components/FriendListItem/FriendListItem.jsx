import PropTypes from 'prop-types';

import { FriendItem, StatusOff, StatusOn, FriendAvatar} from './FriendListItem.styled';

export function FriendListItem( {item} ) {
  const {isOnline, avatar, name} = item;

  return (
    <FriendItem>
      {isOnline 
      ? <StatusOff></StatusOff>
      : <StatusOn></StatusOn>
      }
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </FriendItem>
  )
};

FriendListItem.propTypes = {
  item: PropTypes.shape ({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}).isRequired
};
