import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoY from '../../assets/images/Y-logo3.png'
import LogoSubtitle from '../../assets/images/long-name2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {
    faBars,
    faClose
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const[showNav, setShowNav] = useState(false);

    return (
    <div className='nav-bar'>  
        <Link className='logo' to='/'>
            <img src={LogoY} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="Shin" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink end activeclassname="active" className="home-link" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink end activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)} >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink end activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <NavLink end activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color='#ffd700' size='3x' className='close-icon' />
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/yeoungmin-shin-3a853220a/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className='anchor-icon'/> 
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/yshin22'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className='anchor-icon'/> 
                </a>
            </li>
        </ul>
        <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size='3x' className='hamburger-icon' />
    </div>
    )
}

export default Sidebar