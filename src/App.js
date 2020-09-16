import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import fire from "./components/firebase";

import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(false);
  const [userinfo, setUserinfo] = useState([]);

  const auth = fire.auth();

  useEffect(() => {
    axios
      .get("https://whatsapp-project-hp.herokuapp.com/messages/sync")
      .then(function (response) {
        setMessages(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        console.log("end of request");
      });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(true);
        setUserinfo(user);
      } else {
        setUser(false);
      }
    });
  });

  const setMessage = (data) => {
    setMessages(data);
  };

  const toggleUser = (boolean) => {
    setUser(boolean);
  };

  console.log(userinfo);

  return user ? (
    <Home messages={messages} updateState={setMessage} />
  ) : (
    <Login toggleUser={toggleUser} />
  );
}

export default App;
