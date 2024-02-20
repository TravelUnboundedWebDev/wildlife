import React from 'react';
import DestinationCard from '../DestinationCard';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './packages.css'
import {Link} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import {Helmet} from 'react-helmet';
const HotSellingPackages = () => {
  return (
    <>
    <Helmet>
      <title>Best Wildlife Packages by Travel Unbounded</title>
      <meta name="description" content="Discover extraordinary wildlife with Travel Unbounded. Our expert guides lead tailor-made safari tours, promising moments of awe and wonder. Book now for an immersive journey into nature's wonders." />
    </Helmet>
    <Navbar/>
    
    <img src='/packages/img-6-1.jpg' alt='' className='destination-img-package' />
       
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
