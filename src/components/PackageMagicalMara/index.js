import {React} from 'react';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';
import {Helmet} from 'react-helmet'
import './index.css';

const MagicalMara
 = () => {
  return (
    <>
     <Helmet>
          <title>Magical Maasai Mara Adventure by Travel Unbounded</title>
          <meta name="description" content="Experience the allure of Africa with our Magical Maasai Mara adventure package by Travel Unbounded. Immerse yourself in the timeless beauty of the Maasai Mara, where majestic wildlife roams free amidst stunning landscapes." />
        </Helmet>
    <Navbar/>
      <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>Magical Mara By Travel Unbounded</h1>
          <hr/>
          <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
              <img src='/packages/img-10-1.jpg' alt='' className='package-image-a'/>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>June at Maasai Mara</h1>
          <hr/>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
          <h2 className='package-head mb-3'>Overview</h2>
             <img src='/packages/img-10-2.jpg' alt='' className='package-image-long' />
          </div>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-left mb-3 mt-5'>
              <p className='list-style'>June marks the end of the long rains and the busy season is just about to begin!!
                The skies are clear with no light pollution. The stars at the night are spectacular and
                on a luck night, you would get to see the Milky way too.</p>
              <p className='list-style'>But the dates which our team has curated this wonderful journey is ensure that you
                will be the guests who would enjoy the offseason pricing at some of the most
                sought off resorts.</p>
              <p className='list-style'>The large herds wouldn’t have come yet inside Mara but the residents animals can
                be sighted very easily as the place would be no haze!! There would be a plenty of
                action on the plains of Mara, as the Big cats venture out to hunt and feed their
                young ones.</p>
              <p className='list-style'>This season is one of the best seasons for the lesser known mammals like the serval
                cat, lynx, bat eared fox and jackals. The wet ground makes the snakes crawl out
                making them easy meal for these skilled hunters.</p>
               <p className='list-style'>Some days it can rain and this turns the plains magical. The rainbows over the plains
                    of Mara with animals in the foreground is pure bliss for ones eyes.</p>
                </div>
        </div>
      </div>

        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-left mb-3'>
          <h1 className='package-head'>Short Itinerary</h1>
          <hr/>
              <p className='list-style package-head'>3rd June</p>
              <p className='list-style'>Sarova Lion Hill</p>
              <p className='list-style'>Pick from the Airport in the morning and
                drive to Lake Nakuru arriving intime for
                lunch and check in. Afternoon game
                drive in lake Nakuru. All meals and
                overnight at the hotel on FB</p>

              <p className='list-style package-head'>4th June</p>
              <p className='list-style'>Mara Figtree Camp</p>
              <p className='list-style'>Enjoy an early morning game drive and
                back for breakfast and check out. Later
                drive to Masai Mara arriving intime for
                lunch and check in. Afternoon game
                drive. All meals and overnight at the hotel
                on FB</p>

              <p className='list-style package-head'>5th June</p>
              <p className='list-style'>Mara Figtree Camp</p>
              <p className='list-style'>Unlimited game drives. All meals and
                overnight at the hotel on FB</p>

              <p className='list-style package-head'>6th June</p>
              <p className='list-style'>Mara Figtree Camp</p>
              <p className='list-style'>Unlimited game drives. All meals and
                overnight at the hotel on FB</p>

              <p className='list-style package-head'>7th June</p>
              <p className='list-style'>Depart</p>
              <p className='list-style'>After breakfast, drive to Nairobi and
                transfer to the Airport for your departure
                flight back home (Only breakfast included
                on this day).</p>
          </div>
  
        <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
        <img src='/packages/img-10-3.jpg' alt='' className='package-image-it mb-5' />
        <h3 className='package-head'>NETT RATES VALID FOR JUNE 2024 - FOR BOOKINGS DONE BEFORE FEB
          20TH 2024</h3>
        <table >
          <thead>
            <tr>
              <th>Per Adult Sharing</th>
              <th>Single room supplement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>US $1450</td>
              <td>US $20</td>
            </tr>
          </tbody>
        </table>
        <h3 className='package-head mt-5'>NETT RATES VALID FOR JUNE 2024 - FOR BOOKINGS DONE AFTER FEB
        20TH 2024</h3>
        <table >
          <thead>
            <tr>
              <th>Per Adult Sharing</th>
              <th>Single room supplement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>US $1600</td>
              <td>US $20</td>
            </tr>
          </tbody>
        </table>
        <h4 className='mt-5' style={{fontFamily:'Georgia'}}>Payment - 50% while booking & balance by March 10th 2024</h4>
        </div>
         </div>
        </div>

        <div className='container mt-5'>
        <div className='row'>
        <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
              <img src='/packages/img-10-4.jpg' alt='' className='package-image-last-2 mb-1'/>
          </div>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
             <img src='/packages/img-10-5.jpg' alt='' className='package-image-2 mb-1' /> 
             <img src='/packages/img-10-6.jpg' alt='' className='package-image-2' /> 
          </div>
          </div>
        </div>
      
        <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6'>
          <h1 className='package-head'>Inclusions</h1>
          <hr/>
             <ul>
              <li className='list-style'>Meals & Accommodation with taxes at the Safari Lodges on full board</li>
              <li className='list-style'>Accommodation in Nairobi (where applicable) includes breakfast and taxes only</li>
              <li className='list-style'>Transport in NON-AC Landcruiser as per quote on private basis with pop up roof for easy game viewing</li>
              <li className='list-style'>Services of our Certified Driver Guide.</li>
              <li className='list-style'>Drinking water in our vehicle while on Safari (limited to max 1 litre per person per day)</li> 
              <li className='list-style'>Park Entrance Fees as per current rates</li> 
              <li className='list-style'>Game drives and activities as per itinerary</li> 
             </ul>
          <h1 className='package-head'>Exclusions</h1>
          <hr/>
             <ul>
              <li className='list-style'>International airfare inclusive of related taxes</li>
              <li className='list-style'>Visa entry fees</li>
              <li className='list-style'>Maasai Village Visit (US $ 25)</li>
              <li className='list-style'>Balloon Safari ($ 500)</li>
              <li className='list-style'>Flying Doctor’s evacuation fee temporary membership ($ 30 for KE and $35 for TZ)</li>
              <li className='list-style'>All Optional Activities extras not stated including entry fees at Nairobi</li>
              <li className='list-style'>Lunch and dinner in Nairobi</li>
              <li className='list-style'>Drinks and Beverages consumed with lunch or dinner at the lodges</li>
              <li className='list-style'>Expenses of personal nature such as telecommunications, tips / gratuities,cigarettes, ETC</li>
              <li className='list-style'>Laundry services not unless otherwise mentioned</li>
              <li className='list-style'>Travel, baggage and medical insurance.(Highly recommended)</li>
              <li className='list-style'>Any other item/s not specified above.</li>
              <li className='list-style'>Changes or deviation from the itinerary.</li>
             </ul>
             </div>
             <div className='col-12 col-md-6 col-xl-6 col-lg-6 mt-5'>
             <img src='/packages/img-10-7.jpg' alt='' className='package-image-c mb-3' /> 
             <img src='/packages/img-10-8.jpg' alt='' className='package-image-c' /> 
          </div>
          </div>
        </div>
        
        <div className='container mt-5'>
        <div className='row'>
          <h1 className='package-head'>Important Notes</h1>
          <hr/>
          <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
             <ul>
              <li className='list-style'>All quotations are based on current Government Park Tariffs. Park fees are subject to change without prior notice.</li>
              <li className='list-style'>It is mandatory for all travelers returning to most countries from Kenya to be in possession of a valid Yellow Fever Certificate</li>
              <li className='list-style'>Tourists Visa to Kenya is only available online at <a href='www.evisa.go.ke'>click</a></li>
              <li className='list-style'>Personal travel insurance cover is recommended for all visitors to East Africa</li>
              <li className='list-style'>Wire transfer is subject to a service fee of USD 25.00 per transfer and credit card payments are subject to 3.5% service fee on PAID amount</li>
              <li className='list-style'>Once a booking is confirmed, an invoice will be sent, after which payment should be made immediately to secure bookings.</li>
              <li className='list-style'>For payments made in cash, please note that banks in Kenya do not accept US Dollar notes of 20012 and earlier.</li>
              <li className='list-style'>Travel Unbounded World Private Limited shall NOT be liable for any excursions or extra services NOT booked through our offices while on tour.</li>
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
          </div>
          </div>
        </div>
        <div className='container mt-5'>
        <div className='row'>
        <h1 className='package-head'>Bank Details</h1>
        <hr/>
          <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
         <h3 className='package-head mb-3'>Bank Details for transfers</h3>
              <p className='list-style'>Bank Name - United Bank Of Africa</p>
              <p className='list-style'>Account name - Travel Unbounded World Pvt Ltd</p>
              <p className='list-style'>Account number - 55010130009921</p>
              <p className='list-style'>Currency to be transferred - USD</p>
              <p className='list-style'>SWIFT CODE - UNAFKENA</p>
              <p className='list-style'>Bank Branch - Westlands</p>
              <p className='list-style'>Branch CODE - 76001</p>
              <p className='list-style'>Bank Address - 1st floor, Apollo Centre, Vale Close, Ring Road, Westlands,
                Nairobi, Pin - 001</p>
              <p className='list-style'>Receiver bank country - Kenya</p>
              <p className='list-style'>Co address - MPESI Lane, Kenya, TTA Avenue, PO BOX No - 6950, Nairobi</p>
              </div>
              <div className='col-12 col-md-6 col-xl-6 col-lg-6 main-head-right'>
              <img src='/packages/img-10-9.jpg' alt='' className='package-image-d' />
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
export default MagicalMara;