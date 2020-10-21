import React from "react";
import "../Styles/UserAuthentication.css";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const UserAuthentication = () => {
  return (
    <div className="UserAuthentication">
      <LoginForm />
      <SignUpForm />
    </div>
  );
};

export default UserAuthentication;
