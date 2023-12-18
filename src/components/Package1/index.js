import {React,useState} from 'react'
import Navbar from '../Navbar'
import './p1.css'
import Footer from '../Footer'
import {BsArrowLeftSquareFill} from "react-icons/bs";

const images = [
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701152999/Tiger_Bandipur_1_k4efwb.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701152989/Bush_Chat_1_yrj7bm.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701152962/Leopard_1_mswwr1.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153323/Bandipur_Tiger_reflection_h0mrjp.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153301/CSE_aueufj.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701152970/TU_Bandi_lqlz99.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701152969/TU_Kids_1_of_1_tmplnb.jpg"
]

const inclusions=["Two nights stay on shared basis at Bandipur",
      "Safaris as mentioned in the itinerary","Forest fees","Guide fees"]
  
  const exclusions=["Transportation to and from Bandipur",
      "Camera fees. This has to be settled directly by the clients before check out","Tips and gratitude","Any personal and medical expenses","Anything other than mentioned in the Inclusions section"]

const Package1 = () => {
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
            <h1 className='mb-5 mt-5 blog-head'>Wilderness at the foot hills of Ooty - journey to Bandipur tiger reserve</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Lying in-between the Mysore - Ooty highway, this beautiful patch of forests is one of
            the most visited national parks in South India. It is known for its superb management and excellent
            wild animals sightings.Bandipur tiger reserve, as the names says has a very high density of Royal
            Bengal tigers. It is also home for the other top two predators , the leopards and wild dogs. Along
            with Mudumalai forest in th neighbouring state, it forms one of the largest eco systems and is part
            of the large Nigiri bio sphere. Bandipur, being very close to Mysore and just 5 hours from the
            buzzing city of Bangalore, attracts hordes of tourists and Nature lovers.</p>
            <p className='list-style'>We at Travel Unbounded have curated a very comfortable and a well suited journey to Bandipur,
            coming Jan during the Sankranthi holidays. Join us and explore the beauty of this wilderness.</p>
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
            <p className='list-style'>Arrive at the Bandipur resort by 12 noon. Complete your checking formalities, take a little
            rest and proceed for lunch. Lunch is served at the Gol Ghar. Post lunch head to wards the first
            safari inside the jungle. Safaris would be by jeeps and our very well trained Naturalists and guides
            would drive you through the jungle and share a lot of interesting stories and share their knowledge
            about the flora and fauna of the jungle. Return to the resort for a hot cup of beverage. Freshen up
            and enjoy your evening at the camp fire. Dinner would be served post 8PM. Retire for the day after
            dinner. ( L D )</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style'>The friendly staff of the resort would give you a wake up call early in the morning. Freshen
            up and proceed to the designated area for your favourite cup of hot tea/coffee. Board your vehicles
            and head inside the jungle for a exciting morning safari. Winters are mystical here. The fog gets
            slowly cleared as the Sun comes out lazily through the clouds. The chirping winter migratory birds
            are busy hunting their morning food. On a lucky day you would get to sight the majestic leopards
            basking on the tree tops or on the rocks. This is quite a common sight during winters.<br/>

            Return to the resort for a nice breakfast and much needed rest. Post lunch enjoy one more
            afternoon safari inside the jungle. Dinner and stay at the resort. ( B L D )</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3</b></summary>
            <hr/>
             <p className='list-style'>Wake up early, have a hot cup of tea/coffee and proceed for an early morning safari inside
            the Bandipur jungle. Bandipur is home for gaur (a type of bull), sambhar, chital, mouse deer, four-
            horned antelope, wild dogs, wild boar, jackal, sloth bear, panther, malabar squirrel, porcupines and
            the black-knapped hare. Birds like jungle fowl and green pigeon are also found here. A peacock
            dancing an trying to attract his mate on a water morning is truly a feast for ones eyes. Return to the
            resort with loads of memories. Have a good breakfast and check out. ( B )</p>
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
                        <li>Cost per person - Ex Bandipur - INR 22,666/-</li>
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
                        <p className='list-style'>Account No : <span className='number'> 50200012940675</span></p>
                        <p className='list-style'>IFSC : <span className='number'> HDFC0000075</span></p>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <li>50% refund would be given as credit to travel on future trip to Bandipur if cancelled on or before
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
export default Package1;