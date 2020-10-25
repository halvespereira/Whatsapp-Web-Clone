import React from "react";
import "../Styles/Chat.css";

const Message = ({ msg, currentUserDoc }) => {
  const { name, sender, message, date, time } = msg;
  return (
    <>
      <p
        className={
          sender === currentUserDoc.uid
            ? "chat__message chat__reciever"
            : "chat__message"
        }
      >
        <span className="chat__name">{name}</span>
        {message}
        <span className="chat__timestamp">
          On {date}, at: {time}
        </span>
      </p>
    </>
  );
};

export default Message;
