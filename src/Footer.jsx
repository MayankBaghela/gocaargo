import React from 'react'
import { BsAndroid2, BsApple, BsFillTelephoneFill, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa'
import './App.css';


import whtsp from './images/wapps.png'
function Footer() {
  return (
    <>
      <div className='footer-sec bg-dark'>
        <div className='container '>
          <div className='social-icon d-flex p-3 '>

            <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/gocaargoindia/" className='text-white ms-3 fs-4'><FaFacebookSquare className='icon-fb' />  </a>
            <a rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/gocaargo/" className='text-white ms-3 fs-4'><BsInstagram className='icon-insta' /></a>
            <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/gocaargo" className='text-white ms-3 fs-4'><BsTwitter className='icon-twit' /></a>
            <a rel="noopener noreferrer" target='_blank' href="/" className='text-white ms-3 fs-4 me-auto bold'><FaLinkedinIn className='icon-in' /></a>
            <p className='fs-6 green policy bold '  >
              Privacy Policy
            </p>

          
          <a rel="noopener noreferrer" target='_blank'  href="https://api.whatsapp.com/send?phone=917692868686&forceIntent=true&load=loadInIOSExternalSafari">
              <img className='whtsaap-icon'  src={whtsp} alt='whatsApp' />
              </a>
           

          </div>
        </div>
        <div className='mobile-foot' >

<div className='bg-white main-store text-secondary fs-1' >
    <div className='store-icon2 '> <a rel="noopener noreferrer" target='_blank' href="https://apps.apple.com/us/app/gocaargo/id1500122344" className='text-secondary'> <BsApple /></a> </div>
    <div className='store-icon green '> <a rel="noopener noreferrer" target='_blank' href="https://play.google.com/store/apps/details?id=manalsoftech.com.cargoproject" className='green'> <BsAndroid2 /> </a></div>
    
</div>
<div className='whtsp-s-foot '>
    <div className='d-flex '>
      
        <div className='green bg-white p-2 w-50' >
            <h3 className='text-center'> <BsFillTelephoneFill /> Call Now </h3>
        </div>
        <div className='text-white bg-success p-2 w-50'>
            <h3 className='text-center'>  <BsWhatsapp /> Whats App</h3>
        </div>

    </div>
</div>
</div>
      </div>
    </>
  )
}

export default Footer