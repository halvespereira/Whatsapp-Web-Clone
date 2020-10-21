import React from "react";
import "../Styles/SidebarChat.css";
import SidebarChat from "./SidebarChat";

function SidebarChats({ currentUserDoc, currentFriend, setCurrentFriend }) {
  if (currentUserDoc) {
    const friendsList = currentUserDoc.friends.map((friend, idx) => (
      <SidebarChat
        friend={friend}
        key={idx}
        currentFriend={currentFriend}
        setCurrentFriend={setCurrentFriend}
      />
    ));
    console.log(currentUserDoc);

    return <div className="sidebar__chats">{friendsList}</div>;
  } else {
    return null;
  }
}

export default SidebarChats;
