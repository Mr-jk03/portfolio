import React from 'react'
import './Onlineportfolio.css'
import info from '../../public/avtwl.png'

const Onlineportfolio = () => {
  return (
    <div className='online-wapper'>
        <div className='content-online'>
          <div className='container main-content'>
            <div className='row'>
              <div className='col-xl-6 col-md-6 col-sm-12'>
                <div className='text'>
                  <div className='content-text'>
                    <span>Hello !!!</span>
                    <h1>I'am GIANG XUAN CUONG</h1>
                    <div className='front-end'>
                      <span>Front-end Developer Intern</span>
                    </div>
                    <div className='detail-fe'>
                      <span>
                          I am an ethnic minority student who wants to approach information technology
                          with the purpose of developing myself and understanding
                          more about this profession. Especially in the field of website interface design, 
                          I want to design the interface to be the most beautiful 
                          and convenient to optimize the user experience.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-6 col-md-6 col-sm-12 content-img'>
                <img src={info}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Onlineportfolio
