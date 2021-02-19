import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import LoadingToRedirect from "./LoadingToRedirect";
import { currentAdmin } from "../../fetchUtils/auth";

const AdminRoute = ({ history, children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo.token) {
      currentAdmin(userInfo.token)
        .then((res) => {
          console.log(res);
          setOk(true);
        })
        .catch(err =>console.log(err, 'ADMIN ROUTE ERR'));
    }
  }, [userInfo]);

  return ok ? (
    <Route {...rest} />
  ) : (
    <LoadingToRedirect />
  );
};

export default AdminRoute;
