import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import VideoBanner from '../VideoBanner'
import './Home.css'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return ( 
        <div>
        
        <Navbar/>
        <VideoBanner />
        <h3 className='head text-center blog-head mb-5'>Wildlife Destinations</h3>
       
        <div className='app-container'>
        <div className = 'des-container' >
        
        <div className = 'right d-md-none' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696423664/Destination_Kenya_kx8qmj.jpg'
        alt = 'Kenya'
        className = 'wildlife-img' />
        </div>

        <div className = 'left mt-3' >
        <h1 className = 'msg-head' > Kenya </h1> 
        <div className = 'description-container' >
        <p className = 'msg-description' > Kenya is a country of dramatic extremes. It is one of the most diverse places on Earth. It’s open
        plains and dense forests, the snow clad mountains and the deserts, the ancient colourful culture
        and the buzzing modern lives, its fresh water lakes and coral reeves together form a landscape
        never to be seen anywhere in the World. Kenya is world famous for its savannah safaris. Kenya is
        referred as the Mecca of Wildlife. </p>
        </div > 
        
        <Link to='/kenya' className='custom-btn' ><div className = 'btn-container' > 
        <button type = 'button'
        id = 'readMoreBtn' > Read More </button> 
        </div > </Link>

        </div>
        <div className = 'right d-none d-md-block' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696423664/Destination_Kenya_kx8qmj.jpg'
        alt = 'Kenya'
        className = 'wildlife-img' />
        </div>
        </div >

        <div className = 'des-container' >
        <div className = 'left' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696423771/Destination_Tanzania_oxwmkb.jpg'
        alt = 'Tanzania'
        className = 'wildlife-img' />
        </div>
        <div className = 'right' >
        <h1 className = 'msg-head' > Tanzania </h1>  
        <div className = 'description-container' >
        <p className = 'msg-description' > Known for its vast area of wilderness , it is one of the most sought out wildlife destination in the
        World. It is where you can see the highest mountain of Africa, The Kilimanjaro. It is famously
        known as the Land Of Safaris. Millions of wildebeests and other ungulates traverse this land during
        their great migration. They cross from here to Maasai Mara every year. This is called a Great
        Migration. And during the month of Feb on the plains of Ndutu, these animals give birth to millions
        of calves. It is a truly a sight to watch.
        </p >
        </div > 
        <Link to ='/tanzania' className='custom-btn'><div className = 'btn-container' > 
        <button type = 'button'
        id = 'readMoreBtn' > Read More </button> </div ></Link>
        </div >
        </div >
        

        <div className = 'des-container' >
        <div className = 'left' >
        <div className = 'right d-md-none' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696423895/Destination_RTR_xuilod.jpg'
        alt = 'Ranthambore'
        className = 'wildlife-img' />
        </div>
        <h1 className = 'msg-head' > Ranthambore </h1> 
        <div className = 'description-container' >
        <p className = 'msg-description' > Famously known as the land of the Royal Bengals, this place has the oldest history of man animal
        co existence. Ranthambore National Park is one of the biggest and most renowned national park
        in Northern India. The park is located in the Sawai Madhopur district of southeastern Rajasthan,
        which is about 130 km from Jaipur. Being considered as one of the famous and former hunting
        grounds of the Maharajas of Jaipur, today the Ranthambore National Park terrain is major wildlife
        tourist attraction spot that has pulled the attention of many wildlife photographers and lovers in this
        destination.</p>
        </div > 
        
        <Link to='/ranthambore' className='custom-btn' ><div className = 'btn-container' > 
        <button type = 'button'
        id = 'readMoreBtn' > Read More </button> 
        </div > </Link>

        </div>
        <div className = 'right d-none d-md-block' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696423895/Destination_RTR_xuilod.jpg'
        alt = 'Ranthambore'
        className = 'wildlife-img' />
        </div>
        </div >

        <div className = 'des-container' >
        <div className = 'left' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696423972/Destination_Bandhavgarh_k5gmc8.jpg'
        alt = 'Bandhavgarh'
        className = 'wildlife-img' />
        </div>
        <div className = 'right' >
        <h1 className = 'msg-head' > Bandhavgarh </h1>  
        <div className = 'description-container' >
        <p className = 'msg-description' > Ever wondered doing jungle drives in the &quot;Tiger Capital of the World&quot;?
        We make that possible now and do it with taking care of your comfort both on and off the field.
        Sighting here is high and regular when compared to any other Tiger reserve in India and therefore
        a jungle safari here makes perfect sense. With Tigers in all the zones, it&#39;s going to be lifetime
        experience in the jungle.</p>
        </div >

        <Link to='/bandhavgarh' className='custom-btn'><div className = 'btn-container' > 
        <button type = 'button'
        id = 'readMoreBtn' > Read More </button> </div ></Link>


        </div >
        </div >

        <div className = 'des-container' >
        <div className = 'left' >
        <div className = 'right d-md-none' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696424057/Destination_Corbett_gazwxq.jpg'
        alt = 'Corbett'
        className = 'wildlife-img' />
        </div>
        <h1 className = 'msg-head' > Corbett </h1> 
        <div className = 'description-container' >
        <p className = 'msg-description' >  Named after the famed hunter turned conservationist , Sir Edward Jim Corbett, this beautiful park
        lies in the lower Himalayas. The life giving Ramganga river cuts through this pristine jungle.
        Corbett Tiger Reserve is home to the magnificent Royal Bengal Tiger. It is also home for the Asiatic
        elephants which come down to the Dhikala grass lands during summer in hundreds of numbers.
        One can sight spotted deers, sambhars and the elusive hog deer. This is one of the best parks to
        enjoy the Indian wildlife.</p>
        </div > 

        <Link to ='/corbett' className='custom-btn'><div className = 'btn-container' > 
        <button type = 'button'
        id = 'readMoreBtn' > Read More </button> 
        </div > </Link>

        </div>
        <div className = 'right d-none d-md-block' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1696424057/Destination_Corbett_gazwxq.jpg'
        alt = 'Corbett'
        className = 'wildlife-img' />
        </div>
        </div >

        
        <div className = 'des-container' >
        <div className = 'left' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1697432265/Bandipur_Tiger_reflection_amzlc6.jpg'
        alt = 'Bandipur'
        className = 'wildlife-img' />
        </div>
        <div className = 'right' >
        <h1 className = 'msg-head' > Bandipur </h1>  
        <div className = 'description-container' >
        <p className = 'msg-description' >The patch of dry deciduous forests lies Enroute to the famous Ooty hills and Karnataka. The
        forest is divided by the National high way with cuts through the dense jungle. The Bandipur forest is home
        for the tiger, leopard, wild dogs, Indian gaur, Asiatic elephants, spotted deers, Sambhar deers and other
        mammals. </p>
        </div >

        <Link to='/bandipur' className='custom-btn'><div className = 'btn-container' > 
        <button type = 'button'
        id = 'readMoreBtn' > Read More </button> </div ></Link>
        </div >
        </div >

        <div className = 'des-container' >
        <div className = 'left' >
        <div className = 'right d-md-none' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153599/Mom_n_me_Kabini_obupgt.jpg'
        alt = 'kabini'
        className = 'wildlife-img' />
        </div>
        <h1 className = 'msg-head' > Kabini </h1> 
        <div className = 'description-container' >
        <p className = 'msg-description' > Kabini is one place where the top three predators of the subcontinent are found. The Tiger, the leopard and
        the wild dogs roam these forests. The forests teems with spotted deers, sambhar deers, great Indian squirrel,
        Indian gaur ( Bison ) and the elusive musk deer. Birdlife is very good at Kabini.</p>
        </div > 
        
        <Link to='/kabini' className='custom-btn' ><div className = 'btn-container' > 
        <button type = 'button'
        id = 'readMoreBtn' > Read More </button> 
        </div > </Link>

        </div>
        <div className = 'right d-none d-md-block' >
        <img src = 'https://res.cloudinary.com/dr0vyis3o/image/upload/v1701153599/Mom_n_me_Kabini_obupgt.jpg'
        alt = 'kabini'
        className = 'wildlife-img' />
        </div>
        </div >

        <div className = 'view-btn-container' > 
        <Link to='/packages' className=''><button type = 'button'
        id = 'readMoreBtn' className='view-btn-pkg' >View Packages</button></Link> 
        </div >
       <Footer />
       </div>
    </div>
    )
}

export default Home;