import React from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shoping/shopping-actions";

const SingleItem  = ({ current, addToCart }) => {
  const notify = () => toast(" 😲 Wow  new item added!", {autoClose: 2000, },{toastId: "unique-random-text-xAu9C9-"});
  return (
    <div className="card mb-3 ">
      <div className="row g-0">
        <div className="col-md-4 singleItem">
      <img
        className=" img-fluid w-100 h-100 p-2 rounded"
        src={current.image}
        alt={current.title}
      />
      </div>
      <div className="col-md-8 text-center">
        <p className=" fs-1">{current.title}</p>
        <p className="fs-2">$ {current.price}</p>

        <button
   
          onClick={() => {addToCart(current.id); notify();}}
          className="btn btn-dark"
        >
          Add To Cart
        </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);