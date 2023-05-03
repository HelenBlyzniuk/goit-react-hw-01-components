import PropTypes from 'prop-types';
import { FriendListItem} from 'components/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list" style={{padding:0}}>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    id={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name}
                    

                     />
            ))}
        </ul>
    )
    
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
    })),  
}

