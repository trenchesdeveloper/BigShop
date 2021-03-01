import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { productGet, productUpdateStar } from "../actions/productActions";
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

  useEffect(() => {
    dispatch(productGet(slug));
  }, [slug, dispatch]);

  useEffect(()=>{
    if(errorUpdateStar){
      toast.error(errorUpdateStar)
    }else if(success){
      dispatch(productGet(slug))
    }
  }, [dispatch, success, errorUpdateStar, slug])

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
    </div>
  );
};

export default Product;
