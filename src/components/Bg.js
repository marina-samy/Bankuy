import React from 'react';
import { purpleBall, greenBall, bg, curveLine, curveLine2, people, star, star2} from "../assests/assets";
import { motion } from "framer-motion";

export default function Bg() {

  return (
    <div className='h-fit w-full relative md:mt-20 pb-14'>
    <img src={purpleBall} className='sm:w-1/2 absolute sm:left-[-20%] left-[-40%] z-10'/>
    <img src={greenBall} className='sm:w-1/3 w-1/2 absolute lg:left-[30%] lg:top-[20%] 
    left-24 bottom-5 sm:left-64 sm:-bottom-60'/>
    <img src={purpleBall} className='sm:w-1/2 lg:right-[-30%] absolute lg:rotate-90 md:top-0 -bottom-60 
    -right-72'/> 
    


    <div className='grid md:grid-cols-8 grid-cols-4 justify-center items-center'>
    

    <motion.div className='col-span-4 mx-auto z-20 h-fit'
    initial={{opacity:0, x:-100}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.8,delay:0.8}}
    >
    <img src={bg} className='w-[500px] lg:left-[14%] lg:relative mb-16 sm:mb-0'/>
    </motion.div>
    
   
    <motion.div className='col-span-4 relative mx-10'
    initial={{opacity:0, x:100}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.5,delay:0.5}}
    >

    <img src={star} className='inline-block absolute lg:-top-8 lg:left-96 bottom-64 left-[85%] max-md:w-[10%]'/>
    <img src={star2} className='inline-block absolute lg:-top-16 lg:left-80 left-[95%] max-md:w-[8%] '/> 

    <h1 className='lg:text-6xl md:text-4xl text-3xl text-white text-wrap text-center md:text-start'><span className='lg:block'>Creating The </span>
    Future With Digital Banking.</h1>
    <p className='lg:text-2xl md:text-xl text-lg text-slate-500 text-wrap text-center md:text-start leading-[-25px] mt-5'>Quisque congue sem nisi, eget bibendum quam tristique In commodo dolor sed.</p>
    <div className='flex justify-center md:justify-start items-center gap-5 mt-9'>
    <img src={people} /> <p className='lg:text-3xl md:text-2xl text-xl font-semibold text-white lg:ms-10'>3.45M <br /> Members</p>
    </div>
    </motion.div>

    </div>


    <img src={curveLine} className='absolute top-0 '/>
    <img src={curveLine2} className='absolute top-0 max-md:-top-full rotate-90 lg:rotate-0'/>
    
    </div>

  )
}
