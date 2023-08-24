import React, { useEffect, useRef } from 'react';
import { c1, c2, c3, purpleBall, greenBall, feat } from "../assests/assets";
import { motion, useInView, useAnimation } from "framer-motion";
import { mainVariant } from "./AnimationVarient";

export default function Features() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])


  return (
    <section ref={ref} className='w-full my-10 py-20 bg-gray-900 rounded-2xl'>
    
    <div className='mx-24 grid lg:grid-cols-6 grid-cols-4 gap-4 justify-center items-center'>
    

    <img src={purpleBall} className='absolute -left-[40%] blur-md'/>


    <div className='col-span-4 lg:col-span-2 my-10 lg:my-0 flex lg:flex-col 
    justify-center items-center relative'>
    <motion.img src={c1} className='z-10 col-start-2 h-[200px] hidden lg:flex'
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.8, delay: 1.7 }}
    />
    <motion.img src={c2} className='z-20 lg:-mt-3 lg:col-start-1 h-[200px] me-5 hidden lg:flex' 
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.8, delay:1.9}}
    />
    <motion.img src={c3} className='z-30 lg:-mt-3 lg:col-start-2 h-[200px] hidden lg:flex' 
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.8, delay:2}}
    />

    <motion.img src={feat} className='z-10 w-full flex lg:hidden'
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:2.1}}
    />
    
    </div>

    <div className='col-span-4 relative'>
    <img src={greenBall} className='absolute -top-80 rotate-180 blur-md'/>

    <motion.h1 className='sm:text-5xl text-3xl text-white lg:w-2/3 lg:text-start text-center mb-10' 
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:0.8}}>Let's Get To Know Bankuy's Features</motion.h1> 
    
    <div className='flex md:flex-row flex-col items-center md:justify-start md:border-b-2 md:border-b-violet-500'>

    <motion.div className='py-10 border-t-2 border-t-violet-500 md:border-t-0' 
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:0.9}}
    >
    <h2 className='text-3xl text-white md:text-start text-center pb-5'>Personal Finance</h2>
    <p className='text-xl text-zinc-400 md:text-start text-center'>Gives you the freedom to manage your finances.</p>
    </motion.div>

    <motion.div className='py-10 md:ps-10 md:border-s-2 md:border-l-green-300 border-t-2 border-t-violet-500 md:border-t-0'
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:1.2}}>
    <h2 className='text-3xl text-white  md:text-start text-center pb-5 text-center'>Smart Banking</h2>
    <p className='text-xl text-zinc-400  md:text-start text-center'>Gives you the freedom to manage your finances.</p>
    </motion.div>
    
    </div>

    <div className='flex md:flex-row flex-col items-center md:justify-start'>
    
    <motion.div className='py-10 border-t-2 border-t-violet-500 md:border-t-0' 
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:1.4}}
    >
    <h2 className='text-3xl md:text-start text-center text-white pb-5'>Card Management</h2>
    <p className='text-xl md:text-start text-center  text-zinc-400'>Gives you the freedom to manage your finances.</p>
    </motion.div>

    <motion.div className='py-10 md:ps-10 md:border-s-2 md:border-l-green-300 border-t-2 border-t-violet-500 md:border-t-0'
    variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:1.6}}
    >
    <h2 className='text-3xl text-white pb-5 md:text-start text-center'>Multi Platform</h2>
    <p className='text-xl text-zinc-400 md:text-start text-center'>Gives you the freedom to manage your finances.</p>
    </motion.div>
    
    </div>

    </div>

    </div>

    </section>
  )
}



