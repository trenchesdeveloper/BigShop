import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  productFetchFilter,
  productListByCount,
} from '../actions/productActions';
import ProductCard from '../components/cards/ProductCard';
import {
  fetchProductsByCount,
  fetchProductsByFilters,
} from '../fetchUtils/product';
import { Menu, Slider } from 'antd';
import { DollarOutlined } from '@ant-design/icons';

const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);

  const dispatch = useDispatch();

  const { products: productsCount, loading } = useSelector(
    (state) => state.productListByCount
  );

  //   const { products: productsFetch, loading: loadingFetch } = useSelector(
  //     (state) => state.productFetchFilter
  //   );

  // Get search from the redux store
  const { text } = useSelector((state) => state.search);

  // 1) Get Product on page load
  useEffect(() => {
    fetchAll(12);
  }, []);
  const fetchAll = () => {
    fetchProductsByCount(12).then((res) => setProducts(res.data));
    console.log(products);
  };
// Filter Function /******** */
   const fetchProducts = (arg) => {
     fetchProductsByFilters(arg).then((res) => setProducts(res.data));
   };

  // 2) Get product after search input
  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
    }, 300);

    return () => {
      clearTimeout(delayed);
    };
  }, [text]);

 

  // 3) Get product based on price range
  useEffect(() => {
    fetchProducts({ price });
  }, [ok]);

  const handleSlider = (value) => {
    dispatch({ type: 'SEARCH_QUERY', payload: { text: '' } });
    setPrice(value);

    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4>Search/Filter</h4>

          <hr />
          <Menu mode="inline" defaultOpenKeys={['slider', '2']}>
            <SubMenu
              key="slider"
              title={
                <span className="h6">
                  {' '}
                  <DollarOutlined /> Price
                </span>
              }
            >
              <Slider
                className="ml-4 mr-4"
                tipFormatter={(value) => `₦${value}`}
                range
                value={price}
                onChange={handleSlider}
                max={200000}
              />
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9 pt-2">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4 className="text-danger">Products</h4>
          )}

          {products && products.length < 1 && <p>No Products Found</p>}

          <div className="row pb-5">
            {products &&
              products.map((product) => (
                <div className="col-md-4 mt-3" key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
