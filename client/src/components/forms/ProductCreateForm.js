import React, { useEffect } from "react";
import { Select } from "antd";
const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  values,
  setValues,
  handleCategoryChange,
  subOptions,
  showSub,
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

  //  const {
  //    loading: loadingCategorySubs,
  //    error: errorCategorySubs,
  //    subs,
  //  } = useSelector((state) => state.categorySub);

  //  useEffect(() => {
  //    if (subs) {
  //      setSubOptions(subs);
  //    }
  //  }, [subs, category]);

  console.log(subOptions);

  return (
    <form onSubmit={handleSubmit}>
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
          name="shipping"
          id=""
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
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
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
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
          id=""
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
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

    { showSub &&  <div>
        <label htmlFor=""> Sub Categories</label>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Please select"
          value={subs}
          onChange={(value) => setValues({ ...values, subs: value })}
          name="subs"
        >
          {subOptions &&
            subOptions.map((subs) => (
              <Option key={subs._id} value={subs._id}>
                {subs.name}
              </Option>
            ))}
        </Select>
      </div>}
      <br />
      <button className="btn btn-outline-info">Create</button>
    </form>
  );
};

export default ProductCreateForm;
