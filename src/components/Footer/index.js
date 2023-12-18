import React from "react";
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
import {BsTelephoneOutbound} from 'react-icons/bs'
import {AiOutlineMail,AiOutlineLinkedin,AiOutlineFacebook,AiOutlineCopyrightCircle} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import Scroll from '../Scroll';
import './footer.css';

const Footer = () => {
    const handleBack = () => {
        window.history.back();
    }
    return (
        <>
      <div className="data-container">
      <div className="footer">
        <h2 className="text-center footer-head mt-4">Contact US</h2>
        
        <div className="footer-container-contact mt-3 mb-3">
            <h6 className="text"><AiOutlineMail />  support@travelunbounded.com</h6>
            <h6 className="text"><BsTelephoneOutbound/> +91 9845090014</h6>
            
        </div>
      <h2 className="text-center footer-head">Locations</h2>
      
        <div className="footer-container">
            <div className="contact-footer">
            <h5 className="text-head">Registered office</h5>
            <p className="text"><ImLocation2/>No 10, 8th Main, 12th Cross, Vinayaka Nagar B block, Konene Agrahara, Bangalore 560017</p>
            </div>
        <div className="contact-footer">
            <h5 className="text-head">Headquarters </h5>
            <p className="text"><ImLocation2/>No 32, Global Incubation Services, CA Site, No 1, HAL 3rd Stage EXTN, behind Hotel Leela Palace, HAL 2nd Stage, Kodihalli, Bengaluru, Karnataka 560008</p>
        </div>
        <div className="contact-footer">
            <h5 className="text-head">Nairobi office</h5>
            <p className="text"><ImLocation2/>Westpark Towers, Muthithi Road, Nairobi, P.O. Box: 6950 Postal Code 00100 </p>
        </div>
        <div>
        </div>
        </div>
            <h2 className="text-center footer-head">Social Media</h2>
            <div className='icons-container-footer'>
            <a href='https://wa.me/6304484048' target="__blank">
                <div className='nav-icon-footer text'><FaWhatsapp size={20}/></div></a>
                <a href='https://www.instagram.com/travel_ub/' target="__blank">
                    <div className='nav-icon-footer text'><FaInstagram size={20}/></div></a>
                    <a href='https://www.facebook.com/travelunboundedcom' target="__blank">
                        <div className='nav-icon-footer text'><AiOutlineFacebook size={20}/></div></a>
                    <a href='https://www.linkedin.com/company/travel-unbounded/' target="__blank">
                    <div className='nav-icon-footer text'><AiOutlineLinkedin size={20}/></div></a>
            </div>
            <div className="footer-container-social">
                <Link to='/privacy' className="link"><p className="m-2 text">Privacy policy</p></Link>
                <Link to='/terms' className="link"><p className="m-2 text">Terms and conditions</p></Link>
                <a href='https://www.google.com/search?q=travel+unbounded&rlz=1C1UEAD_enIN1077IN1077&oq=travel&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgwIARBFGDkYsQMYgAQyBggCEEUYOzIGCAMQRRg9MgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQg1NDgyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3bae1405d293a9a1:0x2593b16dbea01fb6,3,,,,' className="link" target="__blank">
                    <p className="m-2 text">Write a review</p></a>
            </div>
            <div style={{ textAlign: 'left', marginLeft:'20px',color:'white', marginBottom:'5px'}}>
                <BsArrowLeftSquareFill size={30} onClick={handleBack}/>
            </div>
            <footer className="bg-secondary"><div className="footer-container-social">
                <p className="text"><AiOutlineCopyrightCircle/>Travel Unbounded</p>
            </div></footer>
            </div>
        </div>
        <Scroll/>
        </>
    );
  };
  
  export default Footer;