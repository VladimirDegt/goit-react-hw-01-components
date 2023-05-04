import css from './App.module.css'
import { Profile } from "../Profile/Profile";
import { Statistics } from '../Statistics/Statistics';
import user from '../../user.json'
import data from '../../data.json'

export const App = () => {
  return (
    <div className={css.container}>
      <Profile 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
      <Statistics data={data} title='UPLOAD STATS'/>
    </div>
  );
};