import React from 'react'
import './Project.css'
import foodRTR from '../../public/foodRTR.jpg'
import mvc from '../../public/mvc.jpg'
import pr1 from '../../public/desktop-pr.png'
import pr2 from '../../public/tablet-pr.png'
import pr3 from '../../public/pr-phone.png'

const Project = () => {
  return (
    <div className='project-wrapper'>
        <div className="container main-project">
            <div className='row'>
                <div className="col-xl-6 col-lg-6 col-md-12 pr-l">
                    <h1 className='pr-h1-l'>SELECTED PROJECT</h1>
                    <div className='pr-border'></div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 pr-r">
                    <h1 className='pr-h1-r'>2023 - 2024</h1>
                </div>
            </div>
            <div className='row'>
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className='pr-img'>
                        <img src={foodRTR}/>
                    </div>
                    <div className='pr-detail'>
                        <h3>Food Restaurant</h3>
                        <span>This website is a basic website created by me using pure HTML/CSS JS without using boostrap framework and no multi-device UI yet.</span>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                <div className='pr-img'>
                        <img src={mvc}/>
                    </div>
                    <div className='pr-detail'>
                        <h3>JK-Fashion</h3>
                        <span>This is a fashion website that I quite like. 
                            I built the website based on an existing website template and integrated ReactJs Framework with Boostrap 5 and made it responsive on multiple devices. 
                            However, it is still a bit rudimentary.</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className='pr-img'>
                        <img src={pr1}/>
                    </div>
                    <div className='pr-detail'>
                        <h3>JK-Fashion</h3>
                        <span>Display on laptop</span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className='pr-img'>
                        <img src={pr2}/>
                    </div>
                    <div className='pr-detail'>
                        <h3>JK-Fashion</h3>
                        <span>Display on tablet</span>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className='pr-img'>
                        <img src={pr3}/>
                    </div>
                    <div className='pr-detail'>
                        <h3>JK-Fashion</h3>
                        <span>Display on phone</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Project