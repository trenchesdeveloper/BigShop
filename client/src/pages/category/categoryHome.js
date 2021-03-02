import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categoryHome = ({ match }) => {
  const { slug } = match.params;
  return <div>category {slug}</div>;
};

export default categoryHome;
