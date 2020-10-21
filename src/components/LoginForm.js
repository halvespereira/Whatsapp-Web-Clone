import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../Styles/UserAuthentication.css";
import { loginFunction } from "../helperFunctions";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#4AC959",
    width: "200px",

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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();

  const login = (e) => {
    e.preventDefault();

    loginFunction(email, password, setPassword, setEmail);
  };

  return (
    <div className="form">
      <div className="title">Login</div>

      <form>
        <div className="inputsDiv">
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
        </div>

        <br />
        <div className="buttons">
          <BootstrapButton
            onClick={login}
            variant="contained"
            color="primary"
            disableRipple
            className={classes.margin}
          >
            Login
          </BootstrapButton>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
