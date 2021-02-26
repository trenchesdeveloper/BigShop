import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../actions/productActions";
import Jumbotron from "../components/cards/Jumbotron";
import LoadingCard from "../components/cards/LoadingCard";
import ProductCard from "../components/cards/ProductCard";
import NewArrivals from "../components/home/NewArrivals";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-danger text-center h1 font-weight-bold">
        <Jumbotron
          text={["Latest Products", "Best Selling", "Latest Product"]}
        />
      </div>
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>

      <NewArrivals />
    </>
  );
};

export default Home;
