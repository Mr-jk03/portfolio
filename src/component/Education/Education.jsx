import React from 'react'
import './Education.css'
import logoEaut from '../../public/logoEaut.png'
import bnUniver from '../../public/bnUniver.png'
import f8 from '../../public/f8.png'
import w3school from '../../public/w3school.png'

const Education = () => {
  return (
    <div className='education-wapper'>
        <div className="container main-education">
            <div className="row">
                <div className="col-xl-6 col-lg-6 edu-left">
                    <h1 className='edu-h1-l'>EDUCATION</h1>
                    <div className='border-edu'></div>
                    <span className='span-edu'>
                        <b>East Asia University of Technology</b> - Hanoi, Vietnam<br/>
                        <b>Bachelor's Program</b> (Expected graduation: 2025)<br/>
                        Currently a 4th year student, majoring in Information Technology, Major in Software Engineering.<br/>
                        Participates in academic discussions and undertakes both large group and individual projects.<br/>
                        Active in volunteer clubs and attends IT recruitment days.<br/>
                        Develops strong ability to work independently and in a team.<br/>
                    </span>
                </div>
                <div className="col-xl-6 col-lg-6 edu-right">
                    <h1 className='edu-h1-r'>2021 - 2024</h1>
                    <div className='edu-detail'>
                        <img src={logoEaut}/>
                        <div className='edu-detail-text'>
                            <h4>EAST ASIA UNIVERSITY OF TECHNOLOGY</h4>
                            <span>Specialized: Information Technology</span>
                        </div>
                    </div>
                    <div className='edu-detail'>
                        <img src={bnUniver}/>
                        <div className='edu-detail-text'>
                            <h4>EComplete military service in 2023: </h4>
                            <span>Efficient and agile work style<br/>
                                  Consistently completes assigned tasks well
                            </span>
                        </div>
                    </div>
                    <div className='edu-detail'>
                        <img src={f8}/>
                        <div className='edu-detail-text'>
                            <h4>Study and reference at F8</h4>
                            <span>HTML/CSS, JS From Basic to Advanced<br/>
                                  Building Website with ReactJS. Responsive with Grid System Boostrap 5
                            </span>
                        </div>
                    </div>
                    <div className='edu-detail'>
                        <img src={w3school}/>
                        <div className='edu-detail-text'>
                            <h4>Study and reference at W3 School</h4>
                            <span>HTML/CSS, PHP, JS, ReactJS, MySQL<br/>
                                  Building Website with ReactJS.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Education
