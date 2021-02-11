import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth, googleAuthProvider } from "../../firebase";
import { Button } from "antd";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { loginUser } from "../../actions/userActions";
import Loader from "../../components/Loader";

const createOrUpdateUser = async (authtoken) => {
  return await axios.post(
    "/api/auth/createOrUpdateUser",
    {},
    {
      "Content-Type": "application/json",
      headers: {
        authtoken,
      },
    }
  );
};

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (user && user.token) history.push("/");
  // }, [user, history]);

  // handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      const idTokenResult = await user.getIdTokenResult();
      // send token to
      const res = await createOrUpdateUser(idTokenResult.token);

      console.log(res);

      // // dispatch the action
      // dispatch(
      //   loginUser({
      //     email: user.email,
      //     token: idTokenResult.token,
      //   })
      // );

      // history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    try {
      const { user } = await auth.signInWithPopup(googleAuthProvider);

      const idTokenResult = await user.getIdTokenResult();

      // dispatch the action
      dispatch(
        loginUser({
          email: user.email,
          token: idTokenResult.token,
        })
      );

      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div children="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? <Loader /> : <h4>Login</h4>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name=""
              value={email}
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />

            <input
              type="password"
              name=""
              value={password}
              className="form-control mt-3"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
            <Button
              icon={<MailOutlined />}
              className="mb-3 mt-3"
              type="primary"
              block
              shape="round"
              size="large"
              disabled={!email || password.length < 6}
              onClick={handleSubmit}
            >
              Login with Email/Password
            </Button>
          </form>

          <Button
            icon={<GoogleOutlined />}
            type="danger"
            block
            shape="round"
            size="large"
            onClick={googleLogin}
          >
            Login with Google
          </Button>
          <Link to="/forgot/password" className="float-right text-danger mt-4">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
