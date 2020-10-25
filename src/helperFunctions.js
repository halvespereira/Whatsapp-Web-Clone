import fire from "./firebase";

const auth = fire.auth();
const db = fire.firestore();

export const signupFunction = async (email, password, name) => {
  await auth
    .createUserWithEmailAndPassword(email, password)
    .catch(function (err) {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
    });

  const user = auth.currentUser;
  console.log(user);

  db.collection("users")
    .doc(user.uid)
    .set({
      name: name,
      email: email,
      uid: user.uid,
    })
    .then(function () {
      console.log("user added successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const loginFunction = (email, password, setPassword, setEmail) => {
  auth.signInWithEmailAndPassword(email, password).catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
    console.log(errorCode);
    alert(errorMessage);
  });

  setPassword("");
  setEmail("");
};

export const addFriendFunction = async (friend, currentUserDoc) => {
  await db
    .collection("users")
    .where("email", "==", friend)
    .get()
    .then(function (docs) {
      docs.forEach(async function (doc) {
        await db
          .collection("users")
          .doc(doc.data().uid)
          .collection("friends")
          .doc(currentUserDoc.uid)
          .set({
            name: currentUserDoc.name,
            email: currentUserDoc.email,
            uid: currentUserDoc.uid,
          })
          .then(function () {
            console.log("Friend added successfully");
          })
          .catch(function (err) {
            console.log(err);
          });

        await db
          .collection("users")
          .doc(currentUserDoc.uid)
          .collection("friends")
          .doc(doc.data().uid)
          .set({
            name: doc.data().name,
            email: doc.data().email,
            uid: doc.data().uid,
          })
          .then(function () {
            console.log("Friend added successfully");
          })
          .catch(function (err) {
            console.log(err);
          });
      });
    });
};

export const sendMessageFunction = (message, currentFriend, currentUserDoc) => {
  db.collection("users")
    .doc(currentUserDoc.uid)
    .collection("friends")
    .doc(currentFriend.uid)
    .collection("messages")
    .add({
      message,
      name: currentUserDoc.name,
      sender: currentUserDoc.uid,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });

  db.collection("users")
    .doc(currentFriend.uid)
    .collection("friends")
    .doc(currentUserDoc.uid)
    .collection("messages")
    .add({
      message,
      sender: currentUserDoc.uid,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });
};

export const getFriendMessages = (setMessagesList, currentUserDoc, friend) => {
  db.collection("users")
    .doc(currentUserDoc.uid)
    .collection("friends")
    .doc(friend.uid)
    .collection("messages")
    .onSnapshot(function (querySnapshot) {
      let messages = [];
      querySnapshot.forEach(function (doc) {
        messages.push(doc.data());
      });
      setMessagesList(messages);
    });
};
