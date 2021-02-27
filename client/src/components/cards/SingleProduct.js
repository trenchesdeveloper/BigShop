import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import laptop from "../../images/laptop.png";

const { Meta } = Card;

const SingleProduct = ({ product }) => {
  const { images, title, description, slug } = product;
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
          <Meta title={title} description={description} />

          <p>
            price/category/subs/shipping/color/brand/quantity/available/sold
          </p>
        </Card>
      </div>
    </>
  );
};

export default SingleProduct;
