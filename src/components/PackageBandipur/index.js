import {React,useState} from 'react'
import Navbar from '../Navbar'
import './p1.css'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'

const images = [
  "/packages/img-1-1.jpg",
  "/packages/img-1-2.jpg",
  "/packages/img-1-3.jpg",
  "/packages/img-1-4.jpg",
  "/packages/img-1-5.jpg",
  "/packages/img-1-6.jpg",
  "/packages/img-1-7.jpg"
]

const inclusions=["Two nights stay on shared basis at Bandipur",
      "Safaris as mentioned in the itinerary","Forest fees","Guide fees"]
  
  const exclusions=["Transportation to and from Bandipur",
      "Camera fees. This has to be settled directly by the clients before check out","Tips and gratitude","Any personal and medical expenses","Anything other than mentioned in the Inclusions section"]

const PackageBandipur = () => {
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
          <title>Explore Bandipur Tiger Reserve: 3-Day Wilderness Retreat from Ooty</title>
          <meta name="description" content="Embark on a thrilling 2-night journey to Bandipur Tiger Reserve from Ooty. Discover the untamed beauty of the foothills, with twin sharing accommodation. Book your wildlife escape now!" />
        </Helmet>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Wilderness at the foot hills of Ooty - Journey to Bandipur tiger reserve</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Lying in-between the Mysore - Ooty highway, this beautiful patch of forests is one of
            the most visited national parks in South India. It is known for its superb management and excellent
            wild animals sightings.Bandipur tiger reserve, as the names says has a very high density of Royal
            Bengal tigers. It is also home for the other top two predators , the leopards and wild dogs. Along
            with Mudumalai forest in the neighbouring state, it forms one of the largest ecosystems and is part
            of the large Nilgiris Biosphere. Bandipur, being very close to Mysore and just 5 hours from the
            buzzing city of Bangalore, attracts hordes of tourists and Nature lovers.</p>
            <p className='list-style'>We at Travel Unbounded have curated a very comfortable and a well suited journey to Bandipur,
            coming Jan during the Sankranthi holidays. Join us and explore the beauty of this wilderness.</p>
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
            <p className='list-style'>Arrive at the Bandipur resort by 12 noon. Complete your checking formalities, take a little
            rest and proceed for lunch. Lunch is served at the Gol Ghar. Post lunch head towards the first
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
            <details className='list-group-item list-style'> <summary><b>Day-3</b></summary>
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
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-8 col-lg-8 col-xl-8 mb-5">
                    <h3 class="mb-5 mt-5 package-head">Cost in INR</h3>
                    <img src='/packages/bandipur-cost.jpg' alt='' className='cost-table text-center' />
                </div>
                <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                    <h3 class="mb-3 mt-5 package-head">Payment Terms</h3>
                    <ul className='list list-style'>
                    <li>100% of the tour cost to be paid at the time of booking</li>
                    </ul>
                    <h3 class="mb-3 package-head">Note:</h3>
                    <ul className='list list-style'>
                    <li>Tariffs are per person per night on twin-sharing basis</li>
                    <li>Transfers to &amp; from our resorts are not included in the tariff.</li>
                    <li>Single occupancy charges are applicable.</li>
                    <li>Tariff for children (accompanying parents) between 5 and 12 years is 50% discount on the
                      tariff.</li>
                    <li>Tariff May be changed without prior notice.</li>
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
                        <p className='list-style'>Account No : <span className='number'> 50200012940675</span></p>
                        <p className='list-style'>IFSC : <span className='number'> HDFC0000075</span></p>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <li>50% refund would be given as credit to travel on future trip to Bandipur if cancelled on or before
                        60 days of travel</li>
                        <li>No refund if trip is cancelled on or before 59 days before the tour dates.</li>
                    </ul>
                </div>

                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
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
                <div className='text-center mt-5'>
                  <Link to='/form' ><button type='button' className='book-btn'>Book Now</button></Link>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
        </>
    )
}
export default PackageBandipur;