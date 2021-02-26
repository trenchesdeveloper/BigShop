import { Card,Skeleton } from "antd";
import React from "react";

const LoadingCard = ({ count }) => {
  const cards = () => {
    let totalCard = []

    for (let i = 0; i < count; i++) {
        totalCard.push(<Card className='col-md-4'>
            <Skeleton active ></Skeleton>
        </Card>)
        
    }

    return totalCard;
  };

  return <div className='row p-5'>{cards()}</div>;
};

export default LoadingCard;
