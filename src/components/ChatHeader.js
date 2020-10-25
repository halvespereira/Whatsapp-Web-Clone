import React, { useState } from "react";
import "../Styles/Chat.css";
import { Avatar, Menu, MenuItem, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const options = [
  "Group info",
  "Select messages",
  "Mute notifications",
  "Clear messages",
  "Exit Group",
];

const ITEM_HEIGHT = 48;

const ChatHeader = ({ currentFriend }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="chat__header">
      <Avatar />
      <div className="chat__headerInfo">
        <h3>{currentFriend.name}</h3>
        <p>
          {currentFriend
            ? `last seen ${currentFriend.lastSeenDate} at ${currentFriend.lastSeenTime}`
            : "Pick a chat"}
        </p>
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
  );
};

export default ChatHeader;
