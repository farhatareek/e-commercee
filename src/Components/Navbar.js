import React,{useEffect, useState} from 'react'

import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";
import "./Nav.css";

import {connect } from "react-redux";

const Navbar = ({cart}) =>{

  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
  let count =0;
  cart.forEach(item => {
    count += item.qty;
  });
  setCartCount(count);

  },[cart, cartCount] )

    return(
        
        <nav  className="navbar navbar-expand-lg     ">
  <div className="container">
    <NavLink className="navbar-brand col-3 justify-content-start" to="/"><img className
="headerstyles__Logo-sc-1qyxbxn-2 clwwCP nav-logo-img" 
  src={logo}  width="144px" alt="Talabat " ></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav row  text-end bd-highlight   me-auto  text-decoration-none">
        <li className="nav-item col-3 p-4 bd-highlight">
          <NavLink className="nav-NavLink active text-decoration-none link-light" aria-current="page" to="/">home</NavLink>
        </li>
        <li className="nav-item col-3 p-4  bd-highlight">
          <NavLink className="nav-NavLink active text-decoration-none link-light" aria-current="page" to="/products">Order</NavLink>
        </li>
        <li className="nav-item col-3 p-4  bd-highlight ">
          <NavLink className="nav-NavLink text-decoration-none link-light" aria-current="page" to="/resturants">Allresturants</NavLink>
        </li>
        <li className="nav-item col-3 p-4  bd-highlight">
          <NavLink className="nav-NavLink text-decoration-none link-light" to="/contact">contacts</NavLink>
        </li>
      </ul>
      <div className="buttons">
<NavLink to="/login" className="btn btn-outline-light m-2 ">
    <i className="fa-solid fa-right-to-bracket"></i> Login
</NavLink>
<NavLink to="/cart" className="btn btn-outline-light ">
    <i className="fa-solid fa-cart-shopping"></i> cart {cartCount}
</NavLink>

    </div>
    </div>
  </div>
</nav>
        
    )
}

const mapStateToProps = state => {
return{
  cart: state.shop.cart
}
}

export default connect(mapStateToProps) (Navbar)