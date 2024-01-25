import React from 'react'
import {useRef} from 'react'
import './ranthambore.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowDownSquareFill } from "react-icons/bs";
import Overview from '../Overview'
import Navbar  from '../Navbar';
import Footer from '../Footer'
import Helmet from 'react-helmet'


const images = [
  'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699788/TU_RTR_1_of_1_kxckm5_zrg0oe.jpg',
  'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699795/TU_RTR_r6grya_davnpv.jpg',
  "https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699820/Ranthambore_Gallery_4_t7umjf_gxwdcs.jpg",
  'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699825/Ranthambore_Gallery_1_odxip0_xtvxiq.jpg',
  'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699844/Ranthambore_Gallery_3_jmheyh_gpgziq.jpg',
  'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699860/Ranthambore_Gallery_2_ckxejx_ef5xr4.jpg',
  'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699875/Ranthambore_Gallery_5_pzxvec_hfcu21.jpg',
]

const inclusions = ["Full board stay at a boutique resort at Ranthambore on twin sharing basis","Game drives on shared seats basis in a jeep","National park permit & Entry fees",];
const exclusions = ["Airfare or train fare from home destination to nearest airport or railway station","Expenses of personal nature","Any still or video camera fees","GST","Any meals, services not mentioned in the Inclusions section","Internal transfers by Air conditioned Vehicle"];


const itinerary_details =
        {
        name:'Ranthambore',
        inr:'Indian Nationals - ₹11,200',
        fn:'Foreign Nationals - $200'
        }
  
  


const DestinationRanthambore = () => {
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
            <title>Ranthambore National Park: Unleashing Nature's Majesty</title>
            <meta name="description" content="Embark on a wildlife odyssey at Ranthambore! Encounter tigers, explore ancient ruins, and revel in nature's splendor. Your adventure begins here." />
        </Helmet>
    <div ref={sec0}>
    <Navbar/>
    </div>
    <div className='video-banner d-none d-md-block' ref={sec1}>
    <video autoPlay loop controls muted
      src='https://res.cloudinary.com/dl3vc69uw/video/upload/v1704699647/RTR_corrected_lzin2x_o8o6le.mp4'
      type='video/mp4'>
    </video>
    <div className='button-banner'>
    <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec2)} style={{color:'white'}}/> 
    </div>
    </div>

    <div className='video-banner d-sm-block d-md-none' ref={sec1}>
    <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699693/Ranthambore_banner_image_sxpwm2_puadds.jpg' alt='Kenya' className='destination-img' />
    </div>
    
    <div className="container" ref={sec2}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
        <div className="it-container data-container mt-3">
                <h2 className='bold mb-3 package-head'>Ranthambore - The Land of The Royal Bengals</h2>
                <p className='dest-text'>The former hunting grounds of the Kings of Jaipur, today is one of the most prominent tiger
                reserves of the World. It is this park where the humans and animals have co existed for a very long time. The
                remains of the depleted forts, which were once used by the Kings are now ruled by the Royal Bengals. The
                accessibility of this park to major cities like Delhi and Jaipur makes this one of the most sought after
                wilderness getaways in India.</p>
                <p className='dest-text'>There is a huge variety of wild animals in Ranthambore National Park, including mammals, birds &amp; reptiles.
                Ranthambore National Park is also home to a rich variety of birds, thanks to its diverse terrain &amp; numerous
                water bodies. The main attraction are the Royal Bengal tigers and the ruined forts inside the national park.</p>
                <p className='dest-text'>The park is divided into 10 zones. Zones 1 to 5 are on one side of Sawai Modhpur town and zones 6 to 10
                border the other side of this town. From step ravines to grasslands, this park is one of the most beautiful
                parks in the World.</p>
                <p className='dest-text'>The famous, Trinetra Ganesh Temple is situated inside the Ranthambore Fort, and is famous as one of the
                oldest temples in Rajasthan. It is the only temple in the entire world which houses the entire family of Lord
                Ganesha while his statue consists of three eyes. The walk up to the temple is a must do for any visitors. One
                can see the vast forests of Ranthambore from the top of the fort.</p>
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
            <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699713/RTR_hkbq5t_bdfj9y.png' alt='' className='weather-img'/>      
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
            <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699731/10_wq6ke1_pnjm2s.png' alt='' className='weather-img'/>      
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
                India e-Visa is processed quickly and delivered to the applicant by email. The link for the e-visa is <a href ='https://indianvisaonline.gov.in/evisa' target="_blank" rel="noopener noreferrer">Click</a></p>
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
          <h2 className='bold mb-3 package-head'>Points of interest - Ranthambore</h2>
                <p className='dest-text-2'>The Ranthambore forests are so huge that it has been divided into ten zones. It actually takes more
                than a ten day stay to explore the whole jungle. If time permits, we strongly suggest for a long
                haul holiday. The forests has got a lot of remains of the old forts built centuries back by the kings.
                The sight of the forests itself is surreal. With the Tiger this forests looks magical. The rocky
                outcrops with grass lands and wetlands makes this terrain completely different from the other
                jungles of India. Summers do get very hot but it is the best time for tiger sightings. Winters turn this
                place into a fairy land. There are no elephants but a lot of deers, black bears, leopards and birds
                who have made this place their home. Tigers of course are the main attraction.</p>
                <p className='dest-text-2'>One has to book the safari 120 days prior to the date of travel ( for core zones especially ). Buffer
                zones can be done on current booking basis but one has to go the counter and book it. Safaris are
                also booked by the resort where you would be staying or your tour operators&#39; can assist in your
                safari bookings.</p>
                <p className='dest-text-2'><b>Sawai Modhupur market</b>  - The local market can be visited after the safaris to purchase
                souvenirs, clothes, paintings and printed scarfs. Most of the products revolve around the tiger. One
                can also taste some local food ( definitely spicy for foreign nationals ) at select outlets, though it is
                suggested to have food at your selected resorts.</p>
                <p className='dest-text-2'><b>Jaipur - the city of Royals</b> - is a must visit place for its richnesss and traditions. The palaces here
                speak the life of the yesteryear kings and their lifestyle. The city has got numerous palaces to visit.
                And one can indulge in some very tasty local Rajasthani food in the multiple restaurants available
                in this place. It is strongly suggested to stay over for a couple of days in Jaipur either in the
                begining or end of your tour to Ranthambore.</p>
                <div className='scroll-container mb-5'>
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
            <h2 className='bold package-head'>Weather at Ranthambore</h2>
            <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704699751/Ranthambore_gwtjgi_ubj3xn.jpg' alt='' className='weather-img'/>
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
      <div className='scroll-container mb-3'>
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
export default DestinationRanthambore;