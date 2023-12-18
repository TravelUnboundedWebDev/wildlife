import {React,useState} from 'react'
import Navbar from '../Navbar'
import {BsArrowLeftSquareFill} from "react-icons/bs";
import Footer from '../Footer';
import './index.css'

const images = [
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701163739/Tiger_cub_Bandhavgarh_wo11wx.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701163739/Tiger_Backlit_aytcfh.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701163887/Indian_Pitta_L5V0505-2_1_w9icfq.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701163930/1_Tiger_cub_bandhavgarh_apwthx.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701163866/BNDVG_Lupin_u28frq.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701163740/TU_Kanha_1_of_1_xavkxj.jpg"
]

const inclusions=["A full board accommodation at Bandhavgarh (Breakfast, Lunch & dinner) on single occupancy basis.",
"All game drives as mentioned","Transportation from Jabalpur and back in comfortable AC vehicles on sharing basis only."]
  
  const exclusions=["Any Airfare or Train fare from Home/Base locations or returns.","Any type of drinks like mineral water & alcoholic beverages during journey, safari drives or at the camps/hotel/guest houses etc",
  "Any tips paid (Tips will be an additional Rs 5000 per participant)","Any medical expenses in case of emergencies",
  "Camera fees or Video Camera fees as levied by the forest department","The services of Vehicles is not included on leisure days and after finishing the safari drives as per the itinerary given",
  "Any type of personal insurance.","Any medical emergencies","Anything not mentioned above in the cost include section",
  "One Elephant ride on any one of the days on sharing basis depending on availability. This ride is for two hours and only three persons allowed at a time."," Zone changes charges."]

const Package6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const handleBack = () => {
    window.history.back();
  }
    return(
        <>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12'>
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
    <div className='col-12'>
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
            <div className='col-12 list-group data-container-package' style={{width:'100%'}}>
            <h3 className='mb-5 mt-5 package-head'>Short Itinerary</h3>
            <details className=' list-group-item list-style'> <summary><b>Day-1</b></summary>
            <hr/>
            <p className='list-style'>Arrive at Jabalpur around 1PM by a flight from Mumbai/ Delhi/ Hyd, or Katni by 7.30 PM, drive to Bandhavgarh and reach the resort at Dinner time. After soaking into the jungle like atmosphere here, retire for an early start next morning.</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2/3/4</b></summary>
            <hr/>
            <p className='list-style'>Wake up early morning for a hot tea. Proceed to the jungles of Bandhavgarh to sight the Tiger in its habitat. Enjoy the mouth watering Indian delicacies during the safaris. Villagers have set up stalls inside the jungle to treat us with tea and refreshments. Continue the safari and return to the resort for breakfast. Rest for a while. Download the images taken that morning. Lunch would be served from1.00pm onwards. Afternoon safari at 2.30PM. Depending on the gate/zone, we would try to track the elusive cat and also capture the other animals. The evening light is magical at Bandhavgarh in the evenings, providing us a lot of opportunities to make very good pictures. Return to the resort. Get-together in the evenings with the other guests and share your experiences or spend time with your family and friends. Dinner and rest at the resort. </p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style'>Guests traveling back by train from Katni, would have to leave Bandhavgarh by 20th May after safari and check into a hotel at Katni.( at own cost , not included in the trip cost ) Gusts flying out of Jabalpur on 21st May, should get up early (like any safari day) to leave for Jabalpur Airport by 10AM to take the flights to your final destinations. Return flights from Jabalpur to be booked on or after 2PM.</p>
            </details>
        </div>
        </div>
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
            <div class="col-12 col-md-6 mb-5">
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
                <div class="col-12 col-md-6 mb-5">
                    <h3 class="mb-5 mt-5 package-head">Payment Methods</h3>
                    <ul className='list list-style'>
                        <li>INR <span className='number'>41,689/-</span> ( Incl of all taxes ) on twin sharing basis for Indian Nationals</li>
                        <li> USD <span className='number'>2000/-</span> on twin sharing basis for Foreign Nationals</li>
                        <li>INR <span className='number'>54,489/-</span> ( Incl of all taxes ) on single occupancy basis for Indian Nationals</li>
                        <li>Seats would be allocated on first come first basis. 50% as advance at the time of booking ( on or before Jan 14th 2021) and the balance 50% of the tour cost to be paid on or by Feb 10th 2021.</li>
                    </ul>
                </div>
                
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5">Terms and conditions</h3>
                    <ul className='list list-style'>
                    <li>Travel Unbounded World Pvt Ltd Pvt Ltd is not responsible for any personal losses of the guests during the trip</li>
                    <li>Travel Unbounded World Pvt Ltd Pvt Ltd is not responsible for any damages to the property caused by the guests during travel and the cost needs to be borne by the guest</li>
                    <li>Seats would be allocated on first come first basis</li>
                    <li>Travel Unbounded World Pvt Ltd Pvt Ltd would have the right to modify , postpone or cancel the trip. In this case 100% refund would be given to the guests</li>
                    <li> No refund would be given in case of the guests cancelling the tour after confirming his/her seat.</li>
                    <li> Kindly refer to the Terms and Conditions page on www.travelunbounded.com for further clauses.</li>
                    <li>Minimum four guests are required to conduct this tour, incase the numbers vary, the costs would also vary</li>
                    <li>Travel Unbounded World Pvt Ltd Pvt ltd holds the right to cancel the trip at any time. In such events, full refund would be given to the clients.</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <li>50% of the tour costs on or before 90 days to the tour ( amount would be given only as credit which can be used for future travel with Travel Unbounded World pvt Ltd )</li>
                        <li>No refund of the tour cost for any cancellations between 60 days to the day of tour</li>
                    </ul>
                </div>

                <div class="col-12 col-md-6">
                    <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
                    <ul className='list-group list-style'>
                      {inclusions.map((item, index) => (
                      <li key={index} className='list-group-item'>{item}</li>
                      ))}
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="exc-head mb-5 mt-5">Exclusions</h3>
                    <ul className='list-group list-style'>
                    {exclusions.map((item, index) => (
                    <li key={index} className='list-group-item'>{item}</li>
                    ))}
                    </ul>
                </div>
                
                <div class="col-12 col-md-12 text-center">
                    <h3 class="mb-5 mt-5">Contact</h3>
                    <p className='list-style'>ck@travelunbounded.com - <span className='number'>+91 9845090014</span> - Chandru</p>
                    <p className='list-style'>sk@travelunbounded.com - <span className='number'>+91 9739255255</span> - Suresh</p>
                    <p className='list-style'>sg@travelunbounded.com - <span className='number'>+91 9884023028</span> - Supratik Gosh</p>
                </div>
                <div className='text-center mt-5'>
                <BsArrowLeftSquareFill size={30} onClick={handleBack}/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
}
export default Package6;