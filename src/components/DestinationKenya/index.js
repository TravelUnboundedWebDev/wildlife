import React from 'react'
import {useRef} from 'react'
import './kenya.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsArrowDownSquareFill } from "react-icons/bs";
import Navbar from '../Navbar'
import Overview from '../Overview'
import Footer from '../Footer'

const images = [
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696499532/Kenya_Gallery_1_v91xy4.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696499536/Kenya_Gallery_2_ovipcd.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696499559/Kenya_Gallery_3_nswbdn.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696499588/Kenya_Gallery_5_l1ghqc.jpg',
  'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696499592/Kenya_Gallery_4_u7kxud.jpg',
]

const itinerary_details =
{
  name:'Kenya',
  inr:'Foriegn Nationals - $350'
}
  
const inclusions = ["Full board stay at a boutique resort","Game drives in 4*4 land cruisers","Internal transfers","National park permit & Entry fees","English speaking guides"];
const exclusions = ["Airfare or train fare from home destination to nearest airport or railway station","Expenses of personal nature","Any still or video camera fees","GST","Any meals, services not mentioned in the Inclusion section"]; 


const DestinationKenya = () => {
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
    <div className='video-banner d-md-block' ref={sec1}>
    <video autoPlay loop controls muted
      src='https://res.cloudinary.com/dr0vyis3o/video/upload/v1696834698/KE_Final_2_qrsgmo_gnqfls.mp4'
      type='video/mp4'>
    </video>
    <div className='button-banner'>
        <BsArrowDownSquareFill size={30} onClick={()=>scrollHandler(sec2)} style={{color:'white'}}/>
    </div>
    </div>
    
    <div className="container" ref={sec2}>
      <div className="row">
        <div className="col-12 data-container mt-3">
                <h2 className='bold mb-3 blog-head'>Kenya - The Mecca Of Wildlife</h2>
                <p className='dest-text'>It is one of Africa&#39;s most renowned and accessible safari destinations. It attracts hordes of
                tourists from across the World. The national parks of Kenya offers an exceptional variety of wildlife. It is
                home for the ‘Big 5’.</p>
                <p className='dest-text'>The most famous of park of Kenya is Maasai Mara. The greatest wildlife spectacle happens every year here.
                Millions of ungulates cross over to Maasai Mara from Tanzania, following the rains and greener pastures to
                feed. This season is between mid July to early October and is known as The Great Migration season. Except
                for the months of April and May when it rains, one can visit Kenya anytime of the year.</p>
                <p className='dest-text'>The second famous park of Kenya is Amboseli which is home for some large tuskers. Apart from the Big 5,
                one can sight the fastest land animal the cheetahs here. To see a cheetah in full speed trying to hunt its prey is
                an unforgettable experience in ones life.</p>
                <p className='dest-text'>The bird life in Kenya is spectacular. It is home for more than 1,135 bird species. The World’s largest bird ,
                the ostrich and the smallest bird, the sunbird have made Kenya as their home.</p>
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
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698994065/1_qcvj5e.png' alt='' className='weather-img'/>      
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
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1698995372/2_hzqhya.png' alt='' className='weather-img'/>      
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
                <p className='dest-text'>E-VISA is the available options for any person travelling to Kenya. Some countries are exempted
                from procuring a VISA. The eligibility list is on <a href="http://evisa.go.ke/eligibility.html" target='_blank' rel="noopener noreferrer">Check Now</a></p>
                <p className='dest-text'>To apply for an e-visa link is <a href="http://evisa.go.ke/evisa.html" target='_blank' rel="noopener noreferrer">apply now</a></p>
                <p className='dest-text'>e-visa is must to travel to kenya.</p>
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
                <p className='dest-text'>No where else in the World can one find such beautiful and popular wildlife parks. Kenya parks are
                known for their very high density of animals and The Great migration. Both the fresh water lakes
                and salt water lakes are home for large species of birds. There have been instances where one
                has counted 100 bird species on a single day. Kenya is truly The Most favourite wildlife destination
                of the World. Let&#39;s know more about some of the very beautiful and most visited parks of Kenya.</p>
                <p className='dest-text'><b>1.Maasai Mara National Park </b>- meaning the &#39;dotted&#39;, is by far the most popular wildlife destination of
                the World. The landscape consists of vast savannahs dotted with acacia trees. It is home for both
                the Big 5 and the Small 5!! During the months of June to October, the greatest wildlife spectacle ,
                The Great Migration takes place. Millions of wildebeests along with Zebras and antelopes try and
                cross the mighty Mara river to get to greener pastures. This event is witnessed by millions of
                tourists and just can&#39;t be missed in ones life time. Expect for the month of April where navigating
                inside the park on slushy roads are difficult, Mara is best on every other day. It is not just a
                gateway but truly heaven on Earth.</p>
                <p className='dest-text'><b>2. Amboseli National Park </b>- Lying beneath the mighty Kilimanjaro, this volcanic vast landscape is
                home for some of the biggest tuskers still roaming on our Earth. Their tusks, some of them which
                actually touch the ground is a feast to ones eyes. The salt lakes here turn pink with the flamingoes
                arriving in great numbers. The grass which grow in the swamps are a juicy delight to the
                pachyderms.</p>
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
          <p className='dest-text'><b>3.Samburu National Reserve </b>- It is one of the lesser know reserves of Kenya but teems with
                wildlife and is a must visit place. Situated alongside the Ewaso Nyiro River, it is rich in wildlife.One
                can sight the rare northern specialist species such as the Grevy&#39;s zebra, Somali ostrich, reticulated
                giraffe, gerenuk and the beisa oryx in this reserve. The main attraction in this park are the packs of
                painted wild dogs who are considered to be very clever hunters.</p>
                <p className='dest-text'><b>4.Lake Nakuru National park </b>- It was very popular as a haven for birds, and in 1968 it was
                upgraded to a National park status. This park has the largest population of white rhinos. The Lake
                covers one third of the park and is a major food source for the flamingos which arrive in thousands
                here.</p>
                <p className='dest-text'><b>5.Nairobi National Park </b>- This is the only protected park which is unique of being so close to a city.
                After the reintroduction of the most endangered black rhinos, this parks now is a place where one
                can surely sight a black rhino in its original habitat. This park is actually is located right on the door
                step of the capitol city of Nairobi. It is a must visit park for every traveller to Nairobi.</p>
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
          <div className='it-container data-container mt-5'>
          <h2 className='bold mb-3 package-head'>Points of interest - Nairobi</h2>
                <p className='dest-text'>There are many places in Nairobi that one has to visit and cannot afford to go back home without
                visiting. Every place has its own interesting stories and history attached to it.</p>
                <p className='dest-text'><b>Giraffe Centre</b> - located in Langata, just outside Nairobi, Giraffe center was set up as a breeding
                center for the endangered Rothschild giraffe, only found in the grasslands of East Africa. There is
                an immense information about the giraffes available here at this Centre. It is frequently visited by
                the school kids. One is allowed to hand feed the giraffes but with a lot of caution, and one can see
                them at very close quarters.</p>
                <p className='dest-text'><b>David Sheldrik Elephant Orphanage </b>- Daphne Sheldrick, the widow of one of Kenya&#39;s best known
                Game Wardens David Sheldrick set up this orphanage to save the elephant and rhino calves from
                all over Kenya. The daily show of the guardians giving the calves a bath, the calves then enjoying
                a mud bath and after getting fed with milk bottles is truly heart warming.</p>
                <p className='dest-text'><b>Food and Eateries </b>- Nairobi is a very fast growing city of the World. There are off course traffic
                voes , but one can enjoy food according to their taste buds from a variety of resturants.</p>
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
            <h2 className='bold package-head'>Weather at Kenya</h2>
            <img src='https://res.cloudinary.com/dr0vyis3o/image/upload/v1696502595/Kenya_zlwgdt.jpg' alt='' className='weather-img'/>
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
          <Overview images={images} itinerary_details={itinerary_details} inclusions={inclusions} exclusions={exclusions}/>
      <div className='scroll-container mb-5'>
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
export default DestinationKenya;