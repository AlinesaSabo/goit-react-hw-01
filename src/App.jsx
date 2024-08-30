import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
    <div>
      <Profile user={userData} />
      <FriendList friend={friends} />
    </div>
  );
};

export default App;
