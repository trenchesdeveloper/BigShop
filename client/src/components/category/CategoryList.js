import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryList } from "../../actions/categoryActions";

const CategoryList = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categoryList);

  useEffect(() => {
    dispatch(categoryList());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {categories &&
          categories.map((c) => (
            <div
              key={c._id}
              className="col btn btn-outlined-primary btn-lg btn-block m-3 btn-raised"
            >
              <Link to={c.slug && `/category/${c.slug}`}>{c.name} </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
