import React from 'react';
import ValidationForm2 from './Login';
import'bootstrap/js/dist/base-component'
import '../Components/Contact.css'


function Contact() {
  return (
    <>
<form className='container p-5 mb-5'>
  <fieldset >
    <h3 className='mt-4'>Contact Us</h3>
    <hr className='mt-4'/>
    <div className="mb-3">
      <h5>How may we help you? </h5>
      <p>Our agents are available 24x7 to make sure that all your issues and inquiries are resolved.</p>
    </div>
    <div className="mb-3  d-flex justify-content-center">
      <span className='fs-4'><i className="fa-solid fa-user"></i></span>
      <p className='fw-bold fs-4'>Need help?</p>
        </div>
    <div className="mb-3 container user-login ">
      <div className="form-check d-flex justify-content-center  ">
        <p className='row '>Please login to see your orders</p>
          </div>
          <div className='text-center '>
    <button type="button" className="btn btn-primary p-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Login
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="">
      <ValidationForm2/>
      </div>
    </div>
  </div>
</div>
          </div>








          {/* accordion */}
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div><p className='fs-3'>How can we help?</p></div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <i class="fa-solid fa-burger p-2"></i>
      <span >I can't place my order</span>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <i class="fa-regular fa-credit-card p-2"></i>
      <span>Online payment didn't go through</span>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item m-0">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <i class="fa-solid fa-envelope p-2"></i>
      <span>My support requests</span>
      
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

    
  </fieldset>
</form>

    </>
  )
}

export default Contact