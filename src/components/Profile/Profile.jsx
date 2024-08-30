import s from "./Profale.module.css";

const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div>
        <img className={s.imgWrapper} src={user.avatar} />
        <p className={s.name}>{user.username}</p>
        <p className={s.tag}>@{user.tag}</p>
        <p className={s.tag}>{user.location}</p>
      </div>

      <ul className={s.list}>
        <li>
          <span>Followers</span>
          <span>{user.stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{user.stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
