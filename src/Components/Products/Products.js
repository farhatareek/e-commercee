import React from "react";

import { connect } from "react-redux";
import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <div className="container justify-content-center">
        <div className="row  mb-2 mt-2 mb-2 ">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
    </div>
   
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);