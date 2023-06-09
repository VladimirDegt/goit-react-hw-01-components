import { Container } from './App.styled';
import { Profile } from "../Profile/Profile";
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';


export const App = () => {
  return (
    <Container>
      <Profile 
        user={user}
      />
      <Statistics
        title="UPLOAD STATS"
        stats={data}
      />
      <FriendList
        friends={friends}
      />
      <TransactionHistory 
        transactions={transactions}
      />
    </Container>
  );
};
