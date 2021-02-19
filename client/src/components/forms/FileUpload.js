import React from "react";
import Resizer from 'react-image-file-resizer'

const FileUpload = () => {
  const fileUploadAndResize = (e) => {
    // resize images
    //send back to server to upload to cloudinary
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
