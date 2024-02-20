import React from 'react'
import {useRef} from 'react'
import './bandipur.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsArrowDownSquareFill } from "react-icons/bs";
import Navbar from '../Navbar'
import Overview from '../Overview'
import Footer from '../Footer'
import Helmet from 'react-helmet'


const images = [
  "/packages/img-1-6.jpg",
  "/packages/img-1-7.jpg",
  "/packages/img-1-1.jpg",
  "/packages/img-1-2.jpg",
  "/packages/img-1-3.jpg",
  "/packages/img-1-4.jpg",
  "/packages/img-1-5.jpg"
]


const inclusions = ["Full board stay at a Jungle Lodges & resorts","Game drives","National park permit & Entry fees","English speaking guides"];
const exclusions = ["Airfare or train fare from home destination to nearest airport or railway station","Expenses of personal nature","Any still or video camera fees","GST","Any meals, services not mentioned in the Inclusions section"];


const itinerary_details =
        {
        name:'Bandipur',
        inr:'Indian Nationals - ₹7,021',
        fn:'Foreign Nationals - $125'
        }

  


const DestinationBandipur = () => {
    const sec0 = useRef();
    const sec1 = useRef();
    const sec2 = useRef();
    const sec3 = useRef();
    const sec4 = useRef();
    const sec5 = useRef();
    const sec6 = useRef();
    const sec7 = useRef();
    const sec8 = useRef();
    const sec9 = useRef();
    const sec10 = useRef();
  

    const scrollHandler = (elemRef) => {
        window.scrollTo({top:elemRef.current.offsetTop, behavior:"smooth"})
    }

    return(
    <>
    <Helmet>
      <title>Discover Bandipur National Park: Where Nature's Symphony Plays</title>
      <meta name="description" content="Embark on a wild adventure in Bandipur National Park. Witness diverse flora and fauna, thrilling safaris, and the enchanting beauty of Southern India's wildlife haven." />
    </Helmet>
    <div ref={sec0}>
    <Navbar/>
    </div>
    <div className='video-banner d-none d-md-block' ref={sec1}>
    <video autoPlay loop controls muted
      src='/destinations/bandipur.mp4'
      type='video/mp4'>
    </video>
    <div className='button-banner'>
    <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec2)} style={{color:'white'}}/>  
    </div>
    </div>

    <div className='video-banner d-sm-block d-md-none' ref={sec1}>
    <img src='/destinations/bandipur-mob.jpg' alt='Kenya' className='destination-img' />
    </div>
  
    <div className="container" ref={sec2}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
        <div className="it-container data-container mt-3">
                <h2 className='bold mb-3 package-head'>Bandipur - Jewel at the foothills of the Queen of the hills.</h2>
                <p className='dest-text'>The patch of dry deciduous forests lies enroute to the famous Ooty hills and Karnataka. The
                forest is divided by the National Highway which cuts through the dense jungle. The Bandipur forest is home
                for the tiger, leopard, wild dogs, Indian gaur, Asiatic elephants, spotted deers, Sambhar deers and other
                mammals.</p>
                <p className='dest-text'>The hillocks here provide a safe place for the big cats to thrive. The forests has many water bodies which
                provide water to its residents through out the year. During the summer months, the forest gets dry and it is
                very common to sight a big cat near a waterhole. Winter months attract a lot of migratory birds.</p>
                <p className='dest-text'>The easy accessibility of Bandipur from Bangalore, has made Bandipur a popular weekend getaway, attracting
                hordes of Nature lovers. It is one of the best nature reserves of South India and is a must visit place for any
                one who likes wilderness.</p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec3)}/> 
            </div> 
            </div>
      </div>
    </div>
    </div>

    <div className="container" ref={sec3}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <div className='it-container data-container'>
            <h2 className='bold package-head'>Getting there</h2>
            <img src='/destinations/bandipur-get.png' alt='' className='weather-img'/>      
          <div className='scroll-container'>
          <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec4)}/> 
            </div>
            </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec4}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <div className='it-container data-container'>
            <img src='/destinations/bandipur-map.png' alt='' className='weather-img'/>      
          <div className='scroll-container mt-3'>
          <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec5)}/>  
            </div>
            </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec5}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <div className='it-container data-container mt-5'>
          <h2 className='bold mb-3 package-head'>VISA formalities</h2>
          <p className='dest-text'>The vast majority of visitors from abroad require a visa for India. There are different types of visa
                available, depending on the nationality of the traveler, the length of time they plan to stay in the
                country, and the purpose of the visit. The electronic visa or e-Visa for India is available for the
                majority of nationalities. It can be obtained by completing a simple online application form. The
                India e-Visa is processed quickly and delivered to the applicant by email. The link for the e-visa is to <a href='https://indianvisaonline.gov.in/evisa' target="_blank" rel="noopener noreferrer">click</a></p>
                <p className='dest-text'>Citizens of a number of countries are not able to apply online and must obtain a visa from an
                Indian embassy instead.</p>
          <div className='scroll-container'>
          <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec6)}/> 
            </div>
            </div>
        </div>
      </div>
    </div>
    
    <div className="container" ref={sec6}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <div className='it-container data-container mt-5'>
          <h2 className='bold mb-3 package-head'>Points of interest - Bandipur</h2>
                <p className='dest-text'><b>Gopalaswami Beta or Gopalaswami hills - </b>Just 15 kms before the Bandipur national park, is this
                famous forest clad hillock. The hill is not only known for being the highest peak in the park, but for
                the mist that engulfs it for most of the year, giving it the name Himavad Gopalaswamy Betta, as
                ‘Himavad’ translates to ‘fog’ in the local language. Apart from the elephant rides here, which the
                spot is most popular for, another attraction that tourists flock to is the Gopalaswamy Temple,
                situated atop the hill.</p>
                <p className='dest-text'><b>Ooty hills - </b>35 kms from Bandipur national park, begins the Nilgiris biosphere. The Bandipur
                forests continues as Mudumalai forests into the state of Tamil Nadu. Then the road climbs to the
                Queen of hills - Ooty. Ooty was once a famous summer holiday destination of the British. Still one
                can see the old churches and bungalows once built during the British era. Lush green gardens,
                beautiful lake, pine forests and the ever pleasant weather makes Ooty a very popular holiday
                destination.</p>
                <p className='dest-text'><b>Mysore City - </b>The simple and the beautiful city of Mysore lies enroute from Bangalore to
                Bandipur. It is from here the yesteryear Kings ruled the princely state of Mysore. The Mysore
                palace is the proof of the wealthy life the Kings lead during those times. The architectural marvel
                can be visited during ones stay at Mysore. Mysore’s zoo is also very famous and very well kept.
                Mysore is famous for it's temples and the Philomena’s church. The silk sarees, sandal wood oil ,
                the wooden carvings are some of the hallmarks of Mysore. A additional night stay at Mysore on the
                way back from Bandipur would be ideal for tourists to visit this city.</p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec7)}/> 
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec7}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <div className='it-container data-container'>
            <h2 className='bold package-head'>Weather at Bandipur</h2>
            <img src='/destinations/bandipur-weather.jpg' alt='' className='weather-img'/>
            <div className='scroll-container'>
            <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec8)}/> 
            </div>        
          </div>
        </div>
      </div>
    </div> 

    <div className="container data-container it-container mb-5" ref={sec8}>
      <div className="row">
    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
      <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
        <ul className='list-group list dest-text'>
          {inclusions.map((item, index) => (
            <li key={index} className='list-group-item'>{item}</li>
          ))}
        </ul>
    </div>
    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
      <h3 class="exc-head mb-5 mt-5">Exclusions</h3>
        <ul className='list-group list dest-text'>
          {exclusions.map((item, index) => (
            <li key={index} className='list-group-item'>{item}</li>
          ))}
        </ul>
    </div>
    <div className='scroll-container mt-5 mb-5'>
      <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec9)}/>
    </div> 
      </div>
      </div>

    <div className="container" ref={sec9}>
    <div className="row">
    <div className='col-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='it-container data-container' >
          <Overview images={images} itinerary_details={itinerary_details}/>
      <div className='scroll-container mb-5'>
      <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec10)}/> 
      </div>  
      </div>
      </div>
      </div>
      </div>

      <div className='data-container mt-5' ref={sec10}>
      <Footer/>
      </div>
    </>
    )
}
export default DestinationBandipur;