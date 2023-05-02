import css from './App.module.css'
import { Profile } from "../Profile/Profile";
import user from '../../user.json'

export const App = () => {
  return (
    <div className={css.card}>
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
    </div>
  );
};
