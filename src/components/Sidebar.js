import React, { useState } from "react";
import "../Styles/Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import fire from "./firebase";
import nextId from "react-id-generator";
import axios from "axios";

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

function Sidebar({ users, currentuserinfo }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [friend, setFriend] = useState("");
  const [friendschats, setFriendschats] = useState([]);
  const open = Boolean(anchorEl);

  const auth = fire.auth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuAction = (e) => {
    if (e.currentTarget.textContent === "Log out") {
      auth.signOut();
    }
  };
  const addFriend = (e) => {
    e.preventDefault();

    const newFriend = users.find((user) => user.email === friend) || null;

    if (newFriend != null) {
      setFriendschats([...friendschats, newFriend]);
    } else alert("User not found!");

    axios
      .post("https://whatsapp-project-hp.herokuapp.com/user/add/friend", {
        currentUser: currentuserinfo.uid,
        newFriend: newFriend,
      })
      .then(function (response) {
        console.log(response, "posted successfully");
      })
      .catch(function (error) {
        console.log(error);
      });

    setFriend("");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar className="avatar" />
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
        <form className="sidebar__searchContainer">
          <SearchOutlined className="searchIconSidebar" />
          <input
            placeholder="Add new friend by email"
            type="text"
            value={friend}
            onChange={(e) => setFriend(e.target.value)}
          />

          <IconButton aria-label="delete" onClick={addFriend} type="submit">
            <PersonAddIcon />
          </IconButton>
        </form>
      </div>
      <div className="sidebar__chats">
        {friendschats.map(
          ((friend) => <SidebarChat friend={friend} key={nextId()} />: null)
        )}
      </div>
    </div>
  );
}

export default Sidebar;
