import React from 'react'
import'../Components/Footer.css'

export default function Footer() {
    return (
    <>
    <footer className='container-fluid'>
    <div className='container footer-container  '>
    <div className='row  heding-col'>
    <div className='col-lg-2 col-sm-3 text-start'> Feedback</div>
    <div className='col-lg-2 col-sm-3 text-start'>Careers</div>
    <div className='col-lg-2 col-sm-3 text-start'> Terms Conditins </div>
    <div className='col-lg-2 col-sm-3 text-start'> contact</div>
    <div className='col-lg-2 col-sm-3 text-start'> Privacy Policy</div>
    <div className='col-lg-2 col-sm-3 text-start'> FAQ</div>
    </div>
    <div className='row mt-5 secound-row'>
    <div className='col-lg-2 text-start '>
    <p> Restaurants</p>
    <li><a href='e'>Taboon</a></li>
    <li><a  href='i'>Dawar Farah -</a></li>
    <li><a  href='h'>Planet Africa</a></li>
    <li><a  href='j'>Al Aseel El Demashky</a></li>
    <li> <a  href='k'>Lan Yuan - Maadi</a></li>
    <li><a href='k'>Taboon</a></li>
        </div>
        <div className='col-lg-2 text-start '>
    <p> Popular Cuisines</p>
    <li><a href='r'>italian</a></li>
    <li><a  href='r'>Mexican</a></li>
    <li><a  href='d'>pizza</a></li>
    <li><a  href='k'>burger</a></li>
    <li> <a  href='k'>Jappaness</a></li>
    <li><a href='l'>Taboon</a></li>
        </div>
        <div className='col-lg-2 text-start '>
    <p> Popular Areas</p>
    <li><a href='l'>Masaken El Rehab</a></li>
    <li><a  href='.'>Mostashfa AlHommeyat</a></li>
    <li><a  href='.'>Salah ElDin Street</a></li>
    <li><a  href='.'>Salah Nessim Street</a></li>
    <li> <a  href='.'>Shabab El Mosalas</a></li>
    <li><a href='..'>More Areas...</a></li>
        </div>
        
        <div className='col-lg-3  text-start '>
    <p>Cities</p>
    <li><a href='.'>6th of October</a></li>
    <li><a  href='.'>Alexandria</a></li>
    <li><a  href='.'>Assiut</a></li>
    <li><a  href='.'>Banha</a></li>
    <li> <a  href='.'>Cairo</a></li>
    <li><a href='..'>More Areas...</a></li>
        </div>
        <div className='col-lg-3 col-sm-12 text-start '>
        <p>Follow us on</p>
        <div className='follow-us-paragraph '>
        <a href="https://www.facebook.com/Talabat" target="_blank" rel="noopener noreferrer"><i className
="fa-brands fa-facebook"></i></a>
        <a href="https://twitter.com/Talabat" target="_blank" rel="noopener noreferrer"><i className
="fa-brands fa-twitter"></i></a>
        <a href="https://instagram.com/Talabat" target="_blank" rel="noopener noreferrer"><i className
="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/3604171" target="_blank" rel="noopener noreferrer"><i className
="fa-brands fa-linkedin"></i></a>
        <a href="https://www.youtube.com/TalabatGTC" target="_blank" rel="noopener noreferrer"><i className
="fa-brands fa-youtube"></i></a>
        </div>
        </div>
    </div>
    <div className='row support-pharafraph mt-4'>
        <p className='text-start col-6   '>For any support or help you can contact us via our Live Chat</p>
        <p className='col-6'>©2022 Talabat.com</p>
    </div>
    </div>
</footer>



    </>
    )
}
