import React from 'react'
import {useRef} from 'react'
import './bandhavgarh.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsArrowDownSquareFill } from "react-icons/bs";
import Overview from '../Overview'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Helmet from 'react-helmet'


const images = [
    'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704834/TU_Kanha_1_of_1_xavkxj_bdhmfs.jpg',
    'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704857/BNDVG_Lupin_u28frq_ztorqx.jpg',
    'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704875/Bandhavgarh_Gallery_1_gpytdv_fxv3oa.jpg',
    'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704919/Bandhavgarh_Gallery_2_fuz0di_x3lpxd.jpg',
    'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704937/Bandhavgarh_Gallery_3_dnpo1d_xnmogy.jpg',
    'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704960/Bandhavgarh_Gallery_4_fgvmgs_pbw6zs.jpg',
    'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704967/Bandhavgarh_Gallery_5_i4xnjt_bqis4b.jpg',
]


const itinerary_details =
{
  name:'Bandhavgarh',
  inr:'Indian Nationals - ₹6,500',
  fn:'Foreign Nationals - $125'
}
  
const inclusions = ["Full board stay at a boutique resort at Bandhavgarh on twin sharing basis","Game drives","National park permit & Entry fees"];
const exclusions = ["Airfare or train fare from home destination to nearest airport or railway station","Expenses of personal nature","Any still or video camera fees","GST","Any meals, services not mentioned in the Inclusions section","Internal transfers by Air conditioned Vehicle"];
        


const DestinationBandhavgarh = () => {
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
      <title>Bandhavgarh National Park: Wildlife Wonders Await</title>
      <meta name="description" content="Experience the thrill of Bandhavgarh's rich biodiversity. Encounter majestic tigers, explore pristine landscapes, and embark on an unforgettable wildlife journey." />
    </Helmet>
    <div ref={sec0}>
    <Navbar/>
    </div>
    <div className='video-banner d-none d-md-block' ref={sec1}>
    <video autoPlay loop controls muted
      src='https://res.cloudinary.com/dl3vc69uw/video/upload/v1704704611/Bandhavgarh_oaxarn_wibx44.mp4'
      type='video/mp4'>
    </video>
    <div className='button-banner'>
    <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec2)} style={{color:'white'}}/> 
    </div>
    </div>

    <div className='video-banner d-sm-block d-md-none' ref={sec1}>
    <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704651/Bandhavgarh_banner_image_weibkp_kjql9p.jpg' alt='bandhavgarh' className='destination-img' />
    </div>
    
    <div className="container" ref={sec2}>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 col-xl-12">
          <div className='it-container data-container mt-5'>
                <h2 className='bold mb-3 package-head'>Bandhavgarh - The Tiger Capital of the World</h2>
                <p className='dest-text'>This park is roundly known as the &quot;Tiger Capital of the World”. This is because of its high
                density of tiger population. Sighting here is high and regular when compared to any other Tiger reserve in
                India.</p>
                <p className='dest-text'>The word Bandhavgarh means, ‘ Brother’s Fort’. It is believed that Lord Rama presented a fort to his
                younger brother Lakshman. The remains of this fort is still there in this dense jungle. People from
                neighbouring villages climb up to this fort to pay their respects to the idols inside the fort.</p>
                <p className='dest-text'>Bandhavgarh has three core zones and two buffer zones. All the zones have their share of tigers.
                Bandhavgarh has been home for the famous tigers called Charger &amp; Sita. Their bloodline has been passed
                over the generations successfully.</p>
                <p className='dest-text'>Bandhavgarh being in Central India, experiences extreme climates. The Summers get very hot and the
                winters are very cold. But this does not stop thousands of visitors who visit this park every season to sight
                the Phantom of the forest - the tiger.</p>
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
            <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704688/BTR_owmwkz_mzri07.png' alt='' className='weather-img'/>      
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
            <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704715/6_awcpfh_kqxo7l.png' alt='' className='weather-img'/>      
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
          <h2 className='bold mb-3 package-head'>Points of interest</h2>
                <p className='dest-text'>The safari in the Bandhavgarh forests is the main attraction here. The forest is divided into three
                zones and one has to book the safari 120 days prior to the date of travel ( for core zones especially
                ). Buffer zones can be done on current booking basis but one has to go the counter and book it.
                Safaris are also booked by the resort where you would be staying or your tour operators&#39; can
                assist in your safari bookings.</p>
                <p className='dest-text'>The local market can be visited after the safaris to purchase souvenirs, clothes, paintings and
                printed scarfs. Most of the products revolve around the tiger. One can also taste some local food (
                definitely spicy for foreign nationals ) at select outlets, though it is suggested to have food at your
                selected resorts.</p>
                <p className='dest-text'>If one extends a day stay at Jabalpur, they can visit the Marble Rocks. Marble Rocks at Bhedaghat
                is located at Jabalpur is an amazing place. This is a must visit place when you are at Jabalpur.
                This is a natural out crop of limestones on both the banks of the roaring Narmada river. We
                strongly suggest to take a private ferry to boat deeper in Bhedaghat. The patterns on these rocks
                look like a bird at some places, looks like Lord Shiva in some places and in some places looks like
                a figure of a Sadhu.</p>
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
            <h2 className='bold package-head'>Weather at Bandhavgarh</h2>
            <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704704746/Bandhavgarh_qqnoqz_jiueoh.jpg' alt='' className='weather-img'/>
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
export default DestinationBandhavgarh;