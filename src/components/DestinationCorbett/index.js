import React from 'react'
import {useRef} from 'react'
import './corbett.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsArrowDownSquareFill } from "react-icons/bs";
import Overview from '../Overview'
import Navbar from '../Navbar'
import Footer from '../Footer'


const images = [
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696500762/Corbett_Gallery_1_nnsrcv.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696500781/Corbett_Gallery_2_srae9c.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696500788/Corbett_Gallery_5_ctyuzg.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696500789/Corbett_Gallery_4_xyjlfz.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696500791/Corbett_Gallery_3_gwiwfl.jpg',
]

const inclusions = ["Full board stay at a boutique resort at either the forest rest house or at a resort at Ramnagar on twin sharing basis","Game drives","Internal transfers by Air conditioned Vehicle","National park permit & Entry fees"];
const exclusions = ["Airfare or train fare from home destination to nearest airport or railway station","Expenses of personal nature","Any still or video camera fees","GST","Any meals, services not mentioned in the Inclusion section"];

const itinerary_details =
        {
        name:'Corbett',
        inr:'Indian Nationals - ₹15,000',
        fn:'Foreign Nationals - $350'
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
    <div ref={sec0}>
    <Navbar/>
    </div>
    <div className='video-banner d-md-block' ref={sec1}>
    <video autoPlay loop controls muted
      src='https://res.cloudinary.com/dr0vyis3o/video/upload/v1696835070/CRT_Final_2_a10w02_czbxgu.mp4'
      type='video/mp4'>
    </video>
    <div className='button-banner'>
    <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec2)} style={{color:'white'}}/> 
    </div>
    </div>
    
    <div className="container" ref={sec2}>
      <div className="row">
        <div className="col-12 data-container mt-3">
                <h2 className='bold mb-3 package-head'>Corbett - The Land of the roar and trumpet</h2>
                <p className='dest-text'>Away from the crowd packed like sardines, nestling in the foot hills of the mighty Himalayas,
                lies this beautiful peace of earth called Corbett. River Ramganga quietly flows cutting this valley into two.
                The upper regions boast of thick vegetation while the lower grass lands sway gently with the cool northerly
                winds.</p>
                <p className='dest-text'>There are more than 50 species of mammals and close to 400 species of birds on this park. The park has
                three major zones. Dhikala is the most favourite zone. One has to stay inside the forest rest house to explore
                this part of the park. Dhikala is known for its vast grass lands, water body and sal forests.</p>
                <p className='dest-text'>Guests who want to visit the other zones have an option of staying in one of the resorts situated at Ramnagar
                or can also opt to stay inside the forest rest houses. The other two famous zones are Bijrani and Jhirna.
                Dotted with thick shrubs, river beds, and rocky mountains, Bijrani is a very interesting zone. It boasts of a
                high population of animals and birds.</p>
                <p className='dest-text'>Jhirna as a zone is known for its high density of elephant population. Though the big cat sighting here is very
                tricky, it has been my favourite zone. The tigers here are huge!! And one sighting here will be edged till the
                end. This zone also boasts a variety of bird life. The serene landscape of this zone keeps everyone on their
                seat during the jungle drives.</p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec3)}/> 
            </div> 
            </div>
      </div>
    </div>

    <div className="container" ref={sec3}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
            <h2 className='bold mb-3 package-head'>Getting there</h2>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698994446/7_apfn5m.png' alt='' className='weather-img'/>      
          <div className='scroll-container'>
          <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec4)}/> 
            </div>
            </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec4}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698995433/8_wpjkp7.png' alt='' className='weather-img'/>      
          <div className='scroll-container mt-3'>
        <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec5)}/>       
            </div>
            </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec5}>
      <div className="row">
        <div className="col-12">
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
        <div className="col-12">
          <div className='it-container data-container mt-5'>
          <h2 className='bold mb-3 package-head'>Points of interest - Corbett</h2>
                <p className='dest-text'><b>1.Corbett Tiger Reserve</b> - CTR is dived into many zones and one needs to book and get different
                permits for different zones. The landscapes varies from grass lands to rock out crops and mighty
                rivers to small streams. Dhikala zone has a lovely guests house build inside the core zone with
                basic facilities. This is a place where one gets to experience the Indian wildlife. Bijrani and Jhirna
                are other zones where one can stay at the feeder town called Ramanagar and do the jungle drives.</p>
                <p className='dest-text'>Safaris are also booked by the resort where you would be staying or your tour operator&#39;s can
                assist in your safari bookings.</p>
                <p className='dest-text'>Online safari permits are also available on this link</p>
                <p className='dest-text'><b>2.Corbett Museum </b>- Guests staying at Ramnagar should visit the home where the legend lived. It
                is just a 35 minutes. It is in a place called Kaladhungi. One can live the life what he lived and see
                what he did for the village. The house has been maintained very well and still reverberates with his
                memories. The visit to this place is really a spiritual experience.</p>
                <p className='dest-text'><b>3.Ramnagar Market </b>- While you stay at the Ramnagar town, you should visit the market. But be
                ready to face the traffic, narrow roads and the blaring horns. Buzzing with activities , this market
                serves every one around this place. This is the place to buy everything from vegetables, fruits
                ,provisions to clothes. Enjoy your camp fire at the resort with the night jars calls after such a noisy
                visit.</p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec7)}/> 
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec7}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
            <h2 className='bold package-head'>Weather at Corbett</h2>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1696502426/Corbett_fwjlc2.jpg' alt='' className='weather-img'/>
            <div className='scroll-container'>
            <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec8)}/> 
            </div>        
          </div>
        </div>
      </div>
    </div>  

    <div className="container data-container it-container mb-5" ref={sec8}>
      <div className="row">
    <div class="col-12 col-md-6">
      <h3 class="inc-head mb-5 mt-5">Inclusions</h3>
        <ul className='list-group list dest-text'>
          {inclusions.map((item, index) => (
            <li key={index} className='list-group-item'>{item}</li>
          ))}
        </ul>
    </div>
    <div class="col-12 col-md-6">
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
    <div className='col-12'>
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