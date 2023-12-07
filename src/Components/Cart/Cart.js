import React, { useState, useEffect } from "react";
import  "./Cart.css";
import 'reactjs-popup/dist/index.css';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem/CartItem";





const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div className="row container  d-flex justify-content-center  ">
      <div className="col-lg-8 m-0  p-5 col-sm-12">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className=" card  justify-content-center cartTotal h-50 mb-5 mt-5 col-lg-3 col-sm-12">
        <h4 className="summarytitle">Cart Summary</h4>
        <div className="summaryprice">
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <NavLink to="/" className="summarycheckoutBtn text-decoration-none text-center">order now
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);