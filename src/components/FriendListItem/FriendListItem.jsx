import PropTypes from 'prop-types';

export const FriendListItem = ({ id,isOnline, avatar, name }) => {
    return (
        <li key={id} className="item" >
   <span className="status">{isOnline}</span>
   <img className="avatar" src={avatar} alt="User avatar" width="48" />
   <p className="name">{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    id:PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    
}