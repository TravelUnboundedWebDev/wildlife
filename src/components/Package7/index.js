import {React,useState} from 'react'
import Navbar from '../Navbar'
import {BsArrowLeftSquareFill} from "react-icons/bs";
import Footer from '../Footer'
import './index.css'

const images = [
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406334/Brothers_jbcvro.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406312/Great_Plains_of_Mara_my8y5r.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406352/Giraffe_silhoutte_nmlmsa.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406295/Chase_muvjk3.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406794/pexels-pok-rie-Mombasa_1_wlbijt.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406795/imsogabriel-Mombasa_vzoncv.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406913/Mombasa_sea_1_jcizhv.jpg",
  "https://res.cloudinary.com/dr0vyis3o/image/upload/v1701406958/Mombasa_1_1_v382j9.jpg"

]

const inclusions=["Meals & Accommodation with taxes at the Safari Lodges on full board.",
  "Accommodation in Nairobi on bed and breakfast",
  "Transport in NON-AC Landcruiser as per quote on private basis with pop up roof for easy game viewing. At Finch Hatton, game drive will be in the camps vehicle.",
  "Services of our Certified Driver Guide.",
  "Drinking water in our vehicle while on Safari (limited to max 1 litre per person per day)",
  "Park Entrance Fees as per current rates",
  "Game drives and activities as per itinerary.",
  "Train from Voi to Mombasa – 1st Class (For Option 1)",
  "Accommodation on All Inclusive basis at Voyager Beach Resort",
  "Accommodation on Half Board basis at Sands at Chale",
  "Return transfers in Mombasa and Diani."
  ]
  
  const exclusions=[ "Mombasa or Ukunda to JKIA Flights (Quoted separately).",
    "International airfare inclusive of related taxes",
    "Visa entry fees",
    "Maasai Village Visit (US $ 25)",
    "Balloon Safari ($ 450)",
    "Flying Doctor’s evacuation fee temporary membership ($ 30 for KE and $35 for TZ)",
    "All Optional Activities extras not stated including entry fees at Nairobi",
    "Lunch and dinner in Nairobi",
    "Drinks and Beverages consumed with lunch or dinner at the lodges",
    "Expenses of personal nature such as telecommunications, tips / gratuities, cigarettes, ETC",
    "Laundry services not unless otherwise mentioned",
    "Travel, baggage and medical insurance. (Highly recommended)",
    "Any other item/s not specified above.",
    "Changes or deviation from the itinerary."
  ]

const Package6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const handleBack =()=>{
    window.history.back();
  }
    return(
        <>
        <Navbar/>
        <div className='container'>
            <div className='row'>
            <div className='col-12'>
            <div className='data-container-package'>
            <h1 className='mb-5 mt-5 blog-head'>Honey Moon Specials - Kenya Get Wild!!</h1>
            <h3 className='mb-3 package-head'>Overview:</h3>
            <p className='list-style'>Kenya is known for its diverse and breath taking landscapes. Kenyans are best known
              for their love and hospitality. Kenya as a country has one of the finest wildlife , nature parks and the
              most beautiful and pristine beaches on Earth. Being well connected to the rest of the World, Kenya
              does belong to the top ten honeymoon destinations of the World. We at Travel Unbounded have
              curated two wonderful journeys to the newly married and the Nature loving, romantic families to
              Kenya. Let’s explore them now.</p>
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
            <h3 className='mb-3 package-head'>Option 1</h3>
            <details className=' list-group-item list-style'> <summary><b>Day-1</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Four Points Sheraton – Airport</b></p>
            <p className='list-style'>Pick from the Airport and transfer to your hotel. Overnight at the hotel on BB</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Saltlick Safari Lodge/ Finch Hatton</b></p>
            <p className='list-style'>After breakfast, drive to Tsavo West arriving intime for lunch and check in. Afternoon game drive. All meals and overnight at the hotel on FB</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Saltlick Safari Lodge/ Finch Hatton</b></p>
            <p className='list-style'>Unlimited game drives. All meals and overnight at the hotel on FB</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-4</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Voyager Beach Resort/ Sands at Chale</b></p>
            <p className='list-style'>After breakfast, transfer to the Voi Train station for your scheduled train to Mombasa (1208hrs–1400hrs). Met and transfer to your hotel. Lunch and check in. All meals and overnight at the hotel on All Inclusive/ Half Board.</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Voyager Beach Resort/ Sands at Chale</b></p>
            <p className='list-style'>The day is spent at leisure for optional beach activities (Payments direct). All meals and overnight at the hotel on All Inclusive/ Half Board</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-6</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Voyager Beach Resort/ Sands at Chale</b></p>
            <p className='list-style'>The day is spent at leisure for optional beach activities (Payments direct). All meals and overnight at the hotel on All Inclusive/ Half Board</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-7</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Depart</b></p>
            <p className='list-style'>After breakfast, transfer to Mombasa Airport/ Diani Airport for your flight to JKIA (Quoted separately). Connect to your flight back home</p>
            </details>
        </div>
        </div>
        </div>
        <div className='container'>
            <div className='row'>
            <div className='col-12 list-group data-container-package' style={{width:'100%'}}>
            <h3 className='mb-3 mt-5 package-head'>Option 2</h3>
            <details className=' list-group-item list-style'> <summary><b>Day-1</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Four Points Sheraton – Airport</b></p>
            <p className='list-style'>Pick from the Airport and transfer to your hotel. Overnight at the hotel on BB</p>
            </details>
            <details className='list-group-item list-style'> <summary><b>Day-2</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Sarova Lion Hill/ The Cliff Nakuru</b></p>
            <p className='list-style'>After breakfast, drive to Lake Nakuru arriving intime for lunch and check in. Afternoon game drive. All meals and overnight at the hotel on FB</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-3</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Sarova Lion Hill/ The Cliff Nakuru</b></p>
            <p className='list-style'>Unlimited game drives. All meals and overnight at the hotel on FB</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-4</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Mara Sarova game camp/ Entim Mara Camp</b></p>
            <p className='list-style'>After breakfast, drive to Masai Mara arriving intime for lunch and check in. Afternoon game drive. All meals and overnight at the hotel on FB</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-5</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Mara Sarova game camp/ Entim Mara Camp</b></p>
            <p className='list-style'>Unlimited game drive. All meals and overnight at the hotel on FB</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-6</b></summary>
            <hr/>
            <p className='list-style mt-3'><b>Mara Sarova game camp/ Entim Mara Camp</b></p>
            <p className='list-style'>Unlimited game drive. All meals and overnight at the hotel on FB</p>
            </details>
            <details className=' list-group-item list-style'> <summary><b>Day-7</b></summary><hr/>
            <p className='list-style mt-3'><b>Depart</b></p>
            <p className='list-style'>After breakfast, drive to Nairobi and transfer to the Airport for your departure flight back home (Only breakfast included on this day).</p>
            </details>
        </div>
        </div>
        </div>
        <div class="data-container-package mb-5 mt-5">
        <div class="container">
            <div class="row">
            <div class="col-12 col-md-6 mb-5">
                    <h3 class=" mt-5 mb-5 package-head">
                       Bank Details
                    </h3>
                        <p className='list-style'>Travel Unbounded World pvt ltd</p>
                        <p className='list-style'>Account Number-<br/>
                            KES-<span className='number'>55010160012225</span> <br/>
                            USD-<span className='number'>55010130009921</span></p>
                        <p className='list-style'>Product Type-CURRENT A/C BUSINESS</p>
                        <p className='list-style'>Branch: WESTLANDS BRANCH</p>
                        <p className='list-style'>Swift CODE - UNAFKENA</p>
                        <p className='list-style'>BANK CODE <span className='number'>076</span></p>
                        <p className='list-style'>BRANCH CODE <span className='number'>76001</span></p>
                        <p className='list-style'>PIN CODE - <span className='number'>001</span></p>
                </div>
                <div class="col-12 col-md-6 mb-5">
                    <h3 class="mb-5 mt-5 package-head">Payment Methods</h3>
                    <ul className='list list-style'>
                        <li><b>NETT RATES VALID FOR 2 PAX – FEBRUARY 2024</b></li>
                        <li className='mt-3'>Using Saltlick (Water hole room), Voyager Beach Resort (Superior Sea view room) – Voyager will be on All Inclusive.</li>
                        <li>Per adult sharing a double room USD <span className='number'>$1550</span></li>
                        <li>FLIGHT - Mombasa to JKIA on the last Day USD <span className='number'>$100</span> per person</li>

                        <li className='mt-3'>Using Finch Hatton (Luxury Tent), Sands at Chale (Ocean View Banda) – Sands at Chale will be on Half Board Basis.</li>
                        <li>Per adult sharing a double room USD <span className='number'>$3760</span></li>
                        <li>FLIGHT - Diani/Ukunda to JKIA on the last Day USD <span className='number'>$120</span> per person</li>

                        <li className='mt-3'>Using Sarova Lion Hill and Mara Sarova Game Camp (Deluxe tent).</li>
                        <li>Per adult sharing a double room USD <span className='number'>$2300</span></li>

                        <li className='mt-3'>Using The Cliff Nakuru and Mara Entim Camp.</li>
                        <li>Per adult sharing a double room USD <span className='number'>$3390</span></li>
                    </ul>
                </div>
                
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Important Notes</h3>
                    <ul className='list list-style'>
                        <li> All quotations are based on current Government Park Tariffs. Park fees are subject to change without prior notice.</li>
                        <li> It is mandatory for all travellers returning to most countries from Kenya to be in possession of a valid Yellow Fever Certificate </li>
                        <li>Tourists Visa to Kenya is only available online at www.evisa.go.ke</li>
                        <li>Personal travel insurance cover is recommended for all visitors to East Africa</li>
                        <li>Wire transfer is subject to a service fee of USD 35.00 per transfer and credit card payments are subject to 3.5% service fee on PAID amount</li>
                        <li>Once a booking is confirmed, an invoice will be sent, after which payment should be made immediately to secure bookings.</li>
                        <li>For payments made in cash, please note that banks in Kenya do not accept US Dollar notes of 2008 and earlier.</li>
                        <li>Travel Unbounded World Private Limited shall NOT be liable for any excursions or extra services NOT booked through our offices while on tour.</li>
                        <li>Please restrict baggage per person to 15 kilos if you are taking a flight and 20 kilos if you are doing a road safari. Cabin sized soft bags are preferable</li>
                        <li>Single use plastic is not allowed in Kenya</li>
                        <li>Incoming passengers are no longer required to show covid vaccination certificates or PCR reports. Outbound passengers will follow covid requirement of the destination country.</li>
                        <li>All passports have to be valid for atleast six months from the date of your visit and must have atleast two empty pages</li>
                    </ul>
                </div>
                <div class="col-12 col-md-6">
                    <h3 class="mb-5 mt-5 package-head">Cancellation Policy</h3>
                    <ul className='list list-style'>
                        <p>Any non-refundable deposits paid to the hotels or airline tickets purchased, with prior notification to the client or agent will not be refunded</p>
                        <p>Where no such deposits have been made, the below applies:</p>
                        <li>Cancellation prior to 60/90 days (depending with season) – only bank charges will be deducted</li>
                        <li>Cancellations received less than 60/90 days prior to departure will be subject to the following</li>
                    </ul>
                    <h3 className='mb-3 package-head'>Cancellation Fees</h3>
                    <ul className='list list-style'>
                    <h5>Low season:</h5>
                    <p>Less than 60 days 40%</p>
                    <p>Less than 45 days is 60%</p>
                    <p>Less than 15 days is 100%</p>
                    <p>Beyond 60 days – Full refund except bank charges (including service fees) and non-refundable deposits (if any) at the hotels and air tickets</p>
                    <h5>Peak Season:</h5>
                      <p>Less than 90 days 50%;</p>
                      <p>Less than 45 days is 75%;</p>
                      <p>Less than 30 days is 100%;</p>
                      <p>Beyond 90 days – Full refund except bank charges (including service fees) and non-refundable deposits (if any) at the hotels and air tickets</p>
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
              
                <div className='col-12 col-md-6'>
                  <h3 className='mt-5 mb-5 package-head'>Inclusions  at Finch Hattons.</h3>
                  <ul className='list list-style'>
                    <li>All meals, Return Finch Hattons airstrip transfers</li>
                    <li>Scheduled activities (including game drives</li>
                    <li>Excursion to Shetani lava flow, Oldonyo Larami volcano hike</li>
                    <li>Yoga, nature walk, bush breakfast & sundowners)</li>
                    <li>Use of spa (excluding treatments)</li>
                    <li>Laundry (excluding dry cleaning)</li>
                    <li>All drinks (excluding premium wines & spirits)</li>
                    <li>Complimentary wireless internet throughout camp</li>
                    <li>Exclusive use of vehicle, butler service and a private chef for in-suite dining (when booking Finch Hattons Suite).</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
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
export default Package6;