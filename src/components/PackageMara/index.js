import {React} from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';
import {Helmet} from 'react-helmet'
import './index.css';

const Mara = () => {
  return (
    <>
     <Helmet>
          <title>Great Migration 2024 to Mara - Witness Nature's Spectacle</title>
          <meta name="description" content="Join us for the extraordinary Great Migration of 2024 to Mara, where millions of wildebeest and zebras traverse vast landscapes in a mesmerizing spectacle of nature. " />
        </Helmet>
    <Navbar/>
    <div className='border-profile'>
      <div className='profile-container'>
      <h5 className='package-head'>Talk to our Expert - Chandrashekar Kalyanasundaram ( Chandru )</h5>
      <h5 className='mb-3' style={{fontFamily:"Roboto"}}>+91 9845090014</h5>
      <img src="/packages/profile.jpg" alt='' className='profile'/>
    </div>
    </div>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>Travel Unbounded Presents</h1>
          <hr/>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-center'>
              <h1 className='package-head'>Great Migration 2024</h1>
              <p className='list-style'><b>Overview:</b> Over 4million wildebeest and
                                2 million zebras following the rains, cross
                                over from Serengeti to the great plains of
                                Maasai Mara searching for freshly grown
                                grass. This is The Biggest Wildlife
                                spectacle Earth!! This happens from mid
                                July to end October, afterwards the
                                surviving herds return to Serengeti. This
                                annual migration of the ungulates is
                                known as The Great Migration. We at
                                Travel Unbounded, with more than two
                                decades of travel to this eco system have
                                curated a wonderful itinerary for you and
                                your family to enjoy this mega event.</p>
        </div>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
              <img src='/packages/img-9-1.jpg' alt='corbett' className='package-image'/>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>About Us</h1>

          <hr/>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-left mb-3'>
              <p className='list-style'>We are one of the leading experiential travel companies head
                quartered in Bangalore, India and have our own registered
                office at Nairobi. We specialise in tours to Kenya and
                Tanzania. Our experienced team of guides and team skippers
                based out of Nairobi would enhance your travel experience
                and make your holiday a very memorable one.</p>
              <p className='list-style'>We have direct tie ups with the top resorts in Africa, which
                gives the price advantage over others. Our team based in
                Nairobi coordinates with each of our groups, right from the
                minute you land in Nairobi and make sure that there are no
                glitches while you enjoy the wilderness holidays.</p>
          </div>
          
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
             <img src='/packages/img-9-2.jpg' alt='parwali in swimming' className='package-image-history' />
          </div>
      <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
      <p className='list-style'>We cater close to 200 guests every year to Maasai Mara and
                Kenya during the Great Migration season. Our guests travel
                from across the globe to witness this event. Our journeys are
                curated to suit age groups from 8 to 80! Our intrinsic
                planning ensures that every requirement including the
                cuisine is taken care off. Our tours have been highly
                appreciated by our guests and in turn they have been referring
                their families and friends to us regularly.</p>
            </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
              <img src='/packages/img-9-3.jpg' alt='cubs in the pool' className='package-image-history-two'/>
          </div>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <p className='list-style'>Starting mid July, the ungulates cross over to Maasai
                Mara from the Sand river side. Maasai Mara is
                divided into three parts. The National park, the
                conservancies and the villages. The National park is
                where the main migration happens. The herds enter
                Mara through the Mara Traingle. The mighty Mara
                river cuts the Mara Traingle and a large portion of
                Mara. When the herds increase in numbers at the
                Mara Traingle, they are pushed into the main Mara
                eco system. This is when they try and cross the mighty</p>
              <p className='list-style'>Mara river infested with the hungry Nile crocodiles. A
                lot of them perish while trying to cross the river.
                Those who survive this first ordeal would have to face
                the heat of the predators like Lions, Leopards,
                Cheetahs, Hyenas who would be waiting for them on
                land. The luck ones survive this and return back to
                Serengeti. This is a short summary of these animals.</p>
          </div>
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>Short Itinerary</h1>
          <hr/>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-left mb-3'>
              <p className='list-style package-head'>Day - 1</p>
              <p className='list-style'>Mara Keekorok Lodge – Standard</p>
              <p className='list-style'>Pick from the Airport in the morning and drive to Masai Mara arriving
                intime for lunch and check in. Afternoon game drive. All meals and
                overnight at the hotel on FB</p>

              <p className='list-style package-head'>Day - 2</p>
              <p className='list-style'>Mara Keekorok Lodge – Standard</p>
              <p className='list-style'>Unlimited game drives. All meals and overnight at the hotel on FB</p>

              <p className='list-style package-head'>Day - 3</p>
              <p className='list-style'>Mara Keekorok Lodge – Standard</p>
              <p className='list-style'>Unlimited game drives. All meals and overnight at the hotel on FB</p>

              <p className='list-style package-head'>Day - 4</p>
              <p className='list-style'>Mara Keekorok Lodge – Standard</p>
              <p className='list-style'>Unlimited game drives. All meals and overnight at the hotel on FB</p>

              <p className='list-style package-head'>Day - 5</p>
              <p className='list-style'>Depart</p>
              <p className='list-style'>After breakfast, drive to Nairobi and transfer to the Airport (Only
                breakfast included).</p>
          </div>
        <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
        <h2 className='package-head'>NETT RATES – USING 1 VEHICLE</h2>
        <table >
          <thead>
            <tr>
              <th>Per Adult Sharing</th>
              <th>Per Adult Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Each of 2 pax sharing</td>
              <td>US $2650</td>
            </tr>
            <tr>
              <td>Each of 3 pax sharing</td>
              <td>US $2440</td>
            </tr>
            <tr>
              <td>Each of 4 pax sharing</td>
              <td>US $2330</td>
            </tr>
            <tr>
              <td>Each of 5 pax sharing</td>
              <td>US $2270</td>
            </tr>
            <tr>
              <td>Each of 6 pax sharing</td>
              <td>US $2220</td>
            </tr>
            <tr>
              <td>Each of 7 pax sharing</td>
              <td>US $2190</td>
            </tr>
            <tr>
              <td>Single room supplement</td>
              <td>US $690</td>
            </tr>
            <tr>
              <td>Guests booking as a single traveler</td>
              <td>US $2650</td>
            </tr>
          </tbody>
        </table>
        <h1 className='package-head mt-5'>Note</h1>
        <ul>
        <li className='list-style'>Above rates valid from 15th July to 31st July 2024 and 1st September to 15th October 2024</li>
        <li className='list-style'> All August batches sold out</li>
        </ul>
        </div>
         </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
             <img src='/packages/img-9-4.jpg' alt='' className='package-image-2 mb-1' /> 
             <img src='/packages/img-9-5.jpg' alt='' className='package-image-2' /> 
          </div>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
              <img src='/packages/img-9-6.jpg' alt='' className='package-image-last-2'/>
          </div>
          </div>
        </div>

        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
              <img src='/packages/img-9-7.jpg' alt='cubs in the pool' className='package-image-history-1'/>
          </div>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <p className='list-style'>You would be staying at a very prestigious lodge known as
                Keekorok. This lodges was one of the first lodges to be set
                up in Maasai Mara. It is know for its hospitality. The
                friendly staff go out of their way to make your stay very
                comfortable. This lodges is known for its mouth watering
                multi cuisines. They specialise in Indian dishes and if you
                are pure veg, this is The place to stay!! It is centrally located
                and you would have access to both the sides of the park.
                This lodge is located at a place which are famous for</p>
              <p className='list-style'>Rhinos. On a lucky day, you would sight these highly
                endangered species. There is a large pride of lions called
                the BlackRock pride near to the lodge. The lodge is home
                for a various number of birds. The lodge has a large
                swimming pool where you can relax during your noon
                breaks. The rooms are very spacious and well designed and
                is very very safe to stay here. You can view wildlife from the
                large glass windows of your rooms.</p>
          </div>
          </div>
        </div>

        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <p className='list-style'>The game drives would be in a 4*4 Landcruiser. These
                vehicles are modified and have large windows and a pop
                up top as seen in this picture. This enables all the guests
                to have a magnificent view of the wildlife around. All our
                vehicles are insured. They are driven by our Bronze and
                Silver category guides. These guides have been driving in
                these parks for more than two decades and they are
                extremely knowledgeable about the animals and the</p>
              <p className='list-style'>terrain. All our vehicles are fitted with wireless and our
                guides would be constantly communicating with the other
                drivers in the park to ensure you are taken to the place of
                action at the right time. These vehicles are 9 seaters, so
                even if you are family of 6 travelling, everyone would get a
                window seat.</p>
          </div>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
              <img src='/packages/img-9-8.jpg' alt='' className='package-image-history-two'/>
          </div>
          </div>
        </div>
      
        <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>Inclusions</h1>
          <hr/>
          <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
             <ul>
              <li className='list-style'>Meals & Accommodation with taxes at the Safari Lodges on full board.</li>
              <li className='list-style'>Transport in ONE NON-AC Landcruiser as per quote on private basis with pop up roof for easy game viewing.</li>
              <li className='list-style'>Services of our Certified Driver Guide.</li>
              <li className='list-style'>Drinking water in our vehicle while on Safari (limited to max 1 litre per person per day)</li>
              <li className='list-style'>Park Entrance Fees (Based on 2024 Park entrance fees for Masai Mara).</li> 
             </ul>
          </div>
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>Exclusions</h1>
          <hr/>
          <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
             <ul>
              <li className='list-style'>International airfare inclusive of related taxes</li>
              <li className='list-style'>Visa entry fees</li>
              <li className='list-style'>Maasai Village Visit (US $ 25)</li>
              <li className='list-style'>Balloon Safari ($ 450)</li>
              <li className='list-style'>Tips & gratitude</li>
              <li className='list-style'>All Optional Activities extras not stated including entry fees at Nairobi</li>
              <li className='list-style'>Lunch and dinner in Nairobi</li>
              <li className='list-style'>Drinks and Beverages consumed with lunch or dinner at the lodges</li>
              <li className='list-style'>Expenses of personal nature such as telecommunications, tips / gratuities, cigarettes, ETC</li>
              <li className='list-style'>Laundry services not unless otherwise mentioned</li>
              <li className='list-style'>Travel, baggage and medical insurance. (Highly recommended)</li>
              <li className='list-style'>Any other item/s not specified above.</li>
              <li className='list-style'>Changes or deviation from the itinerary.</li>
             </ul>
          </div>
          </div>
        </div>
        
        <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>Terms and Conditions</h1>
          <hr/>
          <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
             <ul>
              <li className='list-style'>All quotations are based on current Government Park Tariffs. Park fees are subject to change without prior notice.</li>
              <li className='list-style'>It is mandatory for all travelers returning to most countries from Kenya to be in possession of a valid Yellow Fever Certificate</li>
              <li className='list-style'>Tourists Visa to Kenya is only available online at <a href='www.evisa.go.ke'>click</a></li>
              <li className='list-style'>Personal travel insurance cover is recommended for all visitors to East Africa</li>
              <li className='list-style'>Wire transfer is subject to a service fee of USD 35.00 per transfer and credit card payments are subject to 3.5% service fee on PAID amount</li>
              <li className='list-style'>Once a booking is confirmed, an invoice will be sent, after which payment should be made immediately to secure bookings.</li>
              <li className='list-style'>For payments made in cash, please note that banks in Kenya do not accept US Dollar notes of 2008 and earlier.</li>
              <li className='list-style'>Travel Unbounded Private Limited shall NOT be liable for any excursions or extra services NOT booked through our offices while on tour.</li>
              <li className='list-style'>Please restrict baggage per person to 15 kilos if you are taking a flight and 20 kilos if you are doing a road safari. Cabin sized soft bags are preferable</li>
              <li className='list-style'>Single use plastic is not allowed in Kenya</li>
              <li className='list-style'>Incoming passengers are no longer required to show covid vaccination certificates or PCR reports. Outbound passengers will follow covid requirement
                of the destination country.</li>
              <li className='list-style'>All passports have to be valid for atleast six months from the date of your visit and must have atleast two empty pages</li>
             </ul>
          </div>
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
              <h1 className='package-head'>Cancellation Policy</h1>
              <hr/>
              <p className='list-style'>Any non-refundable deposits paid to the hotels or airline tickets purchased, with prior notification to the client or agent will not be refunded</p>
              <p className='list-style mt-3'>Where no such deposits have been made, the below applies:</p>
              <p className='list-style'>Cancellation prior to 60/90 days (depending with season) – only bank charges will be deducted</p>
              <p className='list-style'>Cancellations received less than 60/90 days prior to departure will be subject to the following</p>
          </div>
          </div>
          </div>
        <div className='container mt-5'>
        <div className='row'>
        <h1 className='package-head'>Cancellation Fees</h1>
        <hr/>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <p className='list-style mt-3' style={{color:'orange'}}>Low Season</p>
              <p className='list-style'>Less than 60 days 25%</p>
              <p className='list-style'>Less than 45 days is 50%</p>
              <p className='list-style'>Less than 15 days is 100%</p>
              <p className='list-style'>Beyond 60 days – Full refund except bank charges (including service fees) and non-refundable deposits (if any) at the hotels and air tickets</p>
              </div>
              <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <p className='list-style mt-3' style={{color:'orange'}} >Peak Season</p>
              <p className='list-style'>Less than 90 days 25%;</p>
              <p className='list-style'>Less than 45 days is 50%</p>
              <p className='list-style'>Less than 30 days is 100%</p>
              <p className='list-style'>Beyond 90 days – Full refund except bank charges (including service fees) and non-refundable deposits (if any) at the hotels and air tickets</p>
              <p className='list-style'>* Postponement owing to Covid related cancellation of flights or a Covid positive status will not be penalized subject to documentary evidence</p>
          </div>
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
        <h1 className='package-head'>Advantages to Travel Unbounded</h1>
        <hr/>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <ul>
                <li className='list-style'>All vehicles are insured</li>
                <li className='list-style'>All guests travelling will have Air Ambulance insurance included</li>
                <li className='list-style'>Stay at one of the top rated resort at Mara</li>
                <li className='list-style'>Bronze and Silver category guides & drivers</li>
                <li className='list-style'>Jain & pure veg food available</li>
                <li className='list-style'>Ground support team available at all times during the tour</li>
                <li className='list-style'>Established, Govt registered office at Nairobi, Kenya</li>
                <li className='list-style'>Payments are accepted in USD directly to our bank in Nairobi</li>
                <li className='list-style'>Best suited itinerary for families and all age groups</li>
              </ul>
              </div>
              <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <img src='/packages/img-9-9.jpg' alt='' className='package-image' />
          </div>
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <img src='/packages/img-9-10.jpg' alt='' className='package-image-3'/>
              </div>
              <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <img src='/packages/img-9-11.jpg' alt='' className='package-image-3' />
          </div>
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-12 col-xl-12 col-lg-12 main-head-right text-center'>
        <img src='/packages/img-9-12.jpg' alt='' className='package-image-3'/>
        </div>
        </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <img src='/packages/img-9-13.jpg' alt='' className='package-image-3'/>
              </div>
              <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <img src='/packages/img-9-14.jpg' alt='' className='package-image-3' />
          </div>
          </div>
        </div>
        <div className='text-center mt-5 mb-5'>
          <Link to='/form'> <button type='button' className='book-btn'>Book Now</button></Link>
        </div>
      <Footer/>
    </>
  )
}
export default Mara;