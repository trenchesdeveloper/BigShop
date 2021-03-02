import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { subCategoryList } from "../../actions/subCategoryActions";

const SubList = () => {
  const dispatch = useDispatch();

  const { subCategories } = useSelector((state) => state.subCategoryList);

  useEffect(() => {
    dispatch(subCategoryList());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        {subCategories &&
          subCategories.map((s) => (
            <div
              key={s._id}
              className="col btn btn-outlined-primary btn-lg btn-block m-3 btn-raised"
            >
              <Link to={s.slug && `/sub/${s.slug}`}>{s.name} </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubList;
