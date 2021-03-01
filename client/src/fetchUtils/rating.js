import React from "react";
import StarRating from "react-star-ratings";

export const showAverage = (product) => {
  if (product && product.ratings) {
    let ratingsArray = product.ratings;

    let total = [];

    let length = ratingsArray.length;

    ratingsArray.map((r) => total.push(r.star));

    let totalReduced = total.reduce((p, n) => p + n, 0);

    let averageRating = totalReduced / length;

    return (
      <div className="text-center pt-1 pb-3">
        <span>
          <StarRating
            rating={averageRating}
            starDimension="20px"
            starSpacing="2px"
            starRatedColor="red"
            editing={false}
          />  
          ({product.ratings.length})
        </span>
      </div>
    );
  }
};
