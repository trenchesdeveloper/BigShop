import React from "react";

const FileUpload = () => {

    const fileUploadAndResize = () =>{
        //
    }



  return (
    <div className="row">
      <label htmlFor="" className='btn btn-primary btn-raised'>
        Choose file
        <input
          type="file"
          name="file"
          id=""
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
