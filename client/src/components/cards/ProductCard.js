import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import laptop from '../../images/laptop.png';
import { Link } from 'react-router-dom';
import { showAverage } from '../../fetchUtils/rating';
import _ from 'lodash';

const { Meta } = Card;

const ProductCard = ({ product }) => {
  const [tooltip, setTooltip] = useState('Click to add');

  const { images, title, description, slug, price } = product;

  const handleAddToCart = () => {
    // create a cart array
    let cart = [];

    if (typeof window !== 'undefined') {
      // if cart is in localstorage, Get it
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }

      // push new product to cart and save to localStorage
      cart.push({ ...product, count: 1 });

      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual());

      // save in localStorage
      localStorage.setItem('cart', JSON.stringify(unique));

      //show tool tip
      setTooltip('Added');
    }
  };

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
          <Tooltip title={tooltip}>
            <a href onClick={handleAddToCart}>
              <ShoppingCartOutlined className="text-danger" /> <br /> Add To
              Cart{' '}
            </a>
            ,
          </Tooltip>,
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
