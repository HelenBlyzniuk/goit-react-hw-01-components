
import PropTypes from 'prop-types';
import './Profile.css';
 export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar" style ={{marginLeft:"100px", marginRight:"auto"}}
        />
        <p className="name">{username}</p>
        <p className="tag"> @{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="statsItem followers">
          <span className="label">Followers:</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="statsItem views">
          <span className="label">Views:</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="statsItem likes">
          <span className="label">Likes:</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
   
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};