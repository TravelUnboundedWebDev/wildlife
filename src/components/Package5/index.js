import {React,useState} from 'react'
import Navbar from'../Navbar'
import {BsArrowLeftSquareFill} from "react-icons/bs";
import Footer from '../Footer'
import './index.css'

const images = [
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701156187/Ladli_qabfc0.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701156201/Cubs_RTR_xax29z.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701156220/T114_cubs_gyuevg.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701156148/Peacock_1_vjwdvn.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701156183/TU_RTR_1_of_1_kxckm5.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701156142/TU_RTR_r6grya.jpg"
]

const inclusions=["4N full board accommodation - on twin sharing basis.","Morning &amp; Evening safaris during stay on shared basis.","Driver and guide fees. Transfers from Jaipur and back by AC Innovas on shared basis.","All Park entry fees, accommodation on a twin sharing basis and taxes."]
  
  const exclusions=["Any Airfare or Train fare from Home/Base locations or returns.","Any type of drinks like mineral water &amp; alcoholic beverages during journey, safari drives or at the camps/hotel/guest houses etc.",
  "Any tips paid","Any medical expenses in case of emergencies","Camera fees or Video Camera fees as levied by the forest department",
  "The services of Vehicles is not included on leisure days and after finishing the safari drives as per the itinerary given. Transfer from Jaipur to Ranthambore and return",
  "Any type of personal insurance.","Any medical emergencies","Anything not mentioned above in the cost include section. Any bank charges and GST."]

const Package5 = () => {
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
            <h1 className='mb-5 mt-5 blog-head'>Journey to the Land of the Royal Bengals - Ranthambore</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Ranthambore National Park is one of the biggest and most renowned national park in Northern India. The
            park is located in the Sawai Madhopur district of southeastern Rajasthan, which is about 130 km from Jaipur.
            Being considered as one of the famous and former hunting grounds of the Maharajas of Jaipur, today the
            Ranthambore National Park terrain is major wildlife tourist attraction spot that has pulled the attention of
            many wildlife photographers and lovers in this destination.</p>
        </div>
        </div>
        </div>
        </div>
    <div className="container mt-5">
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
            <p className='list-style'>Arrive at Jaipur before 12PM. Our vehicles would pick you up and drive to the resort ( transfers from Jaipur
            to Sawai Modhupur would be by AC Innovas ). The stay is at one of the best luxury resorts in Sawai
            Madhopur. Reach the resort by 5PM. Relax in the evening. During summers, you can spend time at the pool
            and during winters, you can spend time at the campfire. Dinner and retire at the resort.</p>
            <p className='list-style'>There is a huge variety of wild animals in Ranthambore National Park, including mammals, birds &amp; reptiles.
            Ranthambore National Park is also home to a rich variety of birds, thanks to its diverse terrain &amp; numerous
            water bodies. The main attraction are the Royal Bengal tigers and the ruined forts inside the national park.</p>
            <p className='list-style'>The park is divided into 10 zones. Zones 1 to 5 are on one side of Sawai Modhpur town and zones 6 to 10
            border the other side of this town. From step ravines to grasslands, this park is one of the most beautiful
            parks in the World.</p>
            <p className='list-style'>The famous, Trinetra Ganesh Temple is situated inside the Ranthambore Fort, and is famous as one of the
            oldest temples in Rajasthan. It is the only temple in the entire world which houses the entire family of Lord
            Ganesha while his statue consists of three eyes. The walk up to the temple is a must do for any visitors. One
            can see the vast forests of rRanthambore from the top of the fort.</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2/3/4</b></summary>
            <hr/>
            <p className='list-style'>Wake up call at 5.00AM, time for a rollicking start into the land of the Royals!!!Enjoy the beauty of the park
            from the minute we enter the famous gate of the forest to experience every second sitting on the edge of our
            seats. After safari, return to the resort for a sumptuous breakfast and rest. Lunch at 1.00PM, proceed for
            evening safari at 3.30PM. After safari come back to the resort. Share your experiences at the poolside before
            you proceed for dinner and rest.</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style'>Wake up call at leisure and check out after breakfast with a life time memories of the trip. Our AC Innovas
            would drop you back to Jaipur to catch the return flight to Delhi or Mumbai.</p>
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
                        <li>INR <span className='number'>54,575/-</span> per day for Indian Nationals on Double occupancy and <span className='number'>USD 2300/-</span> for on Double
                        occupancy Foreign Nationals.</li>
                        <li>INR <span className='number'>74,575/-</span> per day for Indian Nationals on Single occupancy and USD <span className='number'>3000/-</span> for on Single
                        occupancy Foreign Nationals.</li>
                    </ul>
                </div>
                
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Terms and conditions</h3>
                    <ul className='list list-style'>
                    <li>Travel Unbounded World Pvt Ltd is not responsible for any personal losses of the guests during the trip</li>
                    <li>Travel Unbounded World Pvt Ltd is not responsible for any damages to the property caused by the guests during travel and the cost needs to be borne by the guest</li>
                    <li>60% of tour cost as advance 120 days prior to the travel dates</li>
                    <li>Balance 40% of the tour cost 90 days prior to the travel dates.</li>
                    <li>Seat would be allocated on first come first basis on group tours</li>
                    <li>The quote should not be shared wide mail or verbally to any other tour company.</li>
                    <li>Travel Unbounded World Pvt Ltd would have the right to modify , postpone or cancel the trip. In this case 100% refund would be given to the guests</li>
                    <li>No refund on the safari would be given in case of the guests cancelling the tour after confirming his/her seat.</li>
                    <li>Minumum four guests are required to conduct this tour, incase of any number variation, the cost per person would also vary</li>
                    <li>Resort/hotel cancellation policy would be applicable as per their policies</li>
                    <li>No refund would be given on any cancelations for this tour bcos of the special price quoted.</li>
                    <li>Kindly refer to the Private Policy page on www.travelunbounded.com for further clauses</li>
                    <li>Safaris would be allocated in different zones as per avalability</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
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
export default Package5;