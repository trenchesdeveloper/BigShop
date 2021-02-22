import React from "react";
import { Card } from "antd";
import laptop from "../../images/laptop.png"
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  const { title, description, images } = product;
  return (
    <Card
      cover={
        <img
          className="p-1"
          style={{ height: "150px", objectFit: "cover" }}
          alt={title}
          src={images && images.length ? images[0].url : laptop}
        />
      }
      actions={
        [
          <EditOutlined className='text-warning'/>, <DeleteOutlined className='text-danger'/>
        ]
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default AdminProductCard;