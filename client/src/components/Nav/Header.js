import React, { useState } from "react";
import firebase from "firebase";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { Menu } from "antd";
import {
  LogoutOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Search from "../forms/Search";
const { SubMenu, Item } = Menu; // or Menu.subMenu

const Header = () => {
  const [current, setCurrent] = useState("home");

  // dispatch
  const dispatch = useDispatch();
  let history = useHistory();
  const { userInfo } = useSelector((state) => state.userLogin);

  // create click handler
  const handleClick = (e) => {
    //  console.log(e.key);
    setCurrent(e.key);
  };

  const logoutHandler = () => {
    firebase.auth().signOut();

    dispatch(logout());

    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      {!userInfo && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register </Link>
        </Item>
      )}

      {!userInfo && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {userInfo && (
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title={
            userInfo && userInfo.name
              ? userInfo.name.split(" ")
              : userInfo.email.split("@")
          }
          className="float-right"
        >
          {userInfo && userInfo.role === "subscriber" && (
            <Item>
              <Link to="/user/dashboard">Dashboard</Link>
            </Item>
          )}

          {userInfo && userInfo.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logoutHandler}>
            Logout
          </Item>
        </SubMenu>
      )}

      <span className="float-right p-1">
        <Search />
      </span>
    </Menu>
  );
};

export default Header;
