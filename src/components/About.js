import React, { useEffect, useRef } from 'react';
import { creditCard, purpleBall } from "../assests/assets";
import { motion, useInView, useAnimation } from "framer-motion";
import { mainVariant, itemVariantRight, itemVariantLeft } from "./AnimationVarient";

export default function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])


  return (
    <div ref={ref} className='py-10 md:mx-24 mx-10 relative'>
    <div className='grid sm:grid-cols-4 grid-cols-2 gap-8 justify-center items-center'>

    <motion.div className='col-span-2 max-sm:row-start-3 z-10' 
    variants={itemVariantRight}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:0.7}}
    >
    <h1 className='max-sm:w1/2 text-white text-center md:text-start font-semibold md:text-5xl text-3xl'>Designed FromThe Ground Up To Protect Privacy</h1>
    <p className='text-zinc-400 text-center md:text-start mt-8 lg:text-2xl text-xl text-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    <p className='text-zinc-400 text-center md:text-start mt-8 lg:text-2xl text-xl text-wrap'>Cras interdum lacus at purus ultrices, non pharetra risus</p>
    
    </motion.div>

    <motion.div className='col-span-2 max-sm:row-start-1 z-10' 
    variants={itemVariantLeft}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:0.8}}
>
    <img src={creditCard} />
    
    </motion.div>

    <img src={purpleBall} className='absolute -right-[60%] md:-top-10 rotate-180 opacity-30' />
    
    
    </div>    
    </div>
  )
}
