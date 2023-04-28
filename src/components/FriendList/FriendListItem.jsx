import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <>
   <span className="status">{isOnline}</span>
   <img className="avatar" src={avatar} alt="User avatar" width="48" />
   <p className="name">{name}</p>
        </>
    )
}

FriendListItem.propTypes = {
    isOnline: PropTypes.number,
    avatar: PropTypes.string,
    name:PropTypes.string,
    
}