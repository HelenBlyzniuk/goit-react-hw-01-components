import PropTypes from 'prop-types';
import {Friend, FriendPhoto, FriendName,IsFriendOnline} from './FriendListItemStyled.styled'

export const FriendListItemStyled = ({ id, isOnline, avatar, name}) => {
    return (
        <Friend key={id}>
            <IsFriendOnline type = {`${isOnline}`} />
            <FriendPhoto src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </Friend>
    )
}

FriendListItemStyled.propTypes = {
    id:PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    
}