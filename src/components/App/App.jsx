import css from './App.module.css'
import { Profile } from "../Profile/Profile";
import { Statistics } from '../Statistics/Statistics';
import user from '../../user.json'
import data from '../../data.json'
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile 
        user={user}
      />
      <Statistics
        title="UPLOAD STATS"
        stats={data}
        rendomColor={getRandomHexColor}
      />
    </div>
  );
};
