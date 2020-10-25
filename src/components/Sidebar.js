import React from "react";
import "../Styles/Sidebar.css";

import SidebarChats from "./SidebarChats";
import SidebarHeader from "./SidebarHeader";
import SidebarAddFriend from "./SidebarAddFriend";

function Sidebar({
  currentUserDoc,
  setCurrentUserDoc,
  currentFriend,
  setCurrentFriend,
  friendsList,
  setMessagesList,
}) {
  return (
    <div className="sidebar">
      <SidebarHeader
        currentUserDoc={currentUserDoc}
        setCurrentFriend={setCurrentFriend}
      />
      <SidebarAddFriend
        currentUserDoc={currentUserDoc}
        setCurrentUserDoc={setCurrentUserDoc}
      />
      <SidebarChats
        currentUserDoc={currentUserDoc}
        currentFriend={currentFriend}
        setCurrentFriend={setCurrentFriend}
        friendsList={friendsList}
        setMessagesList={setMessagesList}
      />
    </div>
  );
}

export default Sidebar;
