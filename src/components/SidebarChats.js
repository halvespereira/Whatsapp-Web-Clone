import React from "react";
import "../Styles/SidebarChat.css";
import SidebarChat from "./SidebarChat";

function SidebarChats({
  currentFriend,
  setCurrentFriend,
  friendsList,
  setMessagesList,
  currentUserDoc,
}) {
  if (friendsList) {
    return (
      <div className="sidebar__chats">
        {friendsList.map((friend, idx) => (
          <SidebarChat
            friend={friend}
            key={idx}
            currentFriend={currentFriend}
            setCurrentFriend={setCurrentFriend}
            setMessagesList={setMessagesList}
            currentUserDoc={currentUserDoc}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default SidebarChats;
