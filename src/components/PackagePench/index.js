import {React,useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import './p3.css'
import {Helmet} from 'react-helmet'

const images = [
  "/packages/img-3-1.jpg",
  "/packages/img-3-2.jpg",
  "/packages/img-3-3.jpg",
  "/packages/img-3-4.jpg",
  "/packages/img-3-5.jpg",
  "/packages/img-3-6.jpg",
  "/packages/img-3-7.jpg"
]

const inclusions=
      ["Pick up from Nagpur airport and drop back to Nagpur airport by Innovas. 4 guests per car.",
      "Safaris as mentioned in the itinerary by Gypys - 4 guests per car",
      "Meals as mentioned within brackets",
      "Stay at Gajraj villa rooms as mentioned in the itinerary on twin or double sharing basis"]
     
  const exclusions=
      ["Airfare or train fare to Nagpur and return from your home stations",
      "Any personal or medical expenses",
      "GST of INR 450 per person",
      "Tips ( tips would be INR 2500 per person and would’ve to be handed over as cash on arrival )",
      "Anything there than mentions in the Inclusions section",
      ]
    
const PackagePench = () => {
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
          <title>Pench Tiger Reserve Expedition: 4 Days in the Jungle Book-Inspired Paradise</title>
          <meta name="description" content="Experience the magic of the 'Jungle Book' at Pench Tiger Reserve on a 4-day adventure. Uncover the inspiration behind the famous tale. Book now for a captivating wildlife retreat!" />
        </Helmet>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Journey to the place that inspired the famous , ‘Jungle Book’ - Pench Tiger reserve</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Way back in 1894, Rudard Kipling penned down his famous book called, Jungle Book’,
            where he mentioned about this beautiful forest. It was from his book, came the popular characters
            like Akela ( The Indian Wolf ), Raksha ( The female wolf ), Baloo ( The bear ) and vicious Shere
            Khan (Royal Bengal Tiger).</p>
            <p className='list-style'>Now Pench is one of the most beautiful National parks in India. It is home for tigers, leopards, wild
            dogs and a multitude of birds and deers.</p>
            <p className='list-style'>We have curated a journey to this park in March 2024 for you and your family to explore and enjoy.</p>
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
            <p className='list-style'>Arrive at Nagpur around 11.00 hours. Guests arriving earlier have to wait for the group at
            the Nagpur airport. Our Toyota Innova’s would pick you up from the airport and drive to Pench
            Tiger reserve.</p>
            <p className='list-style'>The drive takes about one hour and forty five minutes. Reach the resort around 1.00PM. Check in
            the resort. Have lunch and proceed for the first afternoon safari at Pench tiger reserve.</p>
            <p className='list-style'>Return to the resort at about 7.00PM and have dinner and retire for the day. ( L D )</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style'>Wake up early, have a cup of hot beverage and proceed for the first game drive into the
            core zone of Pench. The weather would be very hot, so carry light coloured clothes. The heat of
            the summer would bring the animals to the water holes.</p>
            <p className='list-style'>Breakfast would be packed and you can enjoy it inside the forests in a designated area. Return to
            the resort around 11.15AM and take rest.</p>
            <p className='list-style'>Lunch would be served from 12.30noon. Afternoon safari generally starts at 2.30PM during the
            summer months. Post the afternoon game drive, return to the resort. Enjoy your evening at the
            pool side, have dinner and retire for the day. ( BLD )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3</b></summary>
            <hr/>
            <p className='list-style'>Enjoy your morning and afternoon game drives aside the core zones of Pench tiger
            reserve. Full board stay would be at the resort. ( BLD )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-4</b></summary>
            <hr/>
            <p className='list-style'>Wake up early, freshen up, have a hot cup of beverage and proceed to your last game
            drive of this tour. Return to the resort with loads of memories. Have lunch at the resort and check
            out. Our Innovas would drop you at Nagpur airport. Kindly book your return air tickets post 18.00
            hours only. ( B )</p>
            </details>
        </div>
        </div>
        </div>
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-5">
                    <h3 class="mb-3 mt-5 package-head">Cost - 4N/3D</h3>
                    <ul className='list list-style'>
                        <li>Cost per person on twin sharing basis, Ex Nagpur - INR <span className='number'>49593/-</span></li>
                        <li>For stay at Gajraj villa property on twin sharing basis - INR <span className='number'>49593/-</span>per person</li>
                        <li>Single occupancy would be an additional 30% of the above cost</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="mb-5 mt-5 package-head">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>100% of the tour cost to be paid at the time of booking</li>
                    </ul>
                </div>
                <div class="col-12 col-md-12 col-lg-12 col-xl-12">
                    <h3 class="mb-5 mt-5 package-head">Things to Note</h3>
                    <ul className='list list-style'>
                        <li>Aadhar card soft copy to be sent at the time of booking</li>
                        <li>The property is owned by Gajraj resorts. <a href='https://thegajraj.com/' target='__blank'>See Details</a></li>
                        <li>No refund would be entertained from the forest department on safari permits if tour is cancelled after booking</li>
                        <li>Balance refund would be passed on as credit only and can be used for your future trips through Travel Unbounded World Pvt Ltd to Pench tiger reserve</li>
                        <li>No name additions or changes allowed after booking the tour</li>
                        <li>100% of the tour cost required to confirm the seat</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-5">
                    <h3 class=" mt-5 mb-5 package-head">
                       Bank Details
                    </h3>
                        <p className='list-style'>Name : Travel Unbounded World pvt ltd</p>
                        <p className='list-style'>Status : Current Account</p>
                        <p className='list-style'>Bank : HDFC</p>
                        <p className='list-style'>Branch: Airport Road, Bangalore</p>
                        <p className='list-style'>Account No : <span className='number'>50200012940675</span></p>
                        <p className='list-style'>IFSC : <span className='number'>HDFC0000075</span></p>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <li>50% of the stay costs on or before 60 days to the tour ( amount would be given only as credit which can be used for future travel with Travel Unbounded World pvt Ltd to Pench only )</li>
                        <li>No refund of the tour cost for any cancellations between 45 days to the day of tour</li>
                    </ul>
                </div>

                <div class="col-12 col-md-6">
                    <h3 class="inc-head mb-5 col-lg-6 col-xl-6 mt-5">Inclusions</h3>
                    <ul className='list-group list list-style'>
                      {inclusions.map((item, index) => (
                      <li key={index} className='list-group-item'>{item}</li>
                      ))}
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="exc-head mb-5 mt-5">Exclusions</h3>
                    <ul className='list-group list list-style'>
                    {exclusions.map((item, index) => (
                    <li key={index} className='list-group-item'>{item}</li>
                    ))}
                    </ul>
                </div>
                <div class="col-12 col-md-12 col-lg-12 col-xl-12">
                    <h3 class="mb-5 mt-5 package-head">Terms and conditions</h3>
                    <ul className='list list-style'>
                        <li>Travel Unbounded World  Pvt Ltd is not responsible for any personal losses of the guests during the trip</li>
                        <li>Travel Unbounded World  Pvt Ltd is not responsible for any damages to the property caused by the guests during travel and the cost needs to be borne by the guest</li>
                        <li>60% of tour cost as advance 90 days prior to the travel dates</li>
                        <li>Balance 40% of the tour cost 60 days prior to the travel dates.</li>
                        <li>The quote should not be shared wide mail or verbally to any other tour company.</li>
                        <li>Travel Unbounded World  Pvt Ltd would have the right to modify , postpone or cancel the trip. In this case 100% refund would be given to the guests</li>
                        <li>No refund on the safari would be given in case of the guests cancelling the tour after confirming his/her seat.</li>
                        <li>Resort/hotel cancellation policy would be applicable as per their policies</li>
                        <li>No refund would be given on any cancelations for this tour becouse of the special price quoted.</li>
                        <li>Kindly refer to the Private Policy page <a href='https://travelunbounded.in/privacy'>Check</a> for further clauses</li>
                        <li>Safaris would be allocated in different zones as per avalability</li>
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
export default PackagePench;