import React, { useEffect, useRef } from 'react';
import { robot, purpleBall } from '../assests/assets';
import { motion, useInView, useAnimation } from "framer-motion";
import { mainVariant, itemVariantRight } from "./AnimationVarient";


export default function Count() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    <section ref={ref} className='w-full my-10 py-20 bg-gray-900 rounded-2xl relative'>

    <img src={purpleBall} className='absolute -left-[40%] md:top-[-50%] blur-md' />
    <img src={purpleBall} className='absolute -right-[40%] bottom-0 blur-md' />

    <div className='mx-24 grid lg:grid-cols-7 grid-cols-5 gap-4 justify-center items-center'>
    <div className='md:col-span-4 col-span-5'>
    <motion.h1 className='md:text-start text-center text-white md:text-5xl text-3xl mb-10' 
    variants={mainVariant}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:1}}>The Next Generation of Banking</motion.h1>

    <div className='flex justify-center items-center'>

    <motion.div className='p-10 md:px-20  border-e border-e-green-300 border-b border-b-violet-500'
    variants={mainVariant}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:1.2}}
    >
    <h1 className='md:text-4xl text-2xl text-white font-bold mb-3 text-center'>450 K+</h1>
    <p className='text-zinc-500 text-xl text-center'>Active Members</p>
    </motion.div>

    <motion.div className='p-10 md:px-20  border-b border-b-violet-500' 
    variants={mainVariant}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:1.4}}
    >
    <h1 className='md:text-4xl text-2xl text-white font-bold mb-3 text-center'>99.5 %</h1>
    <p className='text-zinc-500 text-xl text-center'>Happy Members</p>
    </motion.div>

    </div>

    <div className='flex justify-center items-center'>
    <motion.div className='p-10 md:px-20 border-e border-e-green-300' 
    variants={mainVariant}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:1.6}}
    >
    <h1 className='md:text-4xl text-2xl text-white font-bold mb-3 text-center'>65.5 %</h1>
    <p className='text-zinc-500 text-xl text-center'>Financial Growth</p>
    </motion.div>

    <motion.div className='p-10 md:px-20'
        variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:1.8}}
    >
    <h1 className='md:text-4xl text-2xl text-white font-bold mb-3 text-center'>510 B+</h1>
    <p className='text-zinc-500 text-xl text-center'>Money Managed</p>
    </motion.div>

    </div>
    </div>

    <div className='md:col-span-3 col-span-5'>

    <motion.img src={robot} className='w-full h-[100%]' 
    variants={itemVariantRight}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:0.9}}
    />
    
    </div>

    </div>

    


    </section>
  )
}
