import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const Home = ({
  users,
  updateState,
  updateFriend,
  currentuserinfo,
  currentfriend,
}) => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar
          users={users}
          currentuserinfo={currentuserinfo}
          updateFriend={updateFriend}
          currentfriend={currentfriend}
        />
        <Chat
          currentfriend={currentfriend}
          currentuserinfo={currentuserinfo}
          users={users}
        />
      </div>
    </div>
  );
};

export default Home;
