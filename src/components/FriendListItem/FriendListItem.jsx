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

