import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import UserAuthentication from "./components/UserAuthentication";
import fire from "./firebase";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserDoc, setCurrentUserDoc] = useState(null);
  const [currentFriend, setCurrentFriend] = useState("");

  const auth = fire.auth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, [auth]);

  return currentUser ? (
    <Home
      currentUserDoc={currentUserDoc}
      setCurrentUserDoc={setCurrentUserDoc}
      currentFriend={currentFriend}
      setCurrentFriend={setCurrentFriend}
    />
  ) : (
    <UserAuthentication />
  );
}

export default App;
