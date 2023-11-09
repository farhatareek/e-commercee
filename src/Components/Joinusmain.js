import JoinUsProduct from "./JoinUsCrad";
import React, { useState } from 'react'
import './Products/Product/Product.css'


const  JoinUsMain =() =>{
    const [data ]=useState(JoinUsProduct);
  return (
    <>
    <div className='container'>
    <div className='row'>
<div className='row text-center mb-2 mt-2'>
<h2 className='col-12'>Join us</h2>
<p className='col-12 mt-2'>Be a part of the talabat story shops nearby.</p>
</div>
        </div>
   
        <div className='row row-cols-1 mt-3 d-flex justify-content-between'>
        {data.map((product)=>{
                          return(
                        <>
 <div className
="card col-lg-5 col-sm-12 mb-3" key={product?.id}>
  <div className
="row g-0">
    <div className
="col-md-4" >
      <img src={product?.image} className
="img-fluid w-100 h-100 rounded-start" alt="..."/>
    </div>
    <div className
="col-md-8">
      <div className
="card-body ">
        <h3 className
="card-title">{product?.titel}</h3>
        <p className
="card-text">{product?.price}</p>
        <a href="." className="nav-item p-2 rounded col-4 productBtn align-self-end  pr-5 bd-high  text-decoration-none text-decoration-none link-light" aria-current="page"
         > Join Us
        </a>
      </div>
    </div>
  </div>
</div>
                        </>
                    )
                })}

</div>
        </div>
      
    </>
  )
}

export default JoinUsMain