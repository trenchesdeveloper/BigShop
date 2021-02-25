import React from "react";
import { Card } from "antd";
import laptop from "../../images/laptop.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;

const AdminProductCard = ({ product, handleDelete }) => {
  const { title, description, images, slug } = product;
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
      actions={[
        <Link to={`/admin/products/${slug}`}>
          <EditOutlined className="text-warning" />
        </Link>,

        <DeleteOutlined
          className="text-danger"
          onClick={() => handleDelete(slug)}
        />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default AdminProductCard;
