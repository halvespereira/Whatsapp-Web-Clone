import React from "react";
import "../Styles/Chat.css";
import Message from "./Message";

const ChatBody = ({ messagesList, currentUserDoc }) => {
  if (!messagesList) {
    return (
      <>
        <div className="chat__body"></div>
      </>
    );
  } else {
    const newMessagesList = messagesList.sort(function (a, b) {
      return new Date(a.milliseconds) - new Date(b.milliseconds);
    });
    return (
      <div className="chat__body">
        {newMessagesList.map((msg, idx) => (
          <Message msg={msg} currentUserDoc={currentUserDoc} key={idx} />
        ))}
      </div>
    );
  }
};

export default ChatBody;
