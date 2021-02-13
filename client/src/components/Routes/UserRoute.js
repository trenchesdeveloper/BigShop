import React from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";

const UserRoute = ({ children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return userInfo && userInfo.token ? (
    <Route {...rest} />
  ) : (
    <LoadingToRedirect />
  );
};

export default UserRoute;
