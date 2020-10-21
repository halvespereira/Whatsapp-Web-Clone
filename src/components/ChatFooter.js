import React, { useState } from "react";
import "../Styles/Chat.css";
import { IconButton } from "@material-ui/core";
import { AttachFile } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { sendMessageFunction } from "../helperFunctions";

const ChatFooter = ({ currentFriend, currentUserDoc, setCurrentUserDoc }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    sendMessageFunction(
      message,
      currentFriend,
      currentUserDoc,
      setCurrentUserDoc
    );

    setMessage("");
  };
  return (
    <div className="chat__footer">
      <InsertEmoticonIcon />
      <IconButton>
        <AttachFile />
      </IconButton>
      <form>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          type="text"
        />
        <button onClick={sendMessage}>Send a message</button>
      </form>
      <MicIcon />
    </div>
  );
};

export default ChatFooter;
