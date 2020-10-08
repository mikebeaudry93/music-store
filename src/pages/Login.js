import React from "react";

// strapi function
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";
// handle user
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

const Login = () => {
  const history = useHistory();
  //   setup user context
  const { userLogin, alert, showAlert } = React.useContext(UserContext);

  //   state values
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  const toggleMember = () => {
    setIsMember((prevState) => {
      let isTheMember = !prevState;
      isTheMember ? setUsername("default") : setUsername("");
      return isTheMember;
    });
  };

  const handleSubmit = async (e) => {
    showAlert({
      msg: "accessing user data. please wait...",
    });
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({ msg: `you are now logged in ${username}. ` });
      history.push("/");
    } else {
      showAlert({
        msg: "email or password was incorrect. please try again...",
        type: "danger",
      });
    }
  };

  return (
    <section className="form-section">
      <h2 className="login-section-title">
        {isMember ? "Sign In" : "Register"}
      </h2>
      <form className="form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        {/* end of single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* end of single input */}

        {/* single input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
        )}
        {/* end of single input */}
        {/* empty form text */}
        {isEmpty && (
          <p className="form-error">please fill out all required fields</p>
        )}
        {/* submit btn */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-block btn-single-product"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        {/* register link */}
        <p className="footer-text">
          {isMember ? "need to register?" : "already a member?"}
          <button
            className="register-toggle"
            type="button"
            onClick={toggleMember}
          >
            click here
          </button>
        </p>
      </form>
    </section>
  );
};

export default Login;
