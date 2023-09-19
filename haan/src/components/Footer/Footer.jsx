import React from 'react'
import "./Footer.css"
import {FaInstagram,FaYoutube} from "react-icons/fa";
import {BsFacebook,BsLinkedin} from "react-icons/bs"
function Footer() {
  return (
    <div className='footer'>
    <div className='container'>
    <div className='details'>
    <div className='child'>
      <ul>
            <h4>Catalog</h4>
            <li>Best Seller</li>
            <li>Hand Sanitizer</li>
            <li>Hand Cream</li>
            <li>Hand Soap</li>
            <li>Toothpaste</li>
            <li>Refills</li>
            <li>Combos</li>
        </ul>
    </div>
    <div className='child'>
      <ul>
            <h4>Catalog</h4>
            <li>About us & our purpose</li>
            <li>Stockist</li>
            <li>Journal</li>
            <li>FAQS</li>
            <li>Contact</li>
        </ul>  
    </div>
    <div className='child'>
        <ul>
            <h4>Legal pages</h4>
            <li>Deliveries & Returns</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy</li>
            <li>Contact</li>
        </ul>
    </div>
    </div>
    <div className='left_footer'>
        <h4>Sign up for updates</h4>
        <input type='text' placeholder='Enter Email Id'/>
        <div className='social_media'>
            <p><FaInstagram/></p>
           <p> <BsFacebook/></p>
            <p><FaYoutube/></p>
            <p><BsFacebook/></p>
    </div>
    </div>

    </div>
      
    </div>
  )
}

export default Footer