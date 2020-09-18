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
  const [currentfriend, setCurrentfriend] = useState({});

  const auth = fire.auth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      setIsloggedin(true);
      setCurrentuserinfo(user);
    } else {
      setIsloggedin(false);
    }
  });

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get("https://whatsapp-project-hp.herokuapp.com/users/sync")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error, "Could not fetch users");
      });

    return () => {
      source.cancel();
    };
  }, []);

  const updateCurrentfriend = (data) => {
    setCurrentfriend(data);
  };

  return isloggedin ? (
    <Home
      users={users}
      currentuserinfo={currentuserinfo}
      updateFriend={updateCurrentfriend}
      currentfriend={currentfriend}
    />
  ) : (
    <Login />
  );
}

export default App;
