import React from "react";
import Footer from '../Footer'
import Navbar from '../Navbar'
import {Link} from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import {Helmet} from 'react-helmet';

import './about.css'

function About() {
    return(
        <>
        <Helmet>
            <title>About Us | Travel Unbounded</title>
            <meta name="description" content="2014 - Founded by K.Chandrashekar, the journey started at a cafe in Bangalore as a proprietary firm. Served 100 Nature loving individuals by designing customised itineraries to various parks in India and Africa." />
        </Helmet>
        <Navbar/>
        <div>
            <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704696930/About_Us_1920_x_1080_px_n8r8i5_gx013v.png' alt='about' className='about-img' />
        </div>
        <div className="about-container mt-5 mb-5">
            <div className="left mb-3">
                <h3 className="about-head mt-5 mb-3 package-head">Our Visions</h3>
                <p className="about-text">I am sure you would love to know more about us!! We are just like you, a set of Nature loving
            people.</p>
                <p className="about-text">To make you and your friends & family embark on some of the most unforgettable wilderness
                holidays around our World.</p>
                <p className="about-text">To enhance your experience of ease with which you could know about your favourite wildlife
                destinations, design your own itineraries, or choose from one of our bespoke, time tested travels.</p>
                <p className="about-text">To ensure you share your experiences with your friends to explore and there by save our mother
                Nature for our future.</p>
            </div>
            <div className="left mb-3">
                <h3 className="about-head mb-3 mt-5 package-head">Our Journey</h3>
                <p className="about-text">2014 - Founded by K.Chandrashekar , the journey started at a cafe in Bangalore as a proprietary
                firm. Served 100 Nature loving individuals by designing customised itineraries to various parks in
                India and Africa.</p>
                <p className="about-text">2015-2016 - The word of mouth of the guests made us grow into a Private Limited firm and cater
                to 1000 guests and there families on wilderness holidays in India and Africa.</p>
                <p className="about-text">2017- 2018 - Spread out tentacles to handle large corporate events at off beat destinations.
                Catered to corporate groups sized from 100 to 150 per event. Grew in team size from just 4 to 10
                people to cater leisure holidays to families across the World. Continued serving the Nature lover,
                Wildlife photographers with customised, bespoke journeys to the wild.</p>
                <p className="about-text">2018 - 2020 - Conducted large corporate events at off beat destinations or group size from 150 to
                400. Our wildlife journeys to Africa which started at just 19 guests touched the high of 125 guests
                for the wildebeests migration season alone. Continued serving 500 plus guests to Nature parks in
                India and other continents every year. Leisure holidays also grew multifold and we were among
                the top travel consultants for Kerala and Himachal tourism.</p>
                <p className="about-text">2020 - 2021 - We stood together during the testing times of the Pandemic. We were the pioneers
                to launch a web series, where we invited the Internationally famed wildlife photographers and
                media people to share their experiences to our guests. The entire proceeds from these programs
                were donated to the forest guards, their families in the time of need.</p>
                <p className="about-text">Conducted a very successful Wildlife photography competition called  &#39;RIGHT XPOSURE&#39; with
                International judges. We had Discovery channel and Sanctuary Asia as our lead sponsors and
                mentors.</p>
                <p className="about-text">Developed and would be shortly launching the &#39;First of it Kind&#39; Progressive Web App for
                Wilderness holidays.</p>
            </div>
            <div className="left">
                <h3 className="about-head mb-3 mt-5 package-head">Our goal for future</h3>
                <p className="about-text">Our goal is to expand our expertise into the resorts/camp space, completely digitalise the
                wilderness holiday bookings, make it very easy for guests like you to travel and explore our World,
                get up close with Nature, enjoy your journeys and Celebrate Life.</p>
            </div>
            <div className="left">
                <h3 className="about-head mb-3 mt-5 package-head">Meet our core team</h3>
                <h5 className="mb-3 package-head">K.CHANDRA SHEKAR</h5>
                <p className="about-text">An ardent traveller and an award winning wildlife photographer. Founded this Co and now a part
                of this wonderful, like minded people who just want you to travel and celebrate life. Has a rich
                background of sales, operations and has handled top positions in large corporates like System
                Shyam, Airtel etc. His understanding of customers and their needs has been a reason for the
                meteoric rise of positive spread of mouth by the guests. He is the CEO of the firm.</p>
            </div>
            <div className="left">
                <h5 className="mb-3 package-head">SURESH KUMAR</h5>
                <p className="about-text">Is a highly energetic person with an unbeatable love for travel. He comes with a very rich
                corporate experience and has handled top positions during his earlier stints in Cos like DHL. His
                operational skills are second to none. His meticulous planning & top notch execution has fetched
                us various large corporate events. He s one person with whom you would love to travel. He is our
                marketing head.</p>
            </div>
            <div className="left">
                <h5 className="mb-3 package-head">SANJEEV KUMAR</h5>
                <p className="about-text">Clarity of vision, definitiveness of process and a great understanding of customer&#39;s needs has
                been the pillars of our Sanjeev who is our Retail Head. A truly commendable team player, Sanjeev
                single handles the retail division with his small but very well trained team of three executives. He
                and his team would ensure that you get your Best deals on all your holidays across the Globe.</p>
            </div>
            <div className="left">
                <h5 className="mb-3 package-head">MAMTA KATOCH</h5>
                <p className="about-text">She is one person who visualises your travel before it even begins. This meticulous planner
                ensures the most memorable holidays for you and your friends and families. She is known as a
                ring master by her vendors and partners because her consistent follow ups.</p>
            </div>
            <div className="left">
                <h5 className="mb-3 package-head">GURUJOTH PAL SINGH</h5>
                <p className="about-text">A gentle man who has criss crossed the World more number of times than many of us. He
                operates out of Dubai as a Vice President for PWC.. He is our mentor and the guiding force
                behind the camp/resort business and entire digitalisation of wilderness holiday travels. His vast
                experience in marketing and understanding customer behaviour has been a blessing which has
                put us as one of the leading experiential travel Co to travel with.</p>
            </div>
            <div className="left">
                <h5 className="mb-3 package-head">RISHI</h5>
                <p className="about-text">A Thorpe when it comes to technology and IT services. The man behind setting up of Flipkart and
                other leading e commerce platforms in India. As an ardent traveller himself, he knows what to be
                provided to make your journeys very comfortable & memorable. He is our mentor and has
                designed the back box along with our IT partners which would enable us to launch this first of its
                kind PWA for wilderness holidays.</p>
            </div>
            <div className="left">
                <h5 className="mb-3 package-head">MEENU GUPTA</h5>
                <p className="about-text">She is the force behind all of us. She is our HR head who ensures the right balance between our
                lives and our deliverables. She too comes with a very rich corporate background. She has been
                the part of the HR dept in Cos like Bharti mobile ( Airtel ) etc.</p>
            </div>
            <div className="left">
                <h5 className="mt-5 tag text-center">We are growing as a team and we are here to serve you and ensure you CELEBRATE LIFE!!</h5>
            </div>
        </div>
        <div className='text-center mb-3'>
      <Link to='/' className='dest'><IoMdHome size={30} style={{color:'blue'}}/></Link>
    </div>
        <Footer/>
        </>
    )
}
export default About;