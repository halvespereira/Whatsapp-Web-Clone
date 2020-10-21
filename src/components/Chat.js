import React from "react";
import "../Styles/Chat.css";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
function Chat({
  currentUserDoc,
  setCurrentUserDoc,
  currentFriend,
  setCurrentFriend,
}) {
  return (
    <div className="chat">
      <ChatHeader currentFriend={currentFriend} />
      <ChatBody currentFriend={currentFriend} currentUserDoc={currentUserDoc} />
      <ChatFooter
        setCurrentUserDoc={setCurrentUserDoc}
        currentFriend={currentFriend}
        currentUserDoc={currentUserDoc}
      />
    </div>
  );
}

export default Chat;
