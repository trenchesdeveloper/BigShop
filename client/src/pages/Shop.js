import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  productFetchFilter,
  productListByCount,
} from "../actions/productActions";
import ProductCard from "../components/cards/ProductCard";
import {
  fetchProductsByCount,
  fetchProductsByFilters,
} from "../fetchUtils/product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { products: productsCount, loading } = useSelector(
    (state) => state.productListByCount
  );

  //   const { products: productsFetch, loading: loadingFetch } = useSelector(
  //     (state) => state.productFetchFilter
  //   );

  // Get search from the redux store
  const { text } = useSelector((state) => state.search);

    // 2) Get product after search input
    useEffect(() => {
      const delayed = setTimeout(() => {
        fetchProductsByFilters({ query: text }).then((res) =>
          setProducts(res.data)
        );
      }, 300);

      return () => {
        clearTimeout(delayed);
      };
    }, [text]);

  // 1) Get Product on page load
  useEffect(() => {
      fetchAll(12)
  }, []);

  const fetchAll = () => {
    fetchProductsByCount(12).then((res) => setProducts(res.data));
    console.log(products);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">Sidebar filter</div>

        <div className="col-md-9">
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
