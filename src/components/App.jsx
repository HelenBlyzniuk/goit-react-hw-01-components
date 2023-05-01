import React from 'react';

import user from '../../src/user.json';
import data from '../../src/data.json';
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json';

import { Profile } from '../components/Profile';
import { Statistics } from '../components/Statistics';
import { FriendList } from '../components/FriendList';
import { TransactionHistory } from '../components/TransactionHistory';
import {FriendListStyled } from '../components/FriendListStyled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
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

      <FriendList
        friends={friends}
      />
      <FriendListStyled
        friends={friends}
      />
        
      <TransactionHistory
        data={transactions}
      />
    </div>
  );
};

