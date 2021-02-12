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
const { SubMenu, Item } = Menu; // or Menu.subMenu

const Header = () => {
  const [current, setCurrent] = useState("home");

  // dispatch
  const dispatch = useDispatch();
  let history = useHistory();
  const {user} = useSelector((state) => state.userInfo);

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

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register </Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title=''
          className="float-right"
        >
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
          <Item icon={<LogoutOutlined />} onClick={logoutHandler}>
            Logout
          </Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default Header;
