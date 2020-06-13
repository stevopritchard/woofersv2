import React from 'react';
import ControlledCarousel from '../../components/carousel/Carousel'
import Testimonials from '../../components/testimonials/Testimonials'

function Home() {
    return(
        <div className='container'>
            <ControlledCarousel/>
            <Testimonials/>
        </div>
    )
}

export default Home;