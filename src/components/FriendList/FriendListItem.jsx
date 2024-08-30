import s from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ friend }) => {
  return (
    <div>
      <img src={friend.avatar} width="48" />
      <p>{friend.name}</p>
      <p className={clsx(friend.isOnline ? s.green : s.red)}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
