import React from 'react';
import './index.css'

function VideoBanner() {
    return ( 
        <div className = "video-banner" >
            <video autoPlay loop muted controls= {true}
                src = "https://res.cloudinary.com/dl3vc69uw/video/upload/v1704694207/Banner_vid_cpizkb_wlnr5z.mp4"
                type = "video/mp4">
            </video>
            <div className="text-container-video">
                <h1 className='banner-text'>Holidays made with love</h1>
            </div>
        </div>
    );
}

export default VideoBanner;