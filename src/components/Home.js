import React, { useEffect } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import fire from "../firebase";

const Home = ({
  currentUserDoc,
  setCurrentUserDoc,
  currentFriend,
  setCurrentFriend,
}) => {
  const db = fire.firestore();
  const auth = fire.auth();

  useEffect(() => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .onSnapshot(function (doc) {
        setCurrentUserDoc(doc.data());
      });
  }, [db]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar
          currentUserDoc={currentUserDoc}
          setCurrentUserDoc={setCurrentUserDoc}
          currentFriend={currentFriend}
          setCurrentFriend={setCurrentFriend}
        />
        <Chat
          currentUserDoc={currentUserDoc}
          setCurrentUserDoc={setCurrentUserDoc}
          currentFriend={currentFriend}
          setCurrentFriend={setCurrentFriend}
        />
      </div>
    </div>
  );
};

export default Home;
