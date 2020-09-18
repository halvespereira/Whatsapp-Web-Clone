import React, { useState } from "react";
import "../Styles/Chat.css";
import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { AttachFile, SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import nextId from "react-id-generator";
import axios from "axios";

const options = [
  "Group info",
  "Select messages",
  "Mute notifications",
  "Clear messages",
  "Exit Group",
];

const ITEM_HEIGHT = 48;

function Chat({ currentfriend, currentuserinfo, users }) {
  const [input, setInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const self = users.find((user) => user.uid === currentuserinfo.uid);

  const sendMessage = async (e) => {
    e.preventDefault();

    const obj = {
      name: self.name,
      sender: self.uid,
      message: input,
    };

    axios
      .post("https://whatsapp-project-hp.herokuapp.com/user/messages/new", {
        uid: self.uid,
        friend: currentfriend,
        message: obj,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setInput("");
    window.location.reload();
  };

  if (currentfriend && self) {
    console.log(currentfriend);
    console.log(self);
  }
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>{currentfriend.name ? currentfriend.name : "Chat"}</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <div>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 7,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={handleClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>

      {self && currentfriend ? (
        <div className="chat__body">
          {self.friends.map((friend) =>
            friend.uid === currentfriend.uid
              ? friend.messages.map((message) => (
                  <p
                    className={
                      message.sender === currentuserinfo.uid
                        ? `chat__message chat__reciever`
                        : `chat__message`
                    }
                    key={nextId()}
                  >
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                  </p>
                ))
              : null
          )}
        </div>
      ) : (
        <div className="chat__body"></div>
      )}

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage}>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
