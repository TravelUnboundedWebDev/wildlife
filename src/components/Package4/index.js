import {React,useState} from 'react'
import Navbar from '../Navbar'
import {BsArrowLeftSquareFill} from "react-icons/bs";
import Footer from '../Footer'
import './index.css'

const images = [
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155459/Parwali_Jr_j7ligx.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155647/Elephants_light_quowev.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155501/ele_silhoutte_1_ebt5if.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155446/Ramganga_view_vpotxh.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155451/corbett-machaan_copy_debgbe.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155518/TU_Team_Corbett_2017_lipxcr.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155526/TU_CTR_ztmapt.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701155635/TU_CTR_1_ec9cds.jpg"
]

const inclusions=["Road transfers from and to Delhi on shared basis",
      "Four nights stay at Corbett Machan or similar on sharing basis","Jungle safaris in open jeep or canters subject to availability and zones","Guide fee","Park Entry","GST"]
  
  const exclusions=["Airfare to Delhi and return",
      "Personal and medical expenses","Insurance","Tips","Anything other than mentioned in the Cost Includes section"]

const Package4 = () => {
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
            <p className='list-style'> Arrive at Delhi on or before 11AM. Drive to Ramnagar. Lunch enroute. Stay at Ramnagar. Corbett Machan is the resort we use. It is a 4 star category and is known for its service , food and hospitality.</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style'>Morning , Evening jungle safaris at Bijrani or Jhirna ( subject to availability ). Full board stay at the resort.</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3/4</b></summary>
            <hr/>
            <p className='list-style'>Morning , Evening jungle safaris at Sitawani or Jhirna ( subject to availability ). Full board stay at the resort. </p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style'>After breakfast, drive to Delhi, drop at the airport. Lunch enroute. End of tour. </p>
            </details>
        </div>
        </div>
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 mb-5">
                    <h3 class="mb-5 mt-5 package-head">Payment Methods</h3>
                    <ul className='list list-style'>
                        <li>Cost per person — on double occupancy - INR <span className='number'>41,999/-</span> incl GST . Ex- Delhi. ( Indians )</li>
                        <li>USD <span className='number'>1200/-</span> incl GST . Ex- Delhi.( NRIs and Foreign nationals )</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 list-style">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>100% advance after we confirm availability along with any Govt ID card for Indians and for NRIs we would require the copy of the passport.</li>
                    </ul>
                </div>
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
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <li>50% refund would be given as credit to travel on future trip to Corbett if cancelled on or before
                        60 days of travel</li>
                        <li>No refund if trip is cancelled on or before 59 days before the tour dates.</li>
                        <li>Cost based on 4 guests traveling together on the trip. Any additions or deletion would impact the cost.</li>
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
                    <h3 className="mb-5 mt-5 package-head">Contact</h3>
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
export default Package4;