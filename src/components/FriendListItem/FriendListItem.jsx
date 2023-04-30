import PropTypes from 'prop-types';

// import css from './FriendListItem.module.css';
// console.log(css);
export const FriendListItem = ({ id, isOnline, avatar, name}) => {
    return (
        <li key={id} className="item" 
            style={{
                display: "flex",
                width: 500, border: "solid grey 1px",
                margin: "0 auto",
                gap:50,
                alignItems: "center"
            }} >
            {isOnline === true && (
                <span className="status" style={{
                    display: "block",
                    marginLeft: 50,
                    width: 20,
                    height:20,
                    border: "none",
                    borderRadius:"100%", 
                    backgroundColor:"pink",}}
                >{isOnline}</span>)}
            {isOnline === false && (
                <span className="status" style={{
                    display: "block",
                    marginLeft: 50,
                    width: 20,
                    height:20,
                    border: "none",
                    borderRadius:"100%", 
                    backgroundColor:"teal",}}
            >{isOnline}</span>)}
            
            <img className="avatar"
                style={{
                    display:"block",
                    margin: 0,
                    width: 75,
                    border: "none",
                    borderRadius:"10%",
                    boxShadow:"20px -16px teal",
                }} src={avatar} alt="User avatar" width="48" />
            <p className="name"
                style={{
                    color: "teal",
                    fontSize: 45,
                    fontWeight:"bold"
                }}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    id:PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    
}