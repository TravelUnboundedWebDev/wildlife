import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

const LandingMara = () => {
    return (
        <>
        <div className='landing-container mb-3'>
            <div className='card-landing'>
            <div className='text-landing'>
                <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1706080343/Jaws_of_death_vmwnxh.jpg' alt='' className='landing-img mb-3' />
            <h4 className='text-center' style={{fontFamily:'Georgia'}}>GREAT MIGRATION TOUR MAASAI MARA - KENYA</h4>
            <h5 className='text-center mb-3' style={{fontFamily:'Roboto'}}>4N/5D, August 14th to 18th - 2024</h5>
            <div className='btn-containers'>
               <Link to='/overview-mara' ><button type='button' className='btn-landing mb-2'>OVERVIEW</button></Link>
               <Link to='/itinerary-mara' ><button type='button' className='btn-landing mb-2'>ITINERARY</button></Link>
                <Link to='/price-mara'><button type='button' className='btn-landing mb-2'>PRICE</button></Link>
                <Link to='/inclusions-mara'><button type='button' className='btn-landing mb-2'>INCLUSIONS & EXCLUSIONS</button></Link>
                <Link to='/form'><button type='button' className='btn-landing mb-2'>BOOK NOW</button></Link>
                <Link to='/talk-to-us'><button type='button' className='btn-landing mb-2'>TALK TO US</button></Link>
                <Link to='/'><button type='button' className='btn-landing mb-3'>WEBSITE</button></Link>
            </div>
            </div>
            </div>
        </div>
        </>
    );
}
export default LandingMara;
