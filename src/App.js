import React from 'react';
import Profile from './components/Profile/Profile';
import user from './components/Profile/User.json';

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
        </>
    )
};

export default App;