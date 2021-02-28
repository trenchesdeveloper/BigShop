import React, { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { StarOutlined } from "@ant-design/icons";

const RatingModal = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      <div onClick={() => setModalVisible(true)}>
        <StarOutlined className="text-danger" /> <br />
        {userInfo ? "Leave Rating" : "Login to Leave Rating"}
      </div>

      <Modal
        title="Leave your Rating"
        centered
        visible={modalVisible}
        onOk={() => {
          setModalVisible(false);
        toast.success('Thanks for your review')}}

        onCancel={()=> setModalVisible(false)}
      >
        {children}
      </Modal>
    </>
  );
};

export default RatingModal;
