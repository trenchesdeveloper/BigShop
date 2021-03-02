import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { categoryGet } from "../../actions/categoryActions";
const CategoryHome = ({ match }) => {
  const { slug } = match.params;

  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(categoryGet(slug));
  }, [slug]);
  return <div></div>;
};

export default CategoryHome;
