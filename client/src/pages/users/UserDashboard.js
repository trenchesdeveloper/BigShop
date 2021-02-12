import React from "react";
import UserNav from "../../components/Nav/UserNav";

const UserDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">user page</div>
      </div>
    </div>
  );
};

export default UserDashboard;
