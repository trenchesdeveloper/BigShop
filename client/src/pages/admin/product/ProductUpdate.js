import React from "react";
import AdminNav from "../../../components/Nav/AdminNav";

const ProductUpdate = ({ match }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>

        <div className="col-md-10">Product Update Page</div>
      </div>
    </div>
  );
};

export default ProductUpdate;
