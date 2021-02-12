import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../actions/userActions";
import { auth } from "../../firebase";
import { createOrUpdateUser } from "../../fetchUtils/auth";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin);

  useEffect(() => {
    const getEmail = localStorage.getItem("emailForRegistration")
      ? localStorage.getItem("emailForRegistration")
      : "";

    setEmail(getEmail);
  }, []);

  // handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and Password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("password must be at least 6 characters");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      // check if the email is verified
      if (result.user.emailVerified) {
        // remove user email from localstorage
        localStorage.removeItem("emailForRegistration");

        // get user id token
        let user = auth.currentUser;

        // update user with password
        await user.updatePassword(password);

        const idTokenResult = await user.getIdTokenResult();

        // dispatch the action
        dispatch(loginUser(idTokenResult.token));
        //redirect
        history.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div children="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete Register</h4>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name=""
              value={email}
              className="form-control"
              disabled
            />

            <input
              type="password"
              name=""
              value={password}
              className="form-control mt-3"
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              placeholder="Enter Password"
            />
            <button type="submit" className="btn btn-raised mt-3">
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
