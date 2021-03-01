import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  productGet,
  productGetRelated,
  productUpdateStar,
} from "../actions/productActions";
import ProductCard from "../components/cards/ProductCard";
import SingleProduct from "../components/cards/SingleProduct";

const Product = ({ match }) => {
  const { slug } = match.params;
  const [star, setStar] = useState(0);

  const dispatch = useDispatch();

  const { error, loading, product } = useSelector((state) => state.productGet);
  const { userInfo } = useSelector((state) => state.userLogin);

  const {
    error: errorUpdateStar,
    loading: loadingUpdateStar,
    product: productUpdate,
    success,
  } = useSelector((state) => state.productUpdateStar);

  const {
    error: errorRelated,
    loading: loadingRelated,
    relatedProducts,
  } = useSelector((state) => state.productGetRelated);

  useEffect(() => {
    dispatch(productGet(slug));
  }, [slug, dispatch, star]);

  useEffect(() => {
    if (product && product.ratings && userInfo) {
      // check if current loggedin user have already added rating to this product
      let existingRatingObject = product.ratings.find(
        (el) => el.postedBy.toString() === userInfo._id.toString()
      );

      existingRatingObject && setStar(existingRatingObject.star); // current user star
    }
  }, []);

  useEffect(() => {
    if (product) {
      dispatch(productGetRelated(product._id));
    }
  }, [product, dispatch]);

  const onStarClick = (newRating, productId) => {
    console.table(newRating, productId);

    setStar(newRating);

    // dispatch the updated star

    dispatch(productUpdateStar(userInfo.token, productId, newRating));
  };

  return (
    <div className="container-fluid">
      {/* first row is product row */}
      <div className="row pt-4">
        <SingleProduct
          product={product}
          onStarClick={onStarClick}
          star={star}
        />
      </div>

      {/* second row is for related product */}

      <div className="row">
        <div className="col text-center pt-5 pb-5">
          <hr />
          <h4>Related Products</h4>

          <hr />
        </div>
      </div>

      <div className="row pb-5">
        {relatedProducts ? (
          relatedProducts.map((product) => {
            return (

              <div key={product._id} className='col-md-4'>
              {console.log(product)}
                <ProductCard product={product} />
              </div>
            );
          })
        ) : (
          <div className='text-center'>No Products Found</div>
        )}
      </div>
    </div>
  );
};

export default Product;
