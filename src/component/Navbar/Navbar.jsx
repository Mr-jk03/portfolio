import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/'); 

    const handleClick = (link) => {
        setActiveLink(link);
    }

    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () =>{
        setOpenMenu(!openMenu);
    }

    const [isScrooled, setScrolled] = useState(false);

    useEffect(() =>{
        const handleScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <div className={`navbar ${isScrooled ? "scrolled" : ""}`}>
            <div className='container'>
                <div className="row main-navbar">
                    <div className="col-lg-2 col-md-2 item item-name">
                        <Link to='/onlineportfolio' 
                              className={activeLink === '/onlineportfolio' ? 'active' : ''}
                              onClick={() => handleClick('/')}
                        >
                            welcome !!!
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-2 item">
                        <Link to='/about'
                              className={activeLink === '/about' ? 'active' : ''}
                              onClick={() => handleClick('/about')}
                        >
                            About me
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-2 item">
                        <Link to='/education' 
                              className={activeLink === '/education' ? 'active' : ''}
                              onClick={() => handleClick('/education')}
                        >
                            Education
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-2 item">
                        <Link to='/experience' 
                              className={activeLink === '/experience' ? 'active' : ''}
                              onClick={() => handleClick('/experience')}
                        >
                            Experience
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-2 item">
                        <Link to='/project' 
                              className={activeLink === '/project' ? 'active' : ''}
                              onClick={() => handleClick('/project')}
                        >
                            Project
                        </Link>
                    </div>
                    <div className="col-lg-2 col-md-2 item">
                        <Link to='/contact' 
                              className={activeLink === '/contact' ? 'active' : ''}
                              onClick={() => handleClick('/contact')}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            <div className='menu-mobile'>
                <i onClick={handleOpenMenu}>
                    <IoMenu className='icon-menu'/>
                </i>
                <div className='main-menu'
                    style={{
                        transform: openMenu ? 'translateY(0)' : 'translateY(-362px)',
                        opacity: openMenu ? '1' : '0',
                        height: 'auto',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transition: 'transform 0.3s ease, opacity 0.3s ease'
                    }}
                 >
                    <ul>
                        <li>
                            <i onClick={handleOpenMenu}>
                                <IoMdCloseCircle />
                            </i>
                        </li>
                        <li onClick={handleOpenMenu}>
                            <Link to='/onlineportfolio'>WelCome !!!</Link>
                        </li>
                        <li  onClick={handleOpenMenu}>
                            <Link to='/about'>About me</Link>
                        </li>
                        <li  onClick={handleOpenMenu}>
                            <Link to='/education'>Education</Link>
                        </li>
                        <li  onClick={handleOpenMenu}>
                            <Link to='/experience'>Experience</Link>
                        </li>
                        <li  onClick={handleOpenMenu}>
                            <Link to='/project'>Project</Link>
                        </li>
                        <li  onClick={handleOpenMenu}>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Navbar;
