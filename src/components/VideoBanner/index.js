import React from 'react';
import './index.css'

function VideoBanner() {
    return ( 
        <div className = "video-banner" >
            <video autoPlay loop muted 
                src = "https://res.cloudinary.com/dr0vyis3o/video/upload/v1695279556/BR_home_page_video_ruwc6n.mp4"
                type = "video/mp4" >
            </video>
            <div className="text-container-video">
                <h1 className='banner-text'>Holidays made with love</h1>
            </div>
        </div>
    );
}

export default VideoBanner;