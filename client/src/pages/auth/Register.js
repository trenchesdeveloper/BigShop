import React from "react";
import RegisterForm from "../../components/RegisterForm";

const Register = () => {
  return (
    <div children="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
