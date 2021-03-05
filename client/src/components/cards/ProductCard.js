import React from "react";
import { Card, Skeleton } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../images/laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../fetchUtils/rating";

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const { images, title, description, slug, price } = product;
  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pb-3 pt-1">no rating yet</div>
      )}
      <Card
        cover={
          <img
            className="p-1"
            style={{ height: '150px', objectFit: 'cover' }}
            alt={title}
            src={images && images.length ? images[0].url : laptop}
          />
        }
        actions={[
          <Link to={`/products/${slug}`}>
            <EyeOutlined className="text-warning" /> <br /> View Product
          </Link>,
          <>
            <ShoppingCartOutlined className="text-danger" /> <br /> Add To Cart{' '}
          </>,
        ]}
      >
        {' '}
        <Meta
          title={`${title} - ₦${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
