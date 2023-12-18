import React from 'react'
import {useRef} from 'react'
import './tanzania.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsArrowDownSquareFill } from "react-icons/bs";
import Overview from '../Overview'
import Navbar from '../Navbar';
import Footer from '../Footer'


const images = [
    'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696501785/Serengeti_Gallery_1_tsllq0.jpg',
    'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696501818/Serengeti_Gallery_2_x8k0ws.jpg',
    'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696501823/Serengeti_Gallery_5_tfwqnp.jpg',
    'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696501823/Serengeti_Gallery_4_hxckfx.jpg',
    'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696501838/Serengeti_Gallery_3_ll0y1m.jpg',
];

const inclusions = ["Full board stay at a boutique resort","Game drives in 4*4 land cruisers","Internal transfers","National park permit & Entry fees","English speaking guides"];
const exclusions = ["Airfare or train fare from home destination to nearest airport or railway station","Expenses of personal nature","Any still or video camera fees","GST","Any meals, services not mentioned in the Inclusion section"];


const itinerary_details =
        {
        name:'Tanzania',
        inr:'Foreign Nationals - $550'
        }
  
  


const DestinationTanzania = () => {
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
    const sec11 = useRef();
    const sec12 = useRef();

    const scrollHandler = (elemRef) => {
        window.scrollTo({top:elemRef.current.offsetTop, behavior:"smooth"})
    }
    
    return(
    <>
    <div ref={sec0}>
    <Navbar/>
    </div>
    <div className='video-banner  d-md-block' ref={sec1}>
    <video autoPlay loop controls muted
      src='https://res.cloudinary.com/dr0vyis3o/video/upload/v1696836162/TZ_Final_2_mmdtrs_egpghq.mp4'
      type='video/mp4'>
    </video>
    <div className='button-banner'>
    <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec2)} style={{color:'white'}}/> 
    </div>
    </div>
    
    <div className="container" ref={sec2}>
      <div className="row">
        <div className="col-12 data-container mt-3">
                <h2 className='bold mb-3 package-head'>Tanzania - Cradle of Mother Nature</h2>
                <p className='dest-text'>Tanzania is one of the most diverse countries when it comes to wilderness. Its flora is as diverse
                as its wildlife. The landscape of Tanzania is so varied. It consists of mountains, moist woodlands, open
                plains, savannahs &amp; wooded hills.</p>
                <p className='dest-text'>Tanzania along with Kenya forms the largest eco system on Earth. The country is home for more than 20%
                of the animal population of Africa. It is home for more than four million wild animals. It is home to the
                magnificent and world-famous wildebeest migration.</p>
                <p className='dest-text'>During the months of Feb and March, more than a million wildebeests spend more than three weeks at the
                Ndtutu plains mating and giving birth. More than 8000 calves are born every day. This is one of the World’s
                biggest wildlife spectacle and is known as the ‘calving season’.</p>
                <p className='dest-text'>The critically endangered East African black rhinos of Ngorongoro and Mkomazi, giant elephant tuskers of
                Tarangire, and abundant flamingos that visit Lake Manyara seasonally round out a wildlife experience in
                Tanzania unlike any other.</p>
                <p className='dest-text'>Tanzania is one of the most sought out wilderness destination on Earth. Millions of tourists across the World
                visit this place every year.</p>
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
            <h2 className='bold package-head'>Getting there</h2>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698994257/3_ijrmhk.png' alt='' className='weather-img'/>      
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
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698995413/4_hff5af.png' alt='' className='weather-img'/>      
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
          <h2 className='bold mb-3 package-head'>VISA formalities(Foreign National's)</h2>
                <p className='dest-text'>Visa is issued for a single entry to a visitor for a period not exceeding three months for the purpose
                of holidays, leisure, health treatment or any other activity legally recognised by the Law.</p>
                <p className='dest-text'>For foreign citizens who wish to visit the United Republic of Tanzania, click the link below to apply
                for a new visa. The link is to <a href='https://eservices.immigration.go.tz/visa/start' target="_blank" rel="noopener noreferrer">apply</a></p>
                <p className='dest-text'>There are countries which are not required to apply for a VISA, kindly <a href='https://www.immigration.go.tz/index.php/en/services/visa-information' target="_blank" rel="noopener noreferrer">check</a> for details.</p>
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
          <h2 className='bold mb-3 package-head'>National Parks</h2>
                <p className='dest-text'>Tanzania is unparalleled for its natural beauty. With towering hills, vast landscapes, wooded forests
                and rain forests are not uncommon to be experienced within the same area. Its animal life is
                second to none. This land is truly a feat for the senses.</p>
                <p className='dest-text'><b>1.Serengeti </b> - From the language &#39;Ma&#39; to English , it actually means &#39;The Land Of The Endless
                Plains&#39;. The first sight of this vast wilderness would be edged in ones memory till the end. It is
                among the top two ecosystem in the World which has to be visited atleast once in a life. The rocky
                outcrops which make ideal for the Lions to climb and view the endless plains, the rivers which cut
                across these plains, the woodlands which interrupt the grass lands makes this park a Holy Grail for
                wildlife viewing.</p>
                <p className='dest-text'><b>2. Ngorongoro Conservation Area Park </b> - This highly visited African attraction is the World&#39;s largest
                inactive and unfilled volcano caldera. It dates two million years back when a volcano erupted and
                collapsed on itself. The crater itself is about 610 metres deep and 260 kilometres squared. It is one
                of the best places to see the Black rhino and the Black Maned lions. It is home to more than
                30,000 animals, ranging from leopards, lions, cheetahs, hyenas, wildebeests, buffalo , impalas
                and antelopes. This list never stops. It is also home for multitude of birds. This is one of the most
                beautiful places on Earth and is a must visit for any Nature lovers.</p>
                <p className='dest-text'><b>3.Tarangeri National Park </b> - It is famous for its yearly elephant migration. Around 3000 elephants
                migrate across this land every year. This is just nor about that. Tarangeri offers much more than
                that. Any one who visits this park fees that they are a part of a fairy tale. The landscape dotted with
                the huge baobab trees and the termite mounds makes this place look surreal. The mostly
                endangered Ashy Starling, greater kudu, fringe eared Oryx are fun only at this park. A visit to
                Tanzania without Tarangeri is incomplete.</p>
                <div className='scroll-container mb-5'>
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
                    <h3 className='bold mb-3 package-head'>Other Parks</h3>
                <p className='dest-text'><b>1.Gombe Stream National Park</b> - This park is one of the best places on earth for up-close
                encounters with our closest relative, the Chimps. The park soar to popularity and became very
                famous when Jane Goodall took up residence here during her Chimpanzee research in the 1960&#39;s.</p>
                <p className='dest-text'><b>2.Mikumi National Park</b>  - The landscape is scattered with the famous baobab trees, black
                hardwood trees, and grassy plains. It is known as the second Serengeti. This park is home for
                lions, giraffes, zebra, wildebeests, buffalo, leopards and impalas. The landscape also supports a
                lot of bird species and several primate species including the yellow baboon.</p>
                <p className='dest-text'><b>3.Udzungwa Mountains National Park </b>Udzungwa Mountains National Park - The incredible flora and fauna makes this park truly
                gorgeous. The towering water falls and the rain forested islands is home for an incredible
                biodiversity including 4 epidemic primate species, one of which was only discovered in the 1970s.</p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec8)}/>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec8}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
          <h2 className='bold mb-3 package-head'>Points of interest - Dar es Salaam</h2>
                <p className='dest-text'>Known for its seafood, beaches and islands, this place is one of the most beautiful places on
                Earth. It brims with life and attracts millions of travellers from across the Globe. These are few of
                the places one can visit during their stay at Dar es Salaam.</p>
                <p className='dest-text'><b>1.Mbudya Island</b> - it is a perfect getaway for people who want to skip the bustling city life. The
                mouthwatering sea food delicacies, crystal clear waters, beautiful stretched of beaches makes it
                the most ideal spot to relax. One can take a short boat ride from Dar es Salaam to this place and
                indulge i activities like snorkelling.</p>
                <p className='dest-text'><b>2.St Joseph&#39;s Cathedral</b> - It is home to the Archbishop of Dar es Salaam. If you are there on a
                Sunday, try and stop over for the English mass at 8.30AM. The architecture of this Gothic-style
                Roman Catholic church is amazing.</p>
                <p className='dest-text'><b>3.Kivikoni Fish Market</b> - If one wants to experience the authentic Dar es Salaam, this is the place
                to visit. The stench might not be for the faint hearted, but one gets excellent opportunities to make
                brilliant pictures of the fishermen unloading their wares along the docks. The women folk gather
                waiting for the men to return to carry the catch to the town to sell.</p>
                <p className='dest-text'><b>4.National Museum of Dar es Salaam</b>  - The museum might not be setup in the most entertaining
                way, but if you are willing to know about the the history and culture of Tanzania, you should visit
                this place. The highlight being the fully functional wooden bicycles - everything from frame to the
                wheels have been made our of wood.</p>
                <p className='dest-text'><b>5.Co co beach</b> - Known as the weekender&#39;s paradise, this stretch of beach located on the
                Msasani Peninsula of Dar Es Salaam. It is filled with Tanzanians and Asians during the weekends.
                The live food counters and live music here makes one to shake the legs. </p>
                <div className='scroll-container'>
                <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec9)}/>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container" ref={sec9}>
      <div className="row">
        <div className="col-12">
          <div className='it-container data-container'>
            <h2 className='bold package-head'>Weather at Tanzania</h2>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1696502351/Tanzania_pghqek.jpg' alt='' className='weather-img'/>
            <div className='scroll-container'>
            <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec10)}/>
            </div>        
          </div>
        </div>
      </div>
    </div>  

    <div className="container data-container it-container mb-5" ref={sec10}>
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
      <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec11)}/>
    </div> 
      </div>
      </div>

    <div className="container" ref={sec11}>
      <div className="row">
    <div className='col-12'>
          <div className='it-container data-container' >
          <Overview images={images} itinerary_details={itinerary_details}/>
      <div className='scroll-container mb-3'>
      <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec12)}/>
      </div>  
      </div>
      </div>
      </div>
      </div>
        
      <div className='data-container mt-5' ref={sec12}>
      <Footer/>
      </div>
    </>
    )
}
export default DestinationTanzania;