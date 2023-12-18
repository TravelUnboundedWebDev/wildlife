import {React,useState} from 'react'
import Navbar from '../Navbar'
import {BsArrowLeftSquareFill} from "react-icons/bs";
import Footer from '../Footer'
import './p3.css'

const images = [
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154657/Male_Tiger_Pench_ebn7xv.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154517/Sambhar_Pench_z8ufck.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154455/Pench_Tigers_me5twm.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154454/Pench_villa_2_kz5d8c.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154457/Pench_Villa_3_q6cdvf.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154457/Pench_villa_vgwsl4.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154461/Pench_Villa_4_nycgpl.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701154635/group_photo_bmmbzh.jpg"
]

const inclusions=["Pick up from Nagpur airport and drop back to Nagpur airport by Innovas. 4 guests per car.",
      "Safaris as mentioned in the itinerary by Gypys","Meals as mentioned within brackets","Stay at Gajraj villa rooms as mentioned in the itinerary on twin or double sharing basis"]
  
  const exclusions=["Airfare or train fare to Nagpur and return from your home stations",
      "Any personal or medical expenses","GST of INR 450 per person","Anything other than mentioned in the Inclusions section"]

const Package3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const handleBack =() => {
    window.history.back();
  }
    return(
        <>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12'>
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
            <p className='list-style'>Arrive at Nagpur around 15.00 hours. Guests arriving earlier have to wait for the group at
            the Nagpur airport. Our Toyota Innova’s would pick you up from the airport and drive to Pench
            Tiger reserve.</p>
            <p className='list-style'>The drive takes about one hour and forty five minutes. Reach the resort around 5.30PM. Freshen
            up, have tea or coffee and get ready to proceed for a very exciting night safari in the buffer zone of
            Pench Tiger reserve. On a lucky night, one can get to sight the majestic tigers, leopards and other
            nocturnal animals.</p>
            <p className='list-style'>Return to the resort at about 8.00PM and have dinner and retire for the day. ( D )</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style'>Wake up early, have a cup of hot beverage and proceed for the first game drive into the
            core zone of Pench. The weather would be slightly cold, so carry some warm clothes. The misty
            morning inside the jungle would be like travelling into another World.</p>
            <p className='list-style'>Breakfast would be packed and you can enjoy it inside the forests in a designated area. Return to
            the resort around 10.15AM and take rest.</p>
            <p className='list-style'>Lunch would be served from 12.30noon. Afternoon safari generally starts at 2.00PM. Post the afternoon game drive, return to the resort. Enjoy your evening at the camp
            fire, have dinner and retire for the day. ( BLD )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3</b></summary>
            <hr/>
            <p className='list-style'>Enjoy your morning and afternoon game drives inside the core zones of Pench tiger
            reserve. Full board stay would be at the resort. ( BLD )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-4</b></summary>
            <hr/>
            <p className='list-style'>Wake up early, freshen up, have a hot cup of beverage and proceed to your last game
            drive of this tour. Return to the resort with loads of memories. Have breakfast at the resort and
            check out. Our Innovas would drop you at Nagpur airport. Kindly book your return air tickets post
            17.00 hours only. ( B )</p>
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
                        <li>Cost per person on twin sharing basis, Ex Nagpur -
                            For stay at Gajraj villa property - INR <span className='number'>39593/-</span></li>
                        <li>Single occupancy would be an additional 30% of the above cost</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>100% of the tour cost to be paid at the time of booking</li>
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
                        <li>50% refund would be given as credit to travel on future trip to Pench if cancelled on or before
                        60 days of travel</li>
                        <li>No refund if trip is cancelled on or before 59 days before the tour dates.</li>
                    </ul>
                </div>

                <div class="col-12 col-md-6">
                    <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
                    <ul className='list-group list list-style'>
                      {inclusions.map((item, index) => (
                      <li key={index} className='list-group-item'>{item}</li>
                      ))}
                    </ul>
                </div>

                <div class="col-12 col-md-6">
                    <h3 class="exc-head mb-5 mt-5">Exclusions</h3>
                    <ul className='list-group list list-style'>
                    {exclusions.map((item, index) => (
                    <li key={index} className='list-group-item'>{item}</li>
                    ))}
                    </ul>
                </div>
                
                <div class="col-12 col-md-12 text-center">
                    <h3 class="mb-5 mt-5 package-head">Contact</h3>
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
export default Package3;