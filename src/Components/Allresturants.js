import React, { useState } from 'react'
import ProductsDta from './Categiores'
import { NavLink } from 'react-router-dom';
import'../Components/Cards.css'



const Category = () => {
    const [data, setData]=useState(ProductsDta);
    const filterProduct = (iteam)=>{
const result=ProductsDta.filter((categoryData)=>{
    return categoryData.category===iteam;
});
setData(result)
    }
  return (
    <>
    <div className='container'>
        <div className='row m-0 rowMarginZero'>
            <div className=' row d-flex rowMarginZero customRow justify-content-center'>
            <button onClick={()=> setData(ProductsDta)} className='btn col-lg-2 m-1  btn-outline-dark'>All </button>
                <button onClick={()=>filterProduct("ciaro")} className='btn col-lg-2  m-1  btn-outline-dark'>Cairo</button>
                <button onClick={()=>filterProduct("giza")} className='btn col-lg-2 m-1  btn-outline-dark'> Giza</button>
                <button onClick={()=>filterProduct("alexandria")} className='btn col-lg-2 m-1  btn-outline-dark'> Alexandria</button>
                <button onClick={()=>filterProduct("another")} className='btn col-lg-2 m-1  btn-outline-dark'> Another Cities</button>
            </div>
            <div className='row d-flex rowMarginZero justify-content-center '>
                <form>
                <div className=' row  rowMarginZero '>
                {data.map((product)=>{
                
                    return(
                        <>
    <div className='col-md-3 mt-5 mb-5'>
                <div className='card h-100' key={product?.id}>
    <img src={product?.image}  alt=""  />
    <div className='card-body product-card-body'>
    <h5 className='card-title '>{product?.titel}</h5>
    <h5 className=''><i class="fa-solid fa-phone"></i> phone : {product?.price}</h5>
    <NavLink to="/products" className='btn btn-dark'> make an order </NavLink>
    </div>
</div>
                </div>
                        </>
                    )
                })}
                </div>
                </form>
            </div>
        </div>
    </div>
</>
  )
}

export default Category