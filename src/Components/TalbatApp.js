import React from 'react'
import  playstore from'../assets/logo_playstore.svg'
import appstore from '../assets/logo_appstore.svg'
import hawawi from '../assets/logo_huaweistore1.svg';

function TalbatApp() {
  return (
<>

<div className='container mt-5'>

    <div className='row '>
    <div className='col-lg-4 col-sm-12'>
            <img className=' w-100 appImage'  src='https://images.deliveryhero.io/image/talabat/website/AppDownloadComponent/app_view_iphone_en.png ' alt=''/>
            </div>
<div  className=" col-lg-8 col-sm-12  text-center mb-5 mt-5">
<h2 className='col-12'>Your everyday, right away</h2>
<p className='col-12 playStore mt-4'>Order food and grocery delivery online from hundreds of restaurants and shops nearby.</p>
<div className='row d-flex playStore pb-4 justify-content-center'>
        <a className='col-lg-2 w-50 col-sm-3 m-1' href="https://play.google.com/store/apps/details?id=com.talabat&amp;referrer=adjust_reftag%3Dc2VDcRfodCSbL%26utm_source%3DCooperations%26utm_campaign%3Dother_campaigns_and_eat_ma_bh_display%26utm_content%3DFooter_download&amp;utm_campaign=other_campaigns_web_eat_ma_bh_display&amp;utm_medium=campaigns&amp;utm_source=Footer_download" target="_blank" rel="noreferrer"><img class="w-auto d-block app-link" src={playstore} alt=""/></a>
        <a className='col-lg-2 w-50  col-sm-3 m-1' href="https://play.google.com/store/apps/details?id=com.talabat&amp;referrer=adjust_reftag%3Dc2VDcRfodCSbL%26utm_source%3DCooperations%26utm_campaign%3Dother_campaigns_and_eat_ma_bh_display%26utm_content%3DFooter_download&amp;utm_campaign=other_campaigns_web_eat_ma_bh_display&amp;utm_medium=campaigns&amp;utm_source=Footer_download" target="_blank" rel="noreferrer"><img class="w-auto d-block app-link" src={appstore} alt=""/></a>
        <a className='col-lg-2 w-50 col-sm-3 m-1' href="https://play.google.com/store/apps/details?id=com.talabat&amp;referrer=adjust_reftag%3Dc2VDcRfodCSbL%26utm_source%3DCooperations%26utm_campaign%3Dother_campaigns_and_eat_ma_bh_display%26utm_content%3DFooter_download&amp;utm_campaign=other_campaigns_web_eat_ma_bh_display&amp;utm_medium=campaigns&amp;utm_source=Footer_download" target="_blank" rel="noreferrer"><img class="w-auto d-block app-link" src={hawawi} alt=""/></a>
        </div>
        </div>
       
        </div>
        </div>
</>
  )
}

export default TalbatApp