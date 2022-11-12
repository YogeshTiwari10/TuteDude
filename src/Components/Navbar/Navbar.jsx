import React from 'react'
import logo from '../../Assets/logo.png'
import Profile from '../../Assets/profile.png'
import Drop from '../../Assets/drop.png'
import dropWhite from '../../Assets/dropWhite.png'
import './Navbar.scss'

const navbar = () => {
    const notava = "NA"
    return (
        <nav className='td__navbar'>
            <div className="td__navbar-items">
                <div className="td__navbar-logo">
                    <img src={logo} alt={notava} />
                </div>
                <div className='td__navbar-lists'>
                    <ul>
                        <li>My Assignment</li>
                        <li>Chat with Mentor</li>
                    </ul>
                    <div className="td__profile">
                        <img src={Profile} alt={notava} />
                        <span>ProfileName</span>
                        <div className="dropdownimg">
                            <img src={Drop} alt={notava} />
                        </div>
                    </div>
                
                </div>
                <div className="td__profile-mobile">
                        <span>ProfileName<img src={dropWhite} alt={notava} /></span>
                    </div>
            </div>
        </nav>
    )
}

export default navbar