import React, { useState } from 'react';
import './overview.css';
import {Link} from 'react-router-dom'
import {AiFillCar} from 'react-icons/ai'
import {RiHotelFill} from 'react-icons/ri'
import {GiHotMeal} from 'react-icons/gi'
import {FaSafari } from "react-icons/fa";

const Carousel = ({ images,itinerary_details }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <>
      <div className='app-overview'>
      <div className='iti-container'>
    <div className="carousel-container-overview">
      <button className="arrow left-arrow" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-content-overview">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="arrow right-arrow" onClick={nextSlide}>
        &gt;
      </button>
      </div>
      <div className="content-overview">
        <h2 className='mb-3 styled-text'>{itinerary_details.name}</h2>
        <h5 className='mb-3 overview-text bold'>Tour Package Includes</h5>
        <div className="icon-rate">
          <div className="icon"><AiFillCar/></div>
          <div className="icon"><RiHotelFill/></div>
          <div className="icon"><GiHotMeal/></div>
          <div className="icon"><FaSafari/></div>
        </div>
        <div className="icon-rate">
          <div className="icon-text">Cab</div>
          <div className="icon-text">Hotel</div>
          <div className="icon-text">Meals</div>
          <div className="icon-text">Safari</div>
        </div>
        <hr className='hr'/>
        <div className='icon-row'>
            <h3 className='overview-head styled-text'>Starting Price <br/><span className='span overview-head'>(perperson/perday)</span></h3>
            <h3 className='overview-head styled-text'>Book A Tour </h3>
        </div>
        <div className='icon-row'>
            <p className='overview-text bold'>{itinerary_details.inr}</p>
            <Link to ='/form' className='dest'><button type='button' className='overview-btn'>Book Now</button></Link>
        </div>
        <div className='icon-row'>
            <p className='overview-text bold'> {itinerary_details.fn}</p>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Carousel;
