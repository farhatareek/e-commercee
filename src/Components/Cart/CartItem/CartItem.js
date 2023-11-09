import React, { useState } from "react";
import "./CartItem.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shoping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <div className="card mb-4">
      <img
       className="cartItemimage"
        src={item.image}
        alt={item.title}
      />
      <div className="">
        <p className="detailstitle"> {item.title}</p>
        <p className="detailsprice">$ {item.price}</p>
      </div>
      <div className="cartItemactions">
        <div className=" cartItemqty">
          <label className="fs-3" htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="actionsdeleteItemBtn"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);