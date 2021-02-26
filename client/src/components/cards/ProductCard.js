import React from "react";
import { Card, Skeleton } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";


const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { images, title, description, slug } = product;
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
        <Link to={`/products/${slug}`}>
          <EyeOutlined className="text-warning" /> <br /> View Product
        </Link>,
        <>
          <ShoppingCartOutlined className="text-danger" /> <br /> Add To Cart{" "}
        </>,
      ]}
    >
      {" "}
      <Meta
        title={title}
        description={`${description && description.substring(0, 40)}...`}
      />
    </Card>
  );
};

export default ProductCard;
