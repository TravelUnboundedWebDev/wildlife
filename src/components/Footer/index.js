import React,{useState} from "react";
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
import {AiOutlineMail,AiOutlineLinkedin,AiOutlineFacebook,AiOutlineCopyrightCircle} from 'react-icons/ai'
import {ImLocation2} from 'react-icons/im'
import { BsArrowLeftSquareFill } from "react-icons/bs";
import {Link} from 'react-router-dom'
import Scroll from '../Scroll';
import './footer.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { toast, Toaster } from "react-hot-toast";


const firebaseConfig = {
  apiKey: "AIzaSyB4BPMHKw0OXM2PhQX9NcT25lDBWpRpIPQ",
  authDomain: "phone-auth-d0a8d.firebaseapp.com",
  projectId: "phone-auth-d0a8d",
  storageBucket: "phone-auth-d0a8d.appspot.com",
  messagingSenderId: "309252587015",
  appId: "1:309252587015:web:6c4a40eb4314344b69b4a2"
};

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await db.collection('news-letter').add({
        email: email,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setEmail('');
      toast.success("Subscribed to News Letter Successfully")
      console.log("Email added successfully")
    } catch (error) {
      console.error('Error adding email to Firestore:', error);
      toast.error('Please enter valid mail')
    }
  };

    const handleBack = () => {
        window.history.back();
    }
    return (
    <>
      <Toaster toastOptions={{ duration: 5000 }} />
      <div className="data-container">
      <div className="footer">
        <h2 className="text-center footer-head mt-4">Contact US</h2>
        
        <div className="footer-container-contact mb-3">
            <h6 className="text"><AiOutlineMail /> support@travelunbounded.com</h6>
            <h6 className="text"><FaWhatsapp/> 9663579014</h6>
            
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
        <div>
        <div className="right-container-footer"></div>
            <h2 className="text-center footer-head">Social Media</h2>
            <div className='icons-container-footer'>
            <a href='https://wa.me/9663579014' target="__blank">
                <div className='nav-icon-footer text'><FaWhatsapp size={20}/></div></a>
                <a href='https://www.instagram.com/travel_ub/' target="__blank">
                    <div className='nav-icon-footer text'><FaInstagram size={20}/></div></a>
                    <a href='https://www.facebook.com/travelunboundedcom' target="__blank">
                    <div className='nav-icon-footer text'><AiOutlineFacebook size={20}/></div></a>
                    <a href='https://www.linkedin.com/company/travel-unbounded/' target="__blank">
                    <div className='nav-icon-footer text'><AiOutlineLinkedin size={20}/></div></a>
                    <div className="left-container-footer d-none d-md-block d-xl-block d-lg-block">
                        <p className="text">Subscribe to News letter</p>
                        <form onSubmit={handleSubmit}>
                        <input 
                        type='email'
                        className="news-letter-input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" required/>
                        <button type="submit" className="subscribe-btn">Subscribe</button>
                        </form>
                    </div>
            </div>
            </div>
            <div className="footer-container-social">
                <Link to='/privacy' className="link"><p className="m-2 text">Privacy policy</p></Link>
                <Link to='/terms' className="link"><p className="m-2 text">Terms and conditions</p></Link>
                <a href='https://www.google.com/search?q=travel+unbounded&rlz=1C1UEAD_enIN1077IN1077&oq=travel&gs_lcrp=EgZjaHJvbWUqBggCEEUYOzIGCAAQRRg8MgwIARBFGDkYsQMYgAQyBggCEEUYOzIGCAMQRRg9MgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGDzSAQg1NDgyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x3bae1405d293a9a1:0x2593b16dbea01fb6,3,,,,' className="link" target="__blank">
                    <p className="m-2 text">Write a review</p></a>
            </div>
            <div className="text-center mb-3 d-sm-block d-md-none d-xl-none d-lg-none">
                <h5 className="text-head">Subscribe to News letter</h5>
                <form onSubmit={handleSubmit}>
                        <input 
                        type='email'
                        className="news-letter-input" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" required/>
                        <button type="submit" className="subscribe-btn">Subscribe</button>
                        </form>
            </div>
            <div style={{ textAlign: 'center', marginLeft:'20px',color:'white', marginBottom:'5px'}}>
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