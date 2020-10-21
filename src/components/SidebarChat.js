import React from "react";
import "../Styles/SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = ({ friend, currentFriend, setCurrentFriend }) => {
  const handleCurrentFriend = () => {
    setCurrentFriend({
      name: friend.name,
      uid: friend.uid,
      email: friend.email,
    });
  };

  return (
    <div
      className={
        currentFriend.uid === friend.uid
          ? "sidebarChat activeFriend"
          : "sidebarChat"
      }
      onClick={handleCurrentFriend}
    >
      <Avatar className="avatarChat" />
      <div className="sidebarChat__info">
        <h2>{friend.name}</h2>
        <p>{friend.email}</p>
      </div>
    </div>
  );
};

export default SidebarChat;
