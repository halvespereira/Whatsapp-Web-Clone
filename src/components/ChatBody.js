import React from "react";
import "../Styles/Chat.css";

const ChatBody = ({ currentFriend, currentUserDoc }) => {
  if (currentFriend === "") {
    return <div className="chat__body"></div>;
  }

  // if (currentUserDoc && currentFriend) {
  //   const friendObj = currentUserDoc.friends.find(friend => friend.uid === currentFriend.uid);

  // }

  return <div className="chat__body"></div>;
};

export default ChatBody;

{
  /* <p className="chat__message chat__reciever">
        <span className="chat__name">Hello</span>
        Hello
        <span className="chat__timestamp">Just now</span>
      </p>
      <p className="chat__message">
        <span className="chat__name">Hello</span>
        Hello
        <span className="chat__timestamp">Just now</span>
      </p> */
}
