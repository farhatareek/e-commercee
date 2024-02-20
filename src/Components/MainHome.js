import React, { useState } from 'react'
import MainHomeProductsDta from './MainHomeProduct';
import  playstore from'../assets/logo_playstore.svg'
import appstore from '../assets/logo_appstore.svg'
import hawawi from '../assets/logo_huaweistore1.svg';
import'./MainHome.css'

const  MainHome =() =>{
    const [data,]=useState(MainHomeProductsDta);
  return (
    <>
    <div className='container'>
    <div className='row'>
<div className='row text-center mb-5 mt-5'>
<h2 className='col-12'>Your everyday, right away</h2>
<p className='col-12 mt-4'>Order food and grocery delivery online from hundreds of restaurants and shops nearby.</p>
</div>
        </div>
    <div className='row d-flex playStore pb-4 justify-content-center'>
        <a  className='col-lg-2 w-50 col-sm-3 m-1' href="https://play.google.com/store/apps/details?id=com.talabat&amp;referrer=adjust_reftag%3Dc2VDcRfodCSbL%26utm_source%3DCooperations%26utm_campaign%3Dother_campaigns_and_eat_ma_bh_display%26utm_content%3DFooter_download&amp;utm_campaign=other_campaigns_web_eat_ma_bh_display&amp;utm_medium=campaigns&amp;utm_source=Footer_download" target="_blank" rel="noreferrer"><img className
="w-auto d-block app-link" src={playstore} alt=""/></a>
        <a className='col-lg-2 w-50  col-sm-3 m-1' href="https://play.google.com/store/apps/details?id=com.talabat&amp;referrer=adjust_reftag%3Dc2VDcRfodCSbL%26utm_source%3DCooperations%26utm_campaign%3Dother_campaigns_and_eat_ma_bh_display%26utm_content%3DFooter_download&amp;utm_campaign=other_campaigns_web_eat_ma_bh_display&amp;utm_medium=campaigns&amp;utm_source=Footer_download" target="_blank" rel="noreferrer"><img className
="w-auto d-block app-link" src={appstore} alt=""/></a>
        <a className='col-lg-2 w-50 col-sm-3 m-1' href="https://play.google.com/store/apps/details?id=com.talabat&amp;referrer=adjust_reftag%3Dc2VDcRfodCSbL%26utm_source%3DCooperations%26utm_campaign%3Dother_campaigns_and_eat_ma_bh_display%26utm_content%3DFooter_download&amp;utm_campaign=other_campaigns_web_eat_ma_bh_display&amp;utm_medium=campaigns&amp;utm_source=Footer_download" target="_blank" rel="noreferrer"><img className
="w-auto d-block app-link" src={hawawi} alt=""/></a>
        </div>

        <div className='row row-cols-1 mt-5 d-flex justify-content-between'>
        {data.map((product)=>{
               
                    return(
                        <>
 <div className
="card col-lg-5 d-flex col-sm-12 mb-5  " key={product.index}>
  <div className
="row  g-0">
    <div className
="col-md-4  col-sm-6" >
      <img src={product?.image} className
="w-100 h-100 rounded-start" alt="..."/>
    </div>
    <div className
="col-md-8 col-sm-6">
      <div className
="card-body">
        <h3 className
="card-title">{product?.titel}</h3>
        <p className
="card-text">{product?.price}</p>
        
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

export default MainHome