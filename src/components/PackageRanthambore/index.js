import {React,useState} from 'react'
import Navbar from'../Navbar'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import './index.css'
import {Helmet} from 'react-helmet'

const images = [
  "/packages/img-5-1.jpg",
  "/packages/img-5-2.jpg",
  "/packages/img-5-3.jpg",
  "/packages/img-5-4.jpg",
  "/packages/img-5-5.jpg",
]

const inclusions=[
  "4N full board accommodation - on twin sharing basis.",
  "Morning & Evening safaris during stay on exclusive use of jeeps",
  "Driver and guide fees.",
  "All Park entry fees, accommodation on a twin sharing basis and taxes."
]
  
  const exclusions=[
    "Any Airfare or Train fare from Home/Base locations or returns. Transfers from Jaipur and back by AC Innovas on shared basis.",
"Any type of drinks like mineral water & alcoholic beverages during journey, safari drives or at the camps/hotel/guest houses etc.",
"Any tips paid",
"Any medical expenses in case of emergencies",
"Camera fees or Video Camera fees as levied by the forest department",
"The services of Vehicles is not included on leisure days and after finishing the safari drives as per the itinerary given. Transfer from Jaipur to Ranthambore and return",
"Any type of personal insurance.",
"Any medical emergencies",
"Anything not mentioned above in the cost include section. Any bank charges and GST."
  ]

const PackageRanthambore = () => {
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
          <title>Ranthambore Adventure: Explore the Land of Royal Bengals in 4 Days</title>
          <meta name="description" content="Uncover the majestic allure of Ranthambore on a 3-night, 4-day expedition. Witness the royal Bengals in their natural habitat. Book your wildlife journey now for an unforgettable experience!" />
        </Helmet>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Journey to the Land of the Royal Bengals - Ranthambore</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>The former hunting grounds of the Kings of Jaipur, today is one of the most prominent
            tiger reserves of the World. It is one of the park the humans and animals have co existed for a very long
            time. The remains of the depleted forts, which were once used by the Kings are now ruled by the
            Royal Bengals. The accessibility of this park to major cities like Delhi and Jaipur makes this one of
            the most sought after weekend wilderness getaways in India.</p>
            <p className='list-style'>Ranthambore is very accessible by road from Jaipur. It is only 3 hours from Jaipur and 6 hours
            from Delhi. Any one who is visiting Jaipur on a holiday, should take a couple of days to visit this
            beautiful forest.</p>
            <p className='list-style'>People staying at Delhi can either drive down on a Friday afternoon or take an overnight train to
            Sawai Modhupur which is just 15 minutes from the park. All the resorts are at Sawai Modhupur.
            From budget stays to seven star properties, this place suits every traveller’s needs.</p>
            <p className='list-style'>The jungle safaris can be enjoyed either from a canter or a jeep. There is a option of having your
            own exclusive jeep or one can opt to share the seats with others to bring down the costs.</p>
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
            <p className='list-style'>Check in the resort. Lunch is served from 12 noon. Dinner is served from 8PM. Retire for
            the day. Stay would be at Ranthambore Regency or similar. ( LD )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style'>Wake up early in the morning. Sip your favourite hot beverage, and get set to proceed
            inside the forests of Ranthambore.</p>
            <p className='list-style'>The forest is divided into ten zones and every zone has its own charm of different escapes and have
            tigers present. Tigers being a very territorial animal, they generally do not cross paths.</p>
            <p className='list-style'>The duration of the game drive is for three and half hours. Summers get pretty hot, but the
            likelihood to sight the big cat is very high. They are often found near the waterholes, trying to cool
            themselves. Winters are magical. Though the chances of sighting the big cat is less compared to
            Summers, the winter coat of the tigers make them really look healthy and fresh during winters.</p>
            <p className='list-style'>Return to the resort after your game drive. Relax for a while. Lunch is served after 12 noon. Enjoy
            your meal. Proceed to your afternoon game drive. On a lucky day the Royal Bengal tigers would
            put up a great show for you. Return to the resort and have dinner before you retire for the day. (BLD )</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-3/4</b></summary>
            <hr/>
            <p className='list-style'>Wake up early morning, have a nice hot beverage. Proceed to the game drive. Every
            look and corner has its own charm. The rocky outcrops, the hilly terrain, small lakes, with a
            multitude of birds really is a treat to ones eyes. After the safari, return to your resort for some rest.
            Enjoy your lunch and proceed to your afternoon safari ( game drive ) into the forest of
            Ranthambore. On a lucky day, you would get to sight the Royal Bengal Tiger. The very sight of the
            tiger gives you goose bumps. Return to the resort after the safari with life time memories.</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style'>Wake up at leisure, enjoy your breakfast and check out at 11AM. We can arrange a trip to
            the famous Ganesha temple on the fort for an additional cost. You should inform us while booking
            the tour. End of tour.</p>
            </details>
        </div>
        </div>
        </div>
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
            <div class="col-12 col-md-6 col-lg-6 col-xl-6 mb-5">
                    <h3 class="mb-3 mt-5 package-head">Cost - 4N/5D</h3>
                    <ul className='list list-style'>
                        <li>Cost per couple - INR <span className='number'>91,442.5/-</span></li>
                        <li>Cost per couple and a kid aged below 9 years- INR <span className='number'>1,00,702.5/-</span></li>
                        <li>Cost for a single person traveling - INR <span className='number'>1,52,790/-</span></li>
                    </ul>
                    <h3 class="mb-3 mt-5 package-head">Cost - 3N/4D</h3>
                    <p className='list-style'>(3Nights tour guests would have only 4 safaris, that is 2 on Day 2 & 2 on Day 3. Day 4 after breakfast they would have to check out.)</p>
                    <ul className='list list-style'>
                        <li>Cost per couple - INR <span className='number'>67,155/-</span></li>
                        <li>Cost per couple and a kid aged below 9 years- INR <span className='number'>74,415/-</span></li>
                        <li>Cost for a single person traveling - INR <span className='number'>1,10,715/-</span></li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="mb-5 mt-5 package-head">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>100% of the tour cost to be paid at the time of booking</li>
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
                        <li>50% of the stay costs on or before 60 days to the tour ( amount would be given only as credit which
                        can be used for future travel with Travel Unbounded World pvt Ltd to Ranthambore only )</li>
                        <li>No refund of the tour cost for any cancellations between 45 days to the day of tour</li>
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
export default PackageRanthambore;