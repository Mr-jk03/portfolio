import React from 'react'
import './About.css'
import avtAbout from '../../public/info.jpg'

const About = () => {
  return (
    <div className='wrapper'>
        <div className='container main-about'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 avata'>
              <img src={avtAbout}/>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 about-text'>
              <h1>MY BIOGRAPHY</h1>
              <div className='border-div'></div>
              <span className='about-span'>
                 I am Cuong, a Hmong student majoring in Information Technology at the East Asia University of Technology. 
                 I come from a small district established in 2011 in Tuyen Quang province. 
                 Despite difficult circumstances, I always nurture the dream of studying and developing myself. 
                 I am always determined to overcome all challenges to gain knowledge in the field of Information Technology in general and web programming, user interface design in particular. 
                 I believe that technology is not only a tool to help me rise up but also a bridge to help the community integrate into the digital age.<br/><br/>
                 In the future, I hope to become an IT expert and a leader in positive changes in the Hmong community, 
                 helping people integrate into the digital age.
              </span>
              <h1 className='h1-child2'>Skill & Interest</h1>
              <div className='skill-itr'>
                <div>
                  <span>Analyze website design</span>
                </div>
                <div>
                  <span>Creativity</span>
                </div>
                <div>
                  <span>Design</span>
                </div>
                <div>
                  <span>HTML/CSS</span>
                </div>
                <div>
                  <span>JS</span>
                </div>
                <div>
                  <span>ReactJS</span>
                </div>
                <div>
                  <span>PHP</span>
                </div>
                <div>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
export default About
