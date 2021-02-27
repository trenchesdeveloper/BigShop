import React from 'react'
import {Link} from 'react-router-dom'


const ProductListItems = ({product}) => {
    const {price, color, brand, quantity} = product
    return (
      <ul className="list-group">
        <li className="list-group-item">
          Price{" "}
          <span className="label label-default label-pill pull-xs-right">
            ₦ {price}
          </span>
        </li>
      </ul>
    );
}

export default ProductListItems
