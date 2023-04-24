// import React from 'react'
// import ssBack  from '../images/screen-phone.png'
import ss1 from '../images/screenshot-img-1.jpg'
import ss2 from '../images/screenshot-img-2.jpg'
import ss3 from '../images/screenshot-img-3.jpg'
import ss4 from '../images/screenshot-img-4.jpg'
import ss5 from '../images/screenshot-img-5.jpg'
import ss6 from '../images/screenshot-img-6.jpg'
import ss7 from '../images/screenshot-img-7.jpg'
import '../App.css'
// import SimpleImageSlider from "react-simple-image-slider";

import React, { Component } from "react";
import Slider from "react-slick";

export default class ScreenSlide extends Component {

  
  render() {
    const settings = {
     
  
      centerMode:true,
      centerPadding: '0px',
      slidesToShow: 5,
      slidesToScroll: 5,
      className: "center",
      infinite:true,
      speed: 900,
      arrows:false,
      autoplay:true,
      autoplaySpeed:800,
      loop:true,
      // index: 1,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            // centerPadding: '8px',
            // centerMode:true,
          }
        },
        {
          breakpoint: 994,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            // centerMode:true,
          }
        },
        {
          breakpoint: 824,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            // centerMode:true,
          }
        },
        {
          breakpoint: 766,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // centerPadding: '0px',
            // centerMode:true,
            // initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <div className=' ss-bg-slide center  ' style={{height:'600px'}}>



       
        <Slider {...settings} className='sliders slider slide-show' >
          <div  >
            <img className='image-size-sld '    alt='screen-img'  src={ss1}></img>
          </div>
          <div  >
            <img className='image-size-sld'     alt='screen-img' src={ss2}></img>
          </div>
          <div  >
            <img className='image-size-sld'     alt='screen-img' src={ss3}></img>
          </div>
          <div  >
            <img className='image-size-sld'   alt='screen-img' src={ss4}></img>
          </div>
          <div  >
            <img className='image-size-sld'   alt='screen-img' src={ss5}></img>
          </div>
          <div  >
            <img className='image-size-sld'   alt='screen-img' src={ss6}></img>
          </div>
          <div  >
            <img className='image-size-sld'   alt='screen-img' src={ss7}></img>
          </div>
        </Slider>
      </div>
    );
  }
}



