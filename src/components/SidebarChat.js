import React from "react";
import "../Styles/SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { Style } from "@material-ui/icons";

function SidebarChat({ friend, updateFriend, currentfriend }) {
  const handle = () => {
    updateFriend({
      name: friend.name,
      uid: friend.uid,
      email: friend.email,
      messages: [],
    });
  };

  return currentfriend.uid === friend.uid ? (
    <div
      className="sidebarChat"
      style={{ backgroundColor: "#ebebeb" }}
      onClick={handle}
    >
      <Avatar className="avatarChat" />
      <div className="sidebarChat__info">
        <h2>{friend.name}</h2>
        <p>{friend.email}</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={handle}>
      <Avatar className="avatarChat" />
      <div className="sidebarChat__info">
        <h2>{friend.name}</h2>
        <p>{friend.email}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
