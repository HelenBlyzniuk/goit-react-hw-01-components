import PropTypes from 'prop-types';

export const FriendList = ({ friends }, children) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
<li className="item" key ={friend.id}>
            {children}     
</li>
            ))}
        </ul>
    )
    
}



FriendList.propTypes = {
    friends: PropTypes.array,
    
}

