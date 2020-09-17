import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../Styles/Login.css";
import fire from "./firebase";
import axios from "axios";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#4AC959",

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#128C7E",
      boxShadow: "none",
    },

    "&:active": {
      transform: "scale(0.97)",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const auth = fire.auth();

  const signup = async (e) => {
    e.preventDefault();

    await auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (err) {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
      });

    const user = auth.currentUser;

    axios
      .post("https://whatsapp-project-hp.herokuapp.com/user/new", {
        name: name,
        email: email,
        uid: user.uid,
        friends: [],
      })
      .then(function (response) {
        console.log(response, "posted successfully");
      })
      .catch(function (error) {
        console.log(error);
      });

    setName("");
    setPassword("");
    setEmail("");
  };

  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode);
      alert(errorMessage);
    });

    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="Login">
      <div className="form">
        <div className="title">Welcome!</div>

        <form>
          <div>
            <FormControl className={`${classes.margin} inputs`}>
              <InputLabel htmlFor="name-input">Name</InputLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name-input"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          <div>
            <FormControl className={`${classes.margin} inputs`}>
              <InputLabel htmlFor="email-input">Email</InputLabel>
              <Input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                id="email-input"
                startAdornment={
                  <InputAdornment position="start">
                    <EmailRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={`${classes.margin} inputs`}>
              <InputLabel htmlFor="password-input">Password</InputLabel>
              <Input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password-input"
                startAdornment={
                  <InputAdornment position="start">
                    <LockRoundedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <br />
          <div className="buttons">
            <BootstrapButton
              type="submit"
              onClick={login}
              variant="contained"
              color="primary"
              disableRipple
              className={classes.margin}
            >
              Login
            </BootstrapButton>
            <BootstrapButton
              onClick={signup}
              variant="contained"
              color="primary"
              disableRipple
              className={classes.margin}
            >
              Signup
            </BootstrapButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
