import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/Friends-list/Friends-list';
import TransactionHistory from './components/Transaction/Transaction-history';
// data.json
import user from './components/Profile/User.json';
import StatisticalData from './components/Statistics/Statistical-data.json.json';
import friends from './components/Friends-list/Friends.json';
import transactions from './components/Transaction/transaction.json';

const App = () => {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={StatisticalData} />

            <Statistics stats={StatisticalData} />
            
            <FriendsList friends={friends} />

            <TransactionHistory items={transactions} />
        </>
    )
};

export default App;