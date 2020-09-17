import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const Home = ({ users, updateUsers, currentuserinfo }) => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar users={users} currentuserinfo={currentuserinfo} />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
