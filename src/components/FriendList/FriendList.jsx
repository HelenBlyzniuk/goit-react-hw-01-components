import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem
                    id={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name} />
            ))}
        </ul>
    )
    
}



FriendList.propTypes = {
    friends: PropTypes.array,
    
}

