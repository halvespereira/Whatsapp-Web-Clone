import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";

import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(false);

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

  const setMessage = (data) => {
    setMessages(data);
  };

  const toggleUser = (boolean) => {
    setUser(boolean);
  };

  return user ? (
    <Home messages={messages} updateState={setMessage} />
  ) : (
    <Login toggleUser={toggleUser} />
  );
}

export default App;
