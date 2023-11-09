import React from "react";
import { Link } from "react-router-dom";
import './Product.css'
import { connect } from "react-redux";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/Shoping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  const notify = () => toast(" 😲 Wow  new item added!", {autoClose: 2000, },{toastId: "unique-random-text-xAu9C9-"});

  return (
    
        <div className="col-lg-2  col-sm-12  mb-3  ">
    <div className="card h-100 justify-content-center d-flex  mt-3">
        <img
        className="card-img-top"
        src={product.image}
        alt={product.title}
        />
      <div className="card-body">
        <p className="card-title fs-6 fw-bolder">{product.title}</p>
        <p className=" fs-6">$ {product.price}</p>
      </div>

      <div className="">
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className="btn productBtn p-2 align-self-center m-2 "
          > 
          ingrediants
          </button>
        </Link>
        <button
              onClick={() => {addToCart(product.id); notify();}} 
          className="btn productBtn "
        >
          Add To Cart
                 </button>
                
       
      </div>
    </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);