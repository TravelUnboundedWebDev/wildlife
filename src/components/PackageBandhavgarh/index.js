import {React,useState} from 'react'
import Navbar from '../Navbar'
import {Link} from 'react-router-dom'
import Footer from '../Footer';
import './index.css'
import {Helmet} from 'react-helmet'

const images = [
  "/packages/img-6-1.jpg",
  "/packages/img-6-2.jpg",
  "/packages/img-6-3.jpg",
  "/packages/img-6-4.jpg",
  "/packages/img-6-5.jpg",
  "/packages/img-6-6.jpg"
]

const inclusions=[
  "4N full board accommodation - on twin sharing basis.",
  "Morning & Evening safaris during stay on exclusive use of jeeps",
  "Driver and guide fees.",
  "All Park entry fees, accommodation on a twin sharing basis and taxes."
]
  
  const exclusions=[
    "Any Airfare or Train fare from Home/Base locations or returns. Internal Transfers",
"Any type of drinks like mineral water & alcoholic beverages during journey, safari drives or at the camps/hotel/guest houses etc.",
"Any tips paid",
"Any medical expenses in case of emergencies",
"Camera fees or Video Camera fees as levied by the forest department",
"The services of Vehicles is not included on leisure days and after finishing the safari drives as per the itinerary given.",
"Any type of personal insurance.",
"Any medical emergencies",
"Anything not mentioned above in the cost include section. Any bank charges and GST."
  ]
const PackageBandhavgarh = () => {
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
          <title>Explore the Tiger Capital: 4-Day Wilderness Retreat in Bandhavgarh, Madhya Pradesh</title>
          <meta name="description" content="Embark on a 3-night, 4-day adventure in the Tiger Capital, Bandhavgarh National Park, Madhya Pradesh. Witness majestic tigers in their natural habitat. Book your unforgettable wildlife experience now!" />
        </Helmet>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Journey to The Tiger Capital - Bandhavgarh national park Madhyapradesh</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Ever wondered doing jungle drives in the "Tiger Capital of the World"? We make that possible now and do it with taking care of your comfort both on and off the field. Sighting here is high and regular when compared to any other Tiger reserve in India and therefore a Dawn to Dusk safari makes perfect sense. With Tigers in all the zones, it's going to be lifetime experience in the jungle.Stay at one of the top Boutique resorts geared up to give you a memorable experience in the jungle surroundings. We often hear call of the wild from the resort and have seen Leopards and other cats few yards away from the main gate. They also have a variety of options to tickle your taste buds, the fun is in enjoying the mouthwatering local sweet called the Gulab Jamun and Rabri while being close to nature.</p>
        </div>
        </div>
        </div>
        </div>
    <div className="container mt-5 text-center">
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
            <p className='list-style'>Arrive at Jabalpur around 1PM by a flight from Mumbai/ Delhi/ Hyd, or Katni by 7.30 PM, drive to Bandhavgarh and reach the resort at Dinner time. After soaking into the jungle like atmosphere here, retire for an early start next morning.</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2/3/4</b></summary>
            <hr/>
            <p className='list-style'>Wake up early morning for a hot tea. Proceed to the jungles of Bandhavgarh to sight the Tiger in its habitat. Enjoy the mouth watering Indian delicious during the safaris. Villagers have set up stalls inside the jungle to treat us with tea and refreshments. Continue the safari and return to the resort for breakfast. Rest for a while. Download the images taken that morning. Lunch would be served from 1.00pm onwards. Afternoon safari at 2.30PM. Depending on the gate/zone, we would try to track the exclusive cat and also capture the other animals. The evening light is magical at Bandhavgarh in the evenings, providing us a lot of opportunities to make very good pictures. Return to the resort. Get-together in the evenings with the other guests and share your experiences or spend time with your family and friends. Dinner and rest at the resort. </p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style'>Guests traveling back by train from Katni, would have to leave Bandhavgarh on Day 4 night after safari and
            check into a hotel at Katni. ( at own cost , not included in the trip cost )</p>
            <p className='list-style'>Gusts flying out of Jabalpur, should get up early (like any safari day) to leave for Jabalpur Airport by 10AM
            to take the flights to your final destinations. Return flights from Jabalpur to be booked on or after 2PM.</p>
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
                        <li>Cost per couple - INR <span className='number'>61,348/-</span></li>
                        <li>Cost per couple and a kid aged below 9 years- INR <span className='number'>70,608/-</span></li>
                        <li>Cost for a single person traveling - INR <span className='number'>1,01,860/-</span></li>
                    </ul>
                    <h3 class="mb-3 mt-5 package-head">Cost - 3N/4D</h3>
                    <p className='list-style'>(3Nights tour guests would have only 4 safaris, that is 2 on Day 2 & 2 on Day 3. Day 4 after breakfast they would have to check out.)</p>
                    <ul className='list list-style'>
                        <li>Cost per couple - INR <span className='number'>45,375/-</span></li>
                        <li>Cost per couple and a kid aged below 9 years- INR <span className='number'>52,365/-</span></li>
                        <li>Cost for a single person traveling - INR <span className='number'>74,415/-</span></li>
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
                        <li>50% of the stay costs on or before 60 days to the tour ( amount would be given only as credit which can be
used for future travel with Travel Unbounded World pvt Ltd to Bandhavgarh only )</li>
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
export default PackageBandhavgarh;