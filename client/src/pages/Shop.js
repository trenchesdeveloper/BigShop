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
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { categoryList } from '../actions/categoryActions';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import Star from '../components/forms/Star';
import { subCategoryList } from '../actions/subCategoryActions';

const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState([0, 0]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState('');
  const [sub, setSub] = useState('');
  const [ok, setOk] = useState(false);

  const dispatch = useDispatch();

  const { products: productsCount, loading } = useSelector(
    (state) => state.productListByCount
  );

  const { categories } = useSelector((state) => state.categoryList);

  const { subCategories } = useSelector((state) => state.subCategoryList);

  //   const { products: productsFetch, loading: loadingFetch } = useSelector(
  //     (state) => state.productFetchFilter
  //   );

  // Get search from the redux store
  const { text } = useSelector((state) => state.search);

  // 1) Get Product on page load
  useEffect(() => {
    fetchAll(12);
    dispatch(categoryList());
    dispatch(subCategoryList());
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
    setCategoryIds([]);
    setStar('');
    setSub('')

    setPrice(value);

    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };

  // 4. load Products based on category
  // show categories in a list of checkbox
  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handleCheck}
          className="pb-2 pl-4 pr-4 pt-3"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
      </div>
    ));

  // handle check for categories
  const handleCheck = (e) => {
    dispatch({ type: 'SEARCH_QUERY', payload: { text: '' } });
    setPrice([0, 0]);
    setStar('');

    const inTheState = [...categoryIds];
    const justChecked = e.target.value;

    const foundInTheState = inTheState.indexOf(justChecked); // true or -1
    // indexOf method ?? if not found  returns -1 else return index
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found, pull out item from index
      inTheState.splice(foundInTheState, 1);
    }

    // set categories Id
    setCategoryIds(inTheState);
    //console.log(inTheState);

    fetchProducts({ category: inTheState });
  };

  // 5. Show Products by star rating

  const handleStarClick = (num) => {
    dispatch({ type: 'SEARCH_QUERY', payload: { text: '' } }); // reset search text
    setPrice([0, 0]); // reset price
    setCategoryIds([]); //reset category
    setSub('')

    setStar(num);

    fetchProducts({ stars: star });
  };

  const showStars = () => {
    return (
      <div className="pr-4 pl-4 pb-2">
        <Star starClick={handleStarClick} numberOfStars={5} />
        <Star starClick={handleStarClick} numberOfStars={4} />
        <Star starClick={handleStarClick} numberOfStars={3} />
        <Star starClick={handleStarClick} numberOfStars={2} />
        <Star starClick={handleStarClick} numberOfStars={1} />
      </div>
    );
  };

  // 6. Show products by subs
  const handleSubmit = (id) => {
    dispatch({ type: 'SEARCH_QUERY', payload: { text: '' } }); // reset search text
    setPrice([0, 0]); // reset price
    setCategoryIds([]); //reset category
    setStar(''); // reset star

    setSub(id);
    fetchProducts({ sub });
  };

  const showSubs = () => {
    return subCategories.map((sub) => {
      return (
        <div
          key={sub._id}
          className="p-1 m-1 badge badge-secondary"
          onClick={() => handleSubmit(sub._id)}
          style={{ cursor: 'pointer' }}
        >
          {sub.name}
        </div>
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4>Search/Filter</h4>

          <hr />
          <Menu mode="inline" defaultOpenKeys={['1', '2', '3', '4']}>
            {/* SubMenu for Price Filter */}
            <SubMenu
              key="1"
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
            {/* SubMenu for Category Filter */}
            <SubMenu
              key="2"
              title={
                <span className="h6">
                  {' '}
                  <DownSquareOutlined /> Categories
                </span>
              }
            >
              <div style={{ marginTop: '-10px' }}>
                {categories && showCategories()}
              </div>
            </SubMenu>

            {/* SubMenu for Star Filter */}
            <SubMenu
              key="3"
              title={
                <span className="h6">
                  {' '}
                  <StarOutlined /> Rating
                </span>
              }
            >
              <div style={{ marginTop: '-10px' }}>{showStars()}</div>
            </SubMenu>

            {/* SubMenu for Category Filter */}
            <SubMenu
              key="4"
              title={
                <span className="h6">
                  {' '}
                  <DownSquareOutlined /> Sub-Categories
                </span>
              }
            >
              <div style={{ marginTop: '-10px' }}>
                {subCategories && showSubs()}
              </div>
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
