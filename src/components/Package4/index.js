import {React,useState} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import './index.css'
import {Helmet} from 'react-helmet'

const images = [
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704781757/Parwali_headon_alpdwd.jpg",
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704705642/Corbett_banner_image_becmes_lozswl.jpg",
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704694042/Destination_Corbett_gazwxq_c2jedb.jpg",
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704797329/Ramganga_view_vpotxh_oajsdn.jpg",
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704797352/corbett-machaan_copy_debgbe_ybbklz.jpg",
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704797374/TU_Team_Corbett_2017_lipxcr_jl5gal.jpg",
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704797393/TU_CTR_ztmapt_wrwezg.jpg",
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704797408/TU_CTR_1_ec9cds_xylvwh.jpg"
]

const inclusions=[
  "4N full board accommodation - on twin sharing basis.",
  "Morning and Evening safaris during stay on exclusive use of jeeps",
"Driver and guide fees.",
"All Park entry fees, accommodation on a twin sharing basis and taxes."
]
  const exclusions=[
    "Any Airfare or Train fare from Home/Base locations or returns. Transfers from Delhi and back by AC Innovas on shared basis.",
"Any type of drinks like mineral water & alcoholic beverages during journey, safari drives or at the camps/hotel/guest houses etc.",
"Any tips paid",
"Any medical expenses in case of emergencies",
"Camera fees or Video Camera fees as levied by the forest department",
"The services of Vehicles is not included on leisure days and after finishing the safari drives as per the itinerary given.",
"Any type of personal insurance.",
"Any medical emergencies",
"Anything not mentioned above in the cost include section. Any bank charges and GST."
  ]
const Package4 = () => {
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
          <title>Roar and Trumpet in Corbett: 4-Day Wildlife Extravaganza</title>
          <meta name="description" content="Embark on a 3-night, 4-day adventure in Corbett, the land of the roar and trumpet. Witness the majestic wildlife and immerse yourself in the natural symphony. Book your safari now!" />
        </Helmet>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Corbett - The Land of the Roar and Trumpet</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Away from the crowd packed like sardines, nestling in the foot hills of the mighty Himalayas, lies this beautiful peace of earth called Corbett. River Ramganga quietly flows cutting this valley into two. The upper regions boast of thick vegetation while the lower grass lands sway gently with the cool northerly winds. The birds started their dawn chorus as we drove along the banks of Ramganga, when we heard a throaty bark somewhere inside the forest. Then another!! "sambar-alarm" , our driver whispered, "definitely a tiger" he said. Our hearts skipped a beat while we watched this family of sambars stepping out in the open with Sun at their back, they seem to be very alert, looking around but the play never stopped to cease.</p>

            <p className='list-style'>Jim Corbett National park, is the oldest park in India which was established in the year 1936 to protect the Bengal tiger. Initially known as the Hailey park, this park got rechristened after the legend Jim Corbett, who had a lot to contribute towards the establishment of the park.</p>

            <p className='list-style'>Tourists are allowed in selective areas of the park. There are close to 90,000 visitors every year and the crowd has been on the increase. Corbett has got more than 488 species of ‘fauna’ and a variety of plants. This makes it one of the best parks in the world.
            Corbett is divided into three major zones. Dhikala, Bijrani and Jhirna. Guests wanting to visit Dhikala have to stay at the FRH ( forest rest houses ). Only veg food is provided here, but the experience is far too good onside. Dhikala is known for its vast grass lands, water body and sal forests. </p>
            <p className='list-style'>Guests who want to visit Bijrani and Jhirna, have the option of staying at one of the resorts at Ramnagar. Ramnagar is the feeder town for this forest. The busy little town has a lot of options to stay, ranging from a lodge to a five star property. </p>
            <p className='list-style'>Dotted with thick shrubs, river beds, and rocky mountains, Bijrani is a very interesting zone. It boasts of a high population of animals and birds. Guests staying at the resorts can enjoy the morning and evening drives inside the forests in a open jeep. They also have the facility of enjoying the benefits of a comfortable stay at the resort during the nights. The most famous tigress called Sharmilee had her home here. It is her off springs who rule this terrain now.</p>
            <p className='list-style'>Jhirna as a zone is known for its high density of elephant population. Though the big cat sighting here is very tricky, it has been my favourite zone. The tigers here are huge!! And one sighting here will be edged till the end. This zone also boasts a variety of bird life. The serene landscape of this zone keeps everyone on their seat during the jungle drives. </p>
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
            <p className='list-style'> Arrive at Delhi on or before 11AM. Drive to Ramnagar. Lunch enroute. Stay at Ramnagar. Corbett Machan is the resort we use. It is a 4 star category and is known for its service , food and hospitality.(LD)</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style'>Morning , Evening jungle safaris at Bijrani or Jhirna ( subject to availability ). Full board stay at the resort.(BLD)</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3/4</b></summary>
            <hr/>
            <p className='list-style'>Morning , Evening jungle safaris at Sitawani or Jhirna ( subject to availability ). Full board stay at the resort.(BLD)</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style'>After breakfast, drive to Delhi, drop at the airport. Lunch enroute. End of tour. </p>
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
                        <li>Cost per couple - INR <span className='number'>54,982/-</span></li>
                        <li>Cost per couple and a kid aged below 9 years- INR <span className='number'>68,872/-</span></li>
                        <li>Cost for a single person traveling - INR <span className='number'>91,442/-</span></li>
                    </ul>
                    <h3 class="mb-3 mt-5 package-head">Cost - 3N/4D</h3>
                    <p className='list-style'>(3Nights tour guests would have only 4 safaris, that is 2 on Day 2 & 2 on Day 3. Day 4 after breakfast they would have to check out.)</p>
                    <ul className='list list-style'>
                        <li>Cost per couple - INR <span className='number'>40,435/-</span></li>
                        <li>Cost per couple and a kid aged below 9 years- INR <span className='number'>51,425/-</span></li>
                        <li>Cost for a single person traveling - INR <span className='number'>66,550/-</span></li>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="mb-5 mt-5 package-head">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>100% advance after we confirm availability along with any Govt ID card for Indians and for NRIs we would require the copy of the passport.</li>
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
can be used for future travel with Travel Unbounded World pvt Ltd to Corbett only )</li>
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
                        <li>Kindly refer to the Privacy Policy page <a href='https://travelunbounded.in/privacy'>Check</a> for further clauses</li>
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
export default Package4;