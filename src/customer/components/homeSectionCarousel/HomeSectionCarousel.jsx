import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../homesectioncard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';


export default function HomeSectionCarousel({data,sectionName}) {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 2 },
        1024: { items: 4 },
    };

    // const slidePrev = () => setActiveIndex(activeIndex - 1);
    // const slideNext = () => setActiveIndex(activeIndex + 1)

    // const syncActiveIndex = ({ item }) => setActiveIndex(item)

    // const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />);

    const slidePrev = () => {
        const newIndex = activeIndex - 1 < 0 ? 0 : activeIndex - 1;
        setActiveIndex(newIndex);
      };
    
      const slideNext = () => {
        const newIndex = activeIndex + 1 >= data.length ? activeIndex : activeIndex + 1;
        setActiveIndex(newIndex);
      };
    
      const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
      };
    
      // Adjust the slice based on activeIndex to display correct range of items
      const items = data.slice(activeIndex, activeIndex + 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
      ));



    return (
        <div className='px-4 lg:px-8'>
            <h2 className='text-2xl font-extrabold text-gray-800 '>{sectionName}</h2>
            <div className='relative p-5 '>

                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 4 && <Button variant='contained' className='z-50' onClick={slideNext} sx={{
                    position: 'absolute', top: "8rem", right: "0rem",
                    transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                </Button>}

                {activeIndex !== 0 && <Button variant='contained' className='z-50' onClick={slidePrev} sx={{
                    position: 'absolute', top: "8rem", left: "0rem",
                    transform: "translateX(-50%) rotate(90deg)", bgcolor: "white"
                }} aria-label='prev'>
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(-90deg)', color: "black" }} />
                </Button>}
            </div>
        </div>
    )
}
