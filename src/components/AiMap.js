import React, { useEffect, useRef } from 'react';
import{ map, diagram, greenBall, curveLine, curveLine2 } from "../assests/assets";
import { motion, useInView, useAnimation } from "framer-motion";
import { mainVariant } from "./AnimationVarient";


export default function AiMap() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])

  return (


    <div ref={ref} className='py-16 lg:mx-24 mx-10 relative'>
    
    <img src={greenBall} className='absolute -right-96 md:opacity-100 opacity-70'/>

    <motion.div className='flex flex-col justify-center items-center relative overflow-hidden md:mx-10'
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:1.4}}
    >
    



    <img src={curveLine} className='absolute rotate-90 md:bottom-1 opacity-40' />
    <img src={curveLine2} className='absolute rotate-90 md:bottom-1 opacity-40' />



    <h1 className='sm:text-4xl text-2xl text-white text-center md:w-2/3 font-semibold mb-10 z-10'>
    Our Artificial-Intelligence Helps You Manage Your Money Efficiently</h1>

    <img src={diagram} className='hidden md:flex w-full mt-20 z-10'/>
    <img src={map} className='flex md:hidden w-full mt-20 z-10'/>

    </motion.div>

    </div>
  )
}
