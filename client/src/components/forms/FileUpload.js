import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Resizer from "react-image-file-resizer";
import axios from "axios";

const FileUpload = () => {
  // get the user from redux store
  const { userInfo } = useSelector((state) => state.userLogin);

  const fileUploadAndResize = (e) => {
    // get the files
    let files = e.target.files;
    // resize images
    if (files) {
        for (let i = 0; i < files.length; i++) {
           Resizer.imageFileResizer(
             files[i],
             720,
             720,
             "JPEG",
             100,
             0,
             (uri) => {
               console.log(uri);
             },
             "base64"
           );
            
        }
    }

   
    // set url to images [] in the parent component - ProductCreate
  };

  return (
    <div className="row">
      <label className="btn btn-primary btn-raised">
        Choose file
        <input
          type="file"
          hidden
          multiple
          accept="images/*"
          onChange={fileUploadAndResize}
        />
      </label>
    </div>
  );
};

export default FileUpload;
