import React from "react";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader";

const UserRoute = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return userInfo && userInfo.token ? (
    <Route {...rest} render={() => children} />
  ) : (
  <h1>Loading...</h1>
  );
};

export default UserRoute;
