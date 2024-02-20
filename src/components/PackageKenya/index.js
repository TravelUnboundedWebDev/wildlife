import {React,useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

import './index.css'

const images = [
  "/packages/img-7-1.jpg",
  "/packages/img-7-2.jpg",
  "/packages/img-7-3.jpg",
  "/packages/img-7-4.jpg",
  "/packages/img-7-5.jpg",
  "/packages/img-7-6.jpg",
  "/packages/img-7-7.jpg",
  "/packages/img-7-8.jpg"

]

const inclusions=[
"Meals & Accommodation with taxes at the Safari Lodges on full board.",
"Transport in NON-AC Landcruiser as per quote on private basis with pop up roof for easy game viewing.",
"Services of our Certified Driver Guide.",
"Drinking water in our vehicle while on Safari (limited to max 1 litre per person per day).",
"Park Entrance Fees as per current rates (Based on 2024 Park entrance fees for Masai Mara).",
"Game drives and activities as per itinerary."
]
  
  const exclusions=[
"International airfare inclusive of related taxes.",
"Visa entry fees.",
"Maasai Village Visit (US $ 25).",
"Balloon Safari ($ 450).",
"Flying Doctor’s evacuation fee temporary membership ($ 30 for KE and $35 for TZ).",
"All Optional Activities extras not stated including entry fees at Nairobi.",
"Lunch and dinner in Nairobi.",
"Drinks and Beverages consumed with lunch or dinner at the lodges.",
"Expenses of personal nature such as telecommunications, tips / gratuities, cigarettes, ETC.",
"Laundry services not unless otherwise mentioned.",
"Travel, baggage and medical insurance. (Highly recommended).",
"Any other items not specified above.",
"Changes or deviation from the itinerary."
  ]

const PackageKenya = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
    return(
        <>
        <Helmet>
          <title>Discover the Wonders of Maasai Mara: 6-Day Safari Adventure</title>
          <meta name="description" content="Embark on a 5-night, 6-day journey to Maasai Mara, Kenya. Immerse yourself in the breathtaking landscapes and witness the incredible wildlife. Book your Maasai Mara safari for an unforgettable experience!" />
        </Helmet>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Maasai Mara tour</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Maasai Mara and Serengeti together forms the World’s largest eco system. Mara is home for the
            BIG 5. The rains in April and May attracts millions of wildeebests and zebras to the great plains of
            Maasai Mara. This place turns magical. The cats who have been waiting for this season start to
            hunt on a daily basis becouse of the abundance of food. The plains are filed with gazelles, residents
            wildebeests and zebras. This season, the elephants start moving up the hills to avoid the flies
            which come with the wildebeests. This is the season of plenty. Plenty of action, plenty of play, and
            plenty of fun. What Travel Unbounded have curated a wonderful journey to East Africa to cover the
            two best parks this season. We would cover Lake Nakuru, the home for the white rhinos and the
            World famous Maasai Mara.</p>
        </div>
        </div>
        </div>
        </div>
    <div className="container mt-5">
    <div className='row carousel-container-package'>
    <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
      <button className="arrow left-arrow-package" onClick={prevSlide}>
        &lt;
      </button>
      <div className="carousel-content-package">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="arrow right-arrow-package" onClick={nextSlide}>
        &gt;
      </button>
      </div>
      </div>
      </div>
      <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='list-group data-container-package' style={{width:'100%'}}>
            <h3 className='mb-5 mt-5 package-head'>Short Itinerary</h3>
            <details className=' list-group-item list-style'> <summary><b>Day-1</b></summary>
            <hr/>
            <p className='list-style'>Arrive at Nairobi. Our team would meet and greet you at the airport. Our 4*4 vehicle/s would be
            ready to transfer you to a hotel for fretting up and for breakfast. Guests are requested to reach
            Nairobi the previous day or land on or before 7.00 AM on Day 1. Later drive to Lake Nakuru
            arriving in time for lunch and check in. Afternoon game drive. All meals and overnight at the hotel. (BLD )</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            
            <p className='list-style'>Have breakfast at the resort. Post breakfast, drive to Maasai Mara. Arrive at the resort for lunch
            and check in. Post lunch proceed to your first game drive at the famous plains of Maasai Mara. Our
            experienced drivers would drive to the right locations. All our vehicles have been fitted with
            wireless radio. This enables our drivers to communicate with the other driver in the park and
            quickly take you to the spot where there are good sightings and action. Return to the resort for
            dinner after a super exciting day. Retire at the resort for a good night sleep. ( BLD )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3/4</b></summary>
            <hr/>
            <p className='list-style'>Wake up early , sip your favourite hot beverage and proceed for Unlimited gas drives with packed
            breakfast and lunch. Two days are going to be the Best days of your life. On a lucky day you would
            get to sight the river crossings. This is the most watched wildlife spectacle on Earth. The pounding
            hooves of the zebras and wildebeests running to the river, jumping into it and trying to swim across
            to avoid the hungry crocodiles is truly a treat to ones eyes. Full board stay at the resort. ( BLD )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style'>After breakfast and check out, Pick packed lunch boxes and drive to a Masai Village. Later
              drive to Nairobi. Dinner on own. Overnight at the hotel at Nairobi on BB. ( BL )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-6</b></summary>
            <hr/>
            <p className='list-style'>Breakfast and check out at 11am. Visit a mall for last minute shopping. Lunch on own. Later
              transfer to the Airport for your departure flight back home. ( B )</p>
            </details>
        </div>
        </div>
        </div>
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-5">
                    <h3 class="mb-5 mt-5 package-head">Payments Methods</h3>
                    <ul className='list list-style'>
                        <li>Cost per couple - USD <span className='number'>3850</span></li>
                        <li>Cost per person with 4 paxs traveling - USD <span className='number'>1729</span></li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="mb-5 mt-5 package-head">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>50% tour cost as Advance 120 days before travel dates</li>
                    <li>Balance on or before 90 days before travel dates</li>
                    <li>Prices valid for period - June 20th to October 31st 2024</li>
                    </ul>
                    </div>
            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-5">
                    <h3 class=" mt-5 mb-5 package-head">
                       Bank Details
                    </h3>
                        <p className='list-style'>Travel Unbounded World pvt ltd</p>
                        <p className='list-style'>Account Number-<br/>
                            KES-<span className='number'>55010160012225</span> <br/>
                            USD-<span className='number'>55010130009921</span></p>
                        <p className='list-style'>Product Type-CURRENT A/C BUSINESS</p>
                        <p className='list-style'>Branch: WESTLANDS BRANCH</p>
                        <p className='list-style'>Swift CODE - UNAFKENA</p>
                        <p className='list-style'>BANK CODE <span className='number'>076</span></p>
                        <p className='list-style'>BRANCH CODE <span className='number'>76001</span></p>
                        <p className='list-style'>PIN CODE - <span className='number'>001</span></p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <p>Any non-refundable deposits paid to the hotels or airline tickets purchased, with prior notification to the client or agent will not be refunded</p>
                        <p>Where no such deposits have been made, the below applies:</p>
                        <li>Cancellation prior to 60/90 days (depending with season) – only bank charges will be deducted</li>
                        <li>Cancellations received less than 60/90 days prior to departure will be subject to the following</li>
                    </ul>
                    </div>
                <h3 className='mb-3 package-head'>Cancellation Fees</h3>
                <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                    <ul className='list list-style'>
                    <h5 className='package-head'>Low season:</h5>
                    <p>Less than 60 days 25%</p>
                    <p>Less than 45 days is 50%</p>
                    <p>Less than 15 days is 100%</p>
                    <p>Beyond 60 days – Full refund except bank charges, service fees and non-refundable deposits (if
                    any) at the hotels and air tickets</p>
                    </ul>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 col-xl-6'>
                    <ul className='list list-style'>
                    <h5 className='package-head'>Peak Season:</h5>
                      <p>Less than 90 days 20%;</p>
                      <p>Less than 45 days is 50%;</p>
                      <p>Less than 30 days is 100%;</p>
                      <p>Beyond 90 days – Full refund except bank charges, service fees and non-refundable deposits (if
                      any) at the hotels and air tickets</p>
                    </ul>
                    </div>

                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
                    <ul className='list-group list-style'>
                      {inclusions.map((item, index) => (
                      <li key={index} className='list-group-item'>{item}</li>
                      ))}
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="exc-head mb-5 mt-5">Exclusions</h3>
                    <ul className='list-group list-style'>
                    {exclusions.map((item, index) => (
                    <li key={index} className='list-group-item'>{item}</li>
                    ))}
                    </ul>
                </div>
                <div class="col-12 col-md-12 col-lg-12 col-xl-12">
                    <h3 class="mb-5 mt-5 package-head">Important Notes</h3>
                    <ul className='list list-style'>
                        <li> All quotations are based on current Government Park Tariffs. Park fees are subject to change without prior notice.</li>
                        <li> It is mandatory for all travellers returning to most countries from Kenya to be in possession of a valid Yellow Fever Certificate </li>
                        <li>Tourists Visa to Kenya is only available online at <a href='www.evisa.go.ke' target='_blank'>Click</a></li>
                        <li>Personal travel insurance cover is recommended for all visitors to East Africa</li>
                        <li>Wire transfer is subject to a service fee of USD 35.00 per transfer and credit card payments are subject to 3.5% service fee on PAID amount</li>
                        <li>Once a booking is confirmed, an invoice will be sent, after which payment should be made immediately to secure bookings.</li>
                        <li>For payments made in cash, please note that banks in Kenya do not accept US Dollar notes of 2008 and earlier.</li>
                        <li>Travel Unbounded World Private Limited shall NOT be liable for any excursions or extra services NOT booked through our offices while on tour.</li>
                        <li>Please restrict baggage per person to 15 kilos if you are taking a flight and 20 kilos if you are doing a road safari. Cabin sized soft bags are preferable</li>
                        <li>Single use plastic is not allowed in Kenya</li>
                        <li>Incoming passengers are no longer required to show covid vaccination certificates or PCR reports. Outbound passengers will follow covid requirement of the destination country.</li>
                        <li>All passports have to be valid for atleast six months from the date of your visit and must have atleast two empty pages</li>
                    </ul>
                </div>
                <div className='text-center mt-5'>
                <Link to='/form'> <button type='button' className='book-btn'>Book Now</button></Link>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
export default PackageKenya;