import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const Home = ({ messages, setMessage }) => {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} updateState={setMessage} />
      </div>
    </div>
  );
};

export default Home;
