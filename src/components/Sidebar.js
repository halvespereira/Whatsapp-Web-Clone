import React, { useState } from "react";
import "../Styles/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import fire from "./firebase";

const options = [
  "New Group",
  "Create a room",
  "Profile",
  "Archived",
  "Starred",
  "Settings",
  "Log out",
];

const ITEM_HEIGHT = 48;

function Sidebar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const auth = fire.auth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuAction = (e) => {
    if (e.currentTarget.textContent === "Log out") {
      auth.signOut();
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          className="avatar"
          src="https://henriquepereira.me/images/Suit%20Photo%20(4).jpg/"
        />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
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
                  onClick={menuAction}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </div>
      <div
        className="
      sidebar__search"
      >
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
