import React from 'react';
import DestinationCard from '../DestinationCard';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './packages.css'
import {Link} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";


const HotSellingPackages = () => {
  return (
    <>
    <Navbar/>
    
    <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1701163739/Tiger_cub_Bandhavgarh_wo11wx.jpg' alt='' className='destination-img-package' />
       
    <h1 className='text-center blog-head mt-5'>Hot Selling Packages</h1>
    <div className="destinations-container">
      <DestinationCard/>
    </div>
    <div className='text-center mb-3'>
      <Link to='/' className='dest text-center'><IoMdHome size={30} style={{color:'blue'}}/></Link>
    </div>
    <Footer/>
    </>
  );
};
export default HotSellingPackages;
