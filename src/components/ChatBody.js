import React from "react";
import "../Styles/Chat.css";
import Message from "./Message";

const ChatBody = ({ messagesList, currentUserDoc }) => {
  if (!messagesList) {
    return <div className="chat__body"></div>;
  } else {
    return (
      <div className="chat__body">
        {messagesList.map((msg, idx) => (
          <Message msg={msg} currentUserDoc={currentUserDoc} key={idx} />
        ))}
      </div>
    );
  }
};

export default ChatBody;
