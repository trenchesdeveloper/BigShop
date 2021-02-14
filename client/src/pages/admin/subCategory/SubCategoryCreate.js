import React from 'react';
import AdminNav from "../../../components/Nav/AdminNav";
import { toast } from "react-toastify";

const SubCategoryCreate = () => {
    return (
     <div className='container-fluid'>
     <div className="row">
         <div className="col-md-2">
             <AdminNav/>
         </div>

         <div className="col-md-10">
             <h4>Sub Categories</h4>
         </div>
     </div>
     </div>
    )
}

export default SubCategoryCreate
