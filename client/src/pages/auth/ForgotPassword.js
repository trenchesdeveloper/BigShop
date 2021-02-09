import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth, googleAuthProvider } from "../../firebase";
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { loginUser } from "../../actions/userActions";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // create a redirect config
    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    const res = auth.sendPasswordResetEmail(email, config );
  };

  return (
    <div children="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-5">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Forgot Password</h4>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name=""
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />

            <button
              className="btn btn-raised mt-3"
              disabled={!email}
              onClick={handleSubmit}
            >Submit</button>
          </form>

          <Link to="/forgot/password" className="float-right text-danger mt-4">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
