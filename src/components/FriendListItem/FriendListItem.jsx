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

