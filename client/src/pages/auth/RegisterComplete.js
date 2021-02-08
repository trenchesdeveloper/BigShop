import React, { useState, useEffect } from "react";
import RegisterForm from "../../components/RegisterForm";
import { auth } from "../../firebase";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getEmail = localStorage.getItem("emailForRegistration")
      ? localStorage.getItem("emailForRegistration")
      : "";
      console.log(window.location.href);

    setEmail(getEmail);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = auth.signInWithEmailLink(email, window.location.href);
    } catch (error) {
      console.log(error);
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
