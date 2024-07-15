import React from 'react'
import Maincarousel from '../../components/homecarousel/Maincarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

export default function 
() {
  return (
    <div>
      <div>
        <Maincarousel/>
      </div>
        
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtas"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Sarees"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>

        </div>
    </div>
  )
}
