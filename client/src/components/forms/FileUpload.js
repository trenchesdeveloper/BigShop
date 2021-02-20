import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import {} from "antd";
import Avatar from "antd/lib/avatar/avatar";

const FileUpload = ({ values, setValues, setLoading }) => {
  // get the user from redux store
  const { userInfo } = useSelector((state) => state.userLogin);

  const fileUploadAndResize = (e) => {
    // get the files
    let files = e.target.files;
    let allUploadedFiles = values.images;

    // resize images
    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            axios
              .post(
                `/api/images/uploadImages`,
                { image: uri },
                {
                  headers: {
                    token: userInfo ? userInfo.token : "",
                  },
                }
              )
              .then((res) => {
                // set url to images [] in the parent component - ProductCreate
                console.log("IMAGE UPLOADED", res.data);
                setLoading(true);
                allUploadedFiles.push(res.data); // push the response into values.images

                setValues({ ...values, images: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("cloudinary upload err", err);
              });
          },
          "base64"
        );
      }
    }
  };

  return (
    <>
    {/* image preview row */}
      <div className="row">
        {values.images &&
          values.images.map((image) => (
            <Avatar
              key={image.public_id}
              src={image.url}
              size={100}
              className="m-3"
            />
          ))}
      </div>
    {/* image upload row */}
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
    </>
  );
};

export default FileUpload;
