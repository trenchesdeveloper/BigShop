import React from "react";

const CategoryForm = ({ handleSubmit, name, setName }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-outline-primary" disabled={!name}>
          Update
        </button>

        <div></div>
      </div>
    </form>
  );
};

export default CategoryForm;
