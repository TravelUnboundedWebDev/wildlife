import React, {Component} from "react";
import Slider from "react-slick";

import './gallery.css'

export default class Gallery extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows:false
    };

    const {images} = this.props
    return (
        <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`gallery ${index}`} className="slick-slide"/>
            </div>
          ))}
        </Slider>
      </div> 
    )
    }
}