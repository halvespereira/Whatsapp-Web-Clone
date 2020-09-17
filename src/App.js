import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import fire from "./components/firebase";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [isloggedin, setIsloggedin] = useState(false);
  const [currentuserinfo, setCurrentuserinfo] = useState([]);

  const auth = fire.auth();

  useEffect(() => {
    axios
      .get("https://whatsapp-project-hp.herokuapp.com/users/sync")
      .then(function (response) {
        setUsers(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log("Users fetched successfully");
      });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsloggedin(true);
        setCurrentuserinfo(user);
      } else {
        setIsloggedin(false);
      }
    });
  });

  const setUsersfunction = (data) => {
    setUsers(data);
  };

  return isloggedin ? (
    <Home
      users={users}
      updateUsers={setUsersfunction}
      currentuserinfo={currentuserinfo}
    />
  ) : (
    <Login />
  );
}

export default App;
