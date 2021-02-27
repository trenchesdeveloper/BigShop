import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import laptop from "../../images/laptop.png";
import ProductListItems from "./ProductListItems";

const { Meta } = Card;

const SingleProduct = ({ product }) => {
  const { images, title} = product;
  return (
    <>
      <div className="col-md-7">
        {images && images.length ? (
          <Carousel showArrows autoPlay infiniteLoop>
            {images &&
              images.map((image) => {
                return (
                  <img
                    key={image.public_id}
                    src={image.url}
                    alt={title}
                    className=""
                  />
                );
              })}
          </Carousel>
        ) : (
          <Card
            cover={
              <img
                src={laptop}
                alt={title}
                className="mb-3 card-image"
              />
            }
          ></Card>
        )}
      </div>

      <div className="col-md-5">
          <h1 className="bg-info p-3">{title}</h1>
        <Card
          actions={[
            <>
              <ShoppingCartOutlined className="text-success" /> Add To Cart{" "}
            </>,

            <Link to="/">
              <HeartOutlined className="text-info" /> <br /> Add To WishList
            </Link>,
          ]}
        >
       

         <ProductListItems product={product}/>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
