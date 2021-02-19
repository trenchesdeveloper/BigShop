import React, { useState } from "react";
import UserNav from "../../components/Nav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // do validation
    if (!password || !passwordConfirm) {
      toast.error("password and confirm password cannot be empty");
      return;
    }

    if (password !== passwordConfirm) {
      toast.error("password do not match");
      return;
    }

    setLoading(true);

    // Update Password

    try {
      await auth.currentUser.updatePassword(password);
      setLoading(false);
      setPassword("");
      setPasswordConfirm("");
      toast.success("Password Updated");
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Password Update</h4>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter New Password"
                value={password}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="form-control"
                placeholder="Confirm Password"
                disabled={loading}
                value={passwordConfirm}
              />
            </div>
            <button
              className="btn btn-primary"
              disabled={
                !password || password.length < 6 || loading || !passwordConfirm
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
