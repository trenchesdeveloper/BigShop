import React, { useState } from "react";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // create a redirect config
    const config = {
      url: "http://localhost:3000/register/complete",
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config); // firebase sendlink to email

    // use toast to send notification
    toast.success(`Email is sent to ${email}. click the link to complete your registration`)

    // save the user's email to localStorage
    localStorage.setItem('emailForRegistration', email)

    // clear the email state
    setEmail('')


  };
  return (
    <>
    <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <button type="submit" className="btn btn-raised mt-3">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
