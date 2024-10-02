import React from 'react'
import './Contact.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-wrapper'>
        <div className="container main-contact">
            <div className="row">
                <div className="col-xl-12 get-touch">
                    <h1>GET IN TOUCH</h1>
                    <span>Let's work Together</span>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 ct-main-icon">
                    <div className='detail-contact'>
                        <i>
                            <FaPhoneVolume />
                        </i>
                    </div>
                    <div className='detail-contact-text'>
                        <h5>Phone & Zalo</h5>
                        <span>(+84) 365 358 746 </span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 ct-main-icon">
                    <div className='detail-contact'>
                        <i>
                            <HiOutlineMail />
                        </i>
                    </div>
                    <div className='detail-contact-text'>
                        <h5>Email</h5>
                        <span>giangcuong0603@gmail.com</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 ct-main-icon">
                    <div className='detail-contact'>
                        <i>
                            <ImLocation2 />
                        </i>
                    </div>
                    <div className='detail-contact-text'>
                        <h5>Location</h5>
                        <span>Phuc Dien, Bac Tu Liem, Ha Noi</span>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 ct-main-icon">
                    <div className='detail-contact'>
                        <i>
                            <FaFacebook />
                        </i>
                    </div>
                    <div className='detail-contact-text'>
                        <h5>FaceBook</h5>
                        <span>
                            <a href="https://www.facebook.com/profile.php?id=100070435243912&mibextid=ZbWKwL">Xuan Cuong</a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="line-container">
                <span class="line-text">Contact</span>
            </div>
            <h1 className='ct-h1-r'>GIANG XUAN CUONG</h1>
            <div class="line-container">
                {/* <span class="line-text">Contact</span> */}
            </div>
        </div>
    </div>
  )
}
export default Contact