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
}) {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarAddFriend
        currentUserDoc={currentUserDoc}
        setCurrentUserDoc={setCurrentUserDoc}
      />
      <SidebarChats
        currentUserDoc={currentUserDoc}
        currentFriend={currentFriend}
        setCurrentFriend={setCurrentFriend}
      />
    </div>
  );
}

export default Sidebar;
