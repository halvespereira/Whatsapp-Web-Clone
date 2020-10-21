import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import "../Styles/Sidebar.css";
import { addFriendFunction } from "../helperFunctions";

const SidebarAddFriend = ({ currentUserDoc, setCurrentUserDoc }) => {
  const [friend, setFriend] = useState("");

  const addFriend = async (e) => {
    e.preventDefault();

    addFriendFunction(friend, currentUserDoc, setCurrentUserDoc);

    setFriend("");
  };

  return (
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
  );
};

export default SidebarAddFriend;
