import React from 'react';
import Blog from '../Blog';
import Footer from '../Footer'
import Navbar from '../Navbar'
import {Link} from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import './index.css'
import {Helmet} from 'react-helmet'

const cardData = [
  {
    id: 1,
    title: 'Journey to The Land of the One Horned Rhino -  Kaziranga',
    description: 'Home to the one thirds of the One Horned Rhino, this is a world heritage site. It also boasts the highest density for the tigers. The thrill of sigthing a tiger in the tall grasses makes one sit on their edge of their vehicle seats.',
    imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697357/blog1_fx8ql4_b4bngm.png'
  },
  {
      id: 2,
      title: 'INTO THE SMALL WORLD - Agumbe',
      description: 'The journey takes about 61/2 hours to reach the destination, but the drive is definitely an enjoyable one. We started early morning at 5.30 AM and took a left turn at Nelamangala towards Hassan.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697340/blog2_ysm2ak_frqt7b.png'
    },
    {
      id: 3,
      title: 'The Tiger Capital of the World - Bandhavgarh',
      description: 'Three years before when i started this company of wildlife tours, Bandhavgarh was an unknown name to me. I always had a feeling that all parks of Central India were very similar, dry and barren.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697320/Bandhavgarh_banner_image_weibkp_vlifdx.jpg'
    },
    {
      id: 4,
      title: 'CORBETT TIGER RESERVE - The Land of Roar and Trumpet',
      description: 'Away from the crowd packed like sardines, nestling in the foot hills of the mighty Himalayas, lies this beautiful peace of earth called Corbett.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697308/blog4_imny4b_xushtp.png'
    },
    {
      id: 5,
      title: 'Laikipia, Kenya’s Wild Dog’s Country',
      description: 'I hit the panic button, when my scheduled flight from Masai Mara did not land at 11AM. This was because, my connecting flight was at 13.00 hours from Nairobi to Nanyuki.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697273/blog5_hd8eia_zp1wxj.png'
    },
    
    {
      id: 6,
      title: 'Magical Masai mara',
      description: 'he view of the Kenyan coast line from the window is one of the most welcoming sight and a treat to ones eyes.  Masai mara, has always been a dream destination for me to go.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697253/Kenya_Gallery_4_u7kxud_uqropx.jpg'
    },
    {
      id: 7,
      title: 'Journey to the Mogul’s Home - Pench National Park',
      description: 'I always had a thought that Nagpur was only for oranges and water coolers. But a two and half journey from Nagpur, you enter where the world famous wolf child,  Mowgli hailed from.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697219/blog8_uz26tm_pqb6dd.png'
    },
    {
      id: 8,
      title: 'Tadoba - The Land Of Tigers',
      description: 'It was 50 degrees Celsius. We had covered our faces with a piece of cloth and only our eyes were exposed. Sweating hands couldn’t hold the camera because of the heat.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697162/blog9_fgscyb_s3xzwp.png'
    },
    {
      id: 9,
      title: 'Birding at The God’s Own Country - Thettekad, Kerala',
      description: 'An hour and a half journey from Cochin takes you to one of the most desired birding destinations of the Indian subcontinent.',
      imageUrl: 'https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697140/blog10_ujfwnw_rt33em.png'
    },

  
];

const BlogList = () => {

  return (
    <>
    <Helmet>
      <title>Explore Nature's Beauty Travel Unbounded's Insights</title>
      <meta name="description" content="Dive into the captivating world of wildlife through Travel unbounded's blog. Our expert insights, travel tips, and conservation stories bring you closer to nature's marvels. Stay informed, inspired, and ready for your next adventure with our wildlife tours. Explore our blog now!" />
    </Helmet>
    <Navbar/>
      <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704697093/Sundarbans_Boatmen_1_olgqv8_thkuxj.jpg' alt='' className='destination-img' />
    
    <div className="card-list mt-5">
      {cardData.map((card) => (
        <Blog key={card.id} {...card} />
      ))}
    </div>
    <div className='text-center mb-3'>
      <Link to='/' className='dest'><IoMdHome size={30} style={{color:'blue'}}/></Link>
    </div>
    <Footer />
    </>
  );
};

export default BlogList;
