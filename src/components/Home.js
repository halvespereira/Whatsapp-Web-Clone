import React, { useEffect } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import fire from "../firebase";

const Home = ({
  currentUserDoc,
  setCurrentUserDoc,
  currentFriend,
  setCurrentFriend,
  friendsList,
  setFriendsList,
  messagesList,
  setMessagesList,
}) => {
  const db = fire.firestore();
  const auth = fire.auth();

  useEffect(() => {
    db.collection("users")
      .doc(auth.currentUser.uid)
      .onSnapshot(function (doc) {
        setCurrentUserDoc(doc.data());
      });

    db.collection("users")
      .doc(auth.currentUser.uid)
      .collection("friends")
      .onSnapshot(function (querySnapshot) {
        let friends = [];
        querySnapshot.forEach(function (doc) {
          friends.push(doc.data());
        });
        setFriendsList(friends);
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
          friendsList={friendsList}
          setMessagesList={setMessagesList}
        />
        <Chat
          currentUserDoc={currentUserDoc}
          setCurrentUserDoc={setCurrentUserDoc}
          currentFriend={currentFriend}
          setCurrentFriend={setCurrentFriend}
          messagesList={messagesList}
        />
      </div>
    </div>
  );
};

export default Home;
