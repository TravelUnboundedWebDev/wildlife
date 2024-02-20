import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSearch } from "react-icons/fa";
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
import './nav.css'
import {AiOutlineLinkedin,AiOutlineFacebook} from 'react-icons/ai'
import Gallery from '../Gallery';
import SearchOverlay from '../SearchOverlay';

const images= [
    '/home/review-1.jpg',
    '/home/review-2.jpg',
    '/home/review-3.jpg',
    '/home/review-4.jpg'
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleSearchClick = () => {
        setIsOverlayVisible(true);
    };

    const handleCloseOverlay = () => {
        setIsOverlayVisible(false);
    }; 
    return ( 
    <div className='navbar mr-3 ml-3'>
       <Link to='/'> 
       <div className = "logo" >
        <img src = "/home/logo.png" alt = "Logo" />
        </div>  
        </Link>
        <div className='nav-right'>
           <Link to='/form'> <button type='button' className='nav-btn input-text' >Book Now</button></Link>
            <FaSearch size={20} className="search-icon" onClick={handleSearchClick}/> 
        {isOverlayVisible && <SearchOverlay onClose={handleCloseOverlay} />}
        
        <div className = "menu-icon"
        onClick = { toggleMenu } > 
        {
            menuOpen ? ( <
                FiX size = { 30 } onClick={closeMenu}
                />
            ) : ( <
                FiMenu size = { 30 }
                />
            )
        } 
        </div>
        </div>
        {menuOpen && ( 
            <div className = "overlay" >
            <div className='left-content'>
            </div>
            <div className = "menu">
            <div className = "close-button"
            onClick = { closeMenu } >
            <FiX size = { 40 }/> 
            </div > 

            <ul className='list-items'>
            <NavLink to='/' className='dest' activeClassName='active'>
            <li className='nav-buttons'> Home </li>
            </NavLink>
            <NavLink to='/packages' className='dest' activeClassName='active'><li className='nav-buttons'>Hot Selling Packages </li></NavLink>
            <NavLink to='/blogs' className='dest' activeClassName='active'><li className='nav-buttons'> Blogs </li></NavLink>
            <NavLink to='/about' className='dest' activeClassName='active'><li className='nav-buttons'> About Us </li></NavLink> 
            <NavLink to='/contact' className='dest' activeClassName='active'><li className='nav-buttons'> Contact Us </li></NavLink> 
            <li><div className='icons-container'>
           <a href='https://wa.me/9663579014' target='__blank'><div className='nav-icon'><FaWhatsapp size={30}/></div></a> 
           <a href='https://www.instagram.com/travel_ub/' target='__blank'>
           <div className='nav-icon'><FaInstagram size={30}/></div></a>
           <a href='https://www.facebook.com/travelunboundedcom' target='__blank'>
           <div className='nav-icon'><AiOutlineFacebook size={20}/></div></a>
           <a href='https://www.linkedin.com/company/travel-unbounded/' target='__blank'>
           <div className='nav-icon'><AiOutlineLinkedin size={30}/></div></a>
            </div></li>
            </ul> 
            </div> 
            <div className='right-content'>
                <div className='right-content-flex'>
                <Gallery images={images}/>
                <h5 className='mt-5 text-center nav-buttons' style={{color:'white', fontWeight:'bold'}}>Write a review to Scan</h5>
                <div className='text-center'>
                <img src='/home/reviews.png' alt='scanner-reviews' className='qr-code'/> 
                </div>
                </div>
            </div>
        </div >
        )
    }
    </div>
);
}
export default Navbar;