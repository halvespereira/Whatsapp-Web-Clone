import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import axios from "axios";

import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

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

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} updateState={setMessage} />
      </div>
    </div>
  );
}

export default App;
