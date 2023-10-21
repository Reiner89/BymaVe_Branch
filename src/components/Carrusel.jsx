import React, { Component } from "react";
import Slider from "react-slick";
import Cliente1 from '../Static/clientes/Transportes-Morales.webp'
// import Cliente2 from '../Static/clientes/Yelitze-Sanchez.webp'
import Cliente3 from '../Static/clientes/Comercial-Elias.webp'
import Cliente4 from '../Static/clientes/MR-Logistick.webp'
import Cliente2 from '../Static/clientes/Yelitze-Sanchez-blanco.webp'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      vertical: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="carrusel m-[0_62px] sm:m-0 w-[50%] md:w-[30%] lg:w-1/2 cursor-pointer">
        <Slider {...settings}>
          <div>
            <img key="1" src={Cliente1} alt="Cliente1" />
          </div>
          <div>
            <img key="2" src={Cliente2} alt="Cliente2" />
          </div>
          <div>
            <img key="3" src={Cliente3} alt="Cliente3" />
          </div>
          <div>
            <img key="4" src={Cliente4} alt="Cliente4" />
          </div>
        </Slider>
      </div>
    );
  }
}