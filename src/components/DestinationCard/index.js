import React from 'react';
import {Link} from 'react-router-dom'
import './card.css'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from 'react-loading';

const DestinationCard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  //const [soldOut, setSoldOut] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://formbackend.netlify.app/api/cards');
        setCards(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching card items:', error);
        setLoading(false);
      }
    };
    fetchData()
  }, []);

  return (
    <>
    <div className="destination-card">
      {loading ? (
        <Loader type="balls" color="blue" height={40} width={40} />
      ) : (
      <div className="package-container">
        {cards.map((card) => (
          <div key={card.id} className="package-card mb-3">
            <img src={card.image} alt='' className='card-img mb-3'/>
            {card.soldOut && <div className="sold-out">Sold Out</div>}
            {card.fast && <div className="fast-filling">Filling up fast</div>}
            <div>
            <h4 className='title mb-3'>{card.name}</h4>
            <h5 className='title-rate bold mb-3'>{card.days}</h5>
            <h5 className='title-rate bold mb-3'>{card.price}</h5>
            <div className='btn-container-card'>
            <Link to={card.link} className='blogs-link'>
            <button className="view-button-card">{isMobile ? 'View' : 'View Itinerary'}</button></Link>
            <Link to='/form' className='blogs-link'><button className="view-button-card">{isMobile ? 'Book' : 'Book Now'}</button></Link>
            </div>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
    </>
  )
};
export default DestinationCard;
