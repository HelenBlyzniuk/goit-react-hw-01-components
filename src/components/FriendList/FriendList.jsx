import PropTypes from 'prop-types';

export const FriendList = (friends) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
<li className="item" key ={friend.id}>
                 
</li>
            ))}
        </ul>
    )
    
}

// export const FriendListItem = ({ isOnline, avatar, name }) => {
//     return (
//         <>
//     <span className="status">{isOnline}</span>
//    <img className="avatar" src={avatar} alt="User avatar" width="48" />
//    <p className="name">{name}</p>
//         </>
//     )
// }

FriendList.propTypes = {
    friends: PropTypes.array,
    
}

// FriendListItem.propTypes = {
//     isOnline: PropTypes.number,
//     avatar: PropTypes.string,
//     name:PropTypes.string,
    
// }