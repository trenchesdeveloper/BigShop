import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const AdminProductCard = ({ product }) => {
  const { title, description, images } = product;
  return (
    <Card
      cover={
        <img
          className="m-2"
          style={{ height: "150px", objectFit: "cover" }}
          alt={title}
          src={images && images.length ? images[0].url : ""}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default AdminProductCard;
