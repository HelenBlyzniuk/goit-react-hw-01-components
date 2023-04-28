import React from 'react';
import ReactDOM from 'react-dom';
import user from '../../src/user.json';
import data from '../../src/data.json';
import friends from '../../src/friends.json';
import { Profile } from '../components/Profile';
import { Statistics } from '../components/Statistics';
import { FriendList, FriendListItem } from '../components/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        user={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} /> 
      
      <Statistics stats = {data}
      />
{/* <div>
        <FriendList friends={friends} >
          
        </FriendList>
</div> */}
    </div>
  );
};

ReactDOM.render(App, document.querySelector('#root'));