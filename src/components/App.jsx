import Profile from "./Profile/Profile";
import FriendList from "./FriendList/Friends";
import friends from './FriendList/friends.json';
import user from './Profile/profile.json'
import transactions from './TransactionsHistory/transactions.json';
import FriendListItem from "./FriendListItem/FriendListItem";
import TransactionsHistory from "./TransactionsHistory/TransactionsHistory";

function App(){
    return(
        <div>
            <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            />
            <FriendList friends={friends} />
            <TransactionsHistory items={transactions} />
        </div>
    )
}
export default App;