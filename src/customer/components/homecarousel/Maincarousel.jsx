import React from 'react'
import { MainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Maincarousel() {

    const items = MainCarouselData.map((item)=> <img className='cursor-pointer' src={item.image} alt="" role='presentation' /> );

   
  return (
    
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    />
  )
}
