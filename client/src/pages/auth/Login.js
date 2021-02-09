import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div children="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>

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
            >
              Login with Email/Password
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
