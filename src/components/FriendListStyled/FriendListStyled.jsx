import PropTypes from 'prop-types';
import { ListOfFriends } from './FriendListStyled.styled';
import { FriendListItemStyled } from '../FriendListItemStyled/FriendListItemStyled';

export const FriendListStyled = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <FriendListItemStyled
          key={friend.id}
          id={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ListOfFriends>
  );
};

FriendListStyled.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
