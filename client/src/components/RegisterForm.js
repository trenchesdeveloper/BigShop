import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name=""
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <button type="submit" className='btn btn-raised mt-3'>Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
