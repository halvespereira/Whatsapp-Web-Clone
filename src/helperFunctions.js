import fire from "./firebase";
import firebase from "firebase";

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

export const addFriendFunction = async (
  friend,
  currentUserDoc,
  setCurrentUserDoc
) => {
  await db
    .collection("users")
    .where("email", "==", friend)
    .get()
    .then(function (docs) {
      docs.forEach(function (doc) {
        db.collection("users")
          .doc(doc.data().uid)
          .collection("friends")
          .doc(setCurrentUserDoc.uid)
          .set({
            name: currentUserDoc.name,
            email: currentUserDoc.email,
            uid: currentUserDoc.uid,
            messages: [],
          })
          .then(function () {
            console.log("Friend added successfully");
          })
          .catch(function (err) {
            console.log(err);
          });

        db.collection("users")
          .doc(currentUserDoc.uid)
          .collection("friends")
          .doc(doc.data().uid)
          .set({
            name: doc.data().name,
            email: doc.data().email,
            uid: doc.data().uid,
            messages: [],
          })
          .then(function () {
            console.log("Friend added successfully");
          })
          .catch(function (err) {
            console.log(err);
          });

        // setCurrentUserDoc({
        //   ...currentUserDoc,
        //   friends: [
        //     ...currentUserDoc.friends,
        //     {
        //       name: doc.data().name,
        //       email: doc.data().email,
        //       uid: doc.data().uid,
        //       messages: [],
        //     },
        //   ],
        // });
      });
    });
};

export const sendMessageFunction = async (
  message,
  currentFriend,
  currentUserDoc,
  setCurrentUserDoc
) => {
  // const Obj = {
  //   ...currentUserDoc,
  //   friends: currentUserDoc.friends.map((friend) =>
  //     friend.uid === currentFriend.uid
  //       ? {
  //           ...friend,
  //           messages: [
  //             ...friend.messages,
  //             {
  //               message: message,
  //               sender: currentUserDoc.uid,
  //             },
  //           ],
  //         }
  //       : { ...friend }
  //   ),
  // };
  // setCurrentUserDoc(Obj);
};
