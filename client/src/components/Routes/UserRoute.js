import React from "react";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return userInfo && userInfo.token ? (
    <Route {...rest}  />
  ) : (
    <LoadingToRedirect />
  );
};

export default UserRoute;
