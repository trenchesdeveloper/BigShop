import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { StarOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const RatingModal = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const history = useHistory();

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleModal = () => {
    if (userInfo && userInfo.token) {
      setModalVisible(true);
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <div onClick={handleModal}>
        <StarOutlined className="text-danger" /> <br />
        {userInfo ? "Leave Rating" : "Login to Leave Rating"}
      </div>

      <Modal
        title="Leave your Rating"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
          toast.success("Thanks for your review");
        }}
        onCancel={() => setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
