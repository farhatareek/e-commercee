import React, { useState } from 'react'
import CityDataCard from './CityData'
import '../Components/CityCard.css'

import { NavLink } from "react-router-dom";


const  CityService =() =>{
    const [data]=useState(CityDataCard);
  return (
    <>
    <div className='container '>
    <div className='row mt-3'>
<div className='row texy-left mb-5 mt-5'>
<h3 className='col-lg-12'>Cities we serve in Egypt</h3>
</div>
        </div>
    
        <div className='row citiesComponent row-cols-3 m-0 justify-content-between d-flex '>
        {data.map((product)=>{
              return(
                        <>
 <div className
="card row CityCard mb-3 d-flex justify-content-center" key={product.id.toString()}>
      <div className
="row justify-content-centar ">
      <div className
="card-body  col-8 ">
        <h5 className
="card-title">{product?.titel}</h5>
        <p className
="card-text">{product?.price}</p>
      </div>
      <div className='col-4 linkArrow card-body text-end align-self-center'>
    <NavLink  to="/resturants"><i className
="fa-solid fa-arrow-right"></i></NavLink>
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

export default CityService