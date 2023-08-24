import React from 'react';
import { l1, l2, l3, l4 } from "../assests/assets";


export default function Trust() {

  return (
    <div data-aos="fade-up" data-aos-delay="1000" className='pb-20 pt-10 mx-24 md:px-24'>



    <p className='text-zinc-500 text-center text-2xl font-semibold'>Trusted by global leading payment</p>
    <div className='grid lg:grid-cols-4 grid-cols-2 gap-3 justify-center items-center mt-10'>

    <img src={l1} className='w-[90%] ' />
    <img src={l2} className='w-[90%]' />
    <img src={l3} className='w-[90%]' />
    <img src={l4} className='w-[90%]' />
    
    </div>
    
    </div>
  )
}
