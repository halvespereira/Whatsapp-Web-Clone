import React from "react";
import "../Styles/SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat({ friend }) {
  return (
    <div className="sidebarChat">
      <Avatar className="avatarChat" />
      <div className="sidebarChat__info">
        <h2>{friend.name}</h2>
        <p>{friend.email}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
