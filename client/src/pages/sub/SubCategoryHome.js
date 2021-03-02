import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subCategoryGet } from "../../actions/subCategoryActions";
import ProductCard from "../../components/cards/ProductCard";



const SubCategoryHome = ({ match }) => {
  const { slug } = match.params;

  const dispatch = useDispatch();
  const { loading, error, subCategory, products } = useSelector(
    (state) => state.subCategory
  );

  useEffect(() => {
    dispatch(subCategoryGet(slug));
  }, [slug, dispatch]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {loading ? (
            <h4 className="text-center mt-5 mb-5 display-4 jumbotron">
              Loading...
            </h4>
          ) : (
            <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
              {products.length} Products in "{subCategory.name}" Sub-Category
            </h4>
          )}
        </div>
      </div>

      <div className="row">
        {products &&
          products.map((product) => (
            <div key={product._id} className="col-md-4">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubCategoryHome;
