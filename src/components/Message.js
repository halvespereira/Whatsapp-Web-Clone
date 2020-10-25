import React from "react";
import "../Styles/Chat.css";

const Message = ({ msg, currentUserDoc }) => {
  const { sender, message, date, time } = msg;
  return (
    <div className="chat__div">
      <p
        className={
          sender === currentUserDoc.uid
            ? "chat__message chat__reciever"
            : "chat__message"
        }
      >
        {message}
        <span className="chat__timestamp">
          On {date}, At: {time}
        </span>
      </p>
    </div>
  );
};

export default Message;
