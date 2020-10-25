import React from "react";
import "../Styles/SidebarChat.css";
import { Avatar } from "@material-ui/core";
import { getFriendMessages, setTheCurrentFriend } from "../helperFunctions";

const SidebarChat = ({
  friend,
  currentFriend,
  setCurrentFriend,
  setMessagesList,
  currentUserDoc,
}) => {
  const handleCurrentFriend = () => {
    setTheCurrentFriend(setCurrentFriend, friend);

    getFriendMessages(setMessagesList, currentUserDoc, friend);
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
