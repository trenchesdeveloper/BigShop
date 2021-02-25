import React, { useEffect } from "react";
import { Select } from "antd";
const { Option } = Select;

const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  values,
  setValues,
  handleCategoryChange
}) => {
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    color,
    brands,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      {JSON.stringify(values)}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Price</label>
        <input
          type="number"
          name="price"
          value={price}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Shipping</label>
        <select
          value={shipping === "Yes" ? "Yes" : "No"}
          name="shipping"
          id=""
          className="form-control"
          onChange={handleChange}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="color">Color</label>
        <select
          name="color"
          id=""
          value={color}
          className="form-control"
          onChange={handleChange}
        >
          {colors.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <select
          name="brand"
          value={brand}
          id=""
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b) => (
            <option value={b} key={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="">Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
        >
          <option value="select">select category</option>
          {categories &&
            categories.length > 0 &&
            categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>

      <br />
      <button className="btn btn-outline-info">Update</button>
    </form>
  );
};

export default ProductUpdateForm;
