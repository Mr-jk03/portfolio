import React from 'react'
import './Experience.css'
import { FaAnglesRight } from "react-icons/fa6";

const Experience = () => {
  return (
    <div className='experience-wrapper'>
        <div className="container main-experience">
            <div className="row">
                <div className="col-xl-6 col-lg-6 ex-left">
                    <h1 className='ex-h1-l'>EXPERIENCE</h1>
                    <div className='border-ex'></div>
                    <div className='left-experience'>
                        <i>
                            <FaAnglesRight />
                        </i>
                        <div>
                            <b>Design and develop fashion product business website JK_Fashion</b><br/>
                            <span>Time: 2 months</span>
                        </div>
                    </div>
                    <div className='left-experience'>
                        <i>
                            <FaAnglesRight />
                        </i>
                        <div>
                            <b>Build a food restaurant website</b><br/>
                            <span>Time: 1 months</span>
                        </div>
                    </div>
                    <div className='left-experience'>
                        <i>
                            <FaAnglesRight />
                        </i>
                        <div>
                            <b>Design and develop fashion product business website JK_Shop</b><br/>
                            <span>Time: 3 months</span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 ex-right">
                    <h1 className='ex-h1-r'>2023 - 2024</h1>
                    <div className='ex-detail-r'>
                        <span><b>JK_Fashion website:</b> is developed by myself based on MWC shoe sales website.<br/>
                             Language used is HTML/CSS JS with ReactJS Framework and BoosTrap 5 Grid System library.</span>
                    </div>
                    <div className='ex-detail-r-bf'>
                        <span><b>Food restaurant website:</b> developed by myself through my own design and Youtobe reference. Language used is HTML/CSS JS</span>
                    </div>
                    <div className='ex-detail-r-bf'>
                        <span><b>JK_Shop website:</b> is a fashion website developed by me alone based on my design and Youtobe reference sources. Language used is HTML/CSS, JS, PHP, MySQL</span>
                    </div>
                </div>
            </div>
            <div class="line-container">
                <span class="line-text">Experience</span>
            </div>
        </div>
    </div>
  )
}

export default Experience
