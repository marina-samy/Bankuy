import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { mainVariant, itemVariantRight, itemVariantLeft } from "./AnimationVarient";

export default function Info() {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView])

  return (
    <div ref={ref} className='py-20 md:mx-24 mx-10'>

    <div className='flex md:flex-row flex-col items-start md:justify-between justify-start' >
    <motion.h1 className='text-white md:text-5xl text-3xl lg:w-1/3 font-semibold w-full mb-5' 
    variants={itemVariantRight}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:0.7}}
    >How To Create A Bankuy Account</motion.h1>
    <motion.p className='text-zinc-500 md:text-2xl text-xl lg:w-1/3 w-full'
    variants={itemVariantLeft}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:0.7}}
    >Sed accumsan diam mauris sit amet odio. Phasellus sit amet varius odio, id egestas lorem. Duis venenatis elit ut auctor mattis.</motion.p>
    </div>

    <div className='mt-10 grid grid-cols-8 justify-center items-center md:border-t md:border-t-violet-500'>

    <motion.div className='md:col-span-2 sm:col-span-4 col-span-8 sm:px-5 pb-3 text-start sm:border-r sm:border-r-green-300
     border-t border-t-violet-500 md:border-t-0'
         variants={mainVariant}
        initial='hidden'
        animate={mainControls}
    transition={{duration:0.8, delay:0.8}}
     >
    <h1 className='text-white sm:text-5xl text-4xl my-7'>01</h1>
    <h1 className='text-white sm:text-3xl text-2xl mb-7 sm:w-1/2 w-full'>Prepare Document</h1>
    <p className='text-zinc-500 text-xl mb-7'>Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
    </motion.div>

    <motion.div className='md:col-span-2 sm:col-span-4 col-span-8 sm:px-5 pb-3 text-start md:border-r md:border-r-green-300
     border-t border-t-violet-500 md:border-t-0' 
     variants={mainVariant}
     initial='hidden'
     animate={mainControls}
    transition={{duration:0.8, delay:1.3}}
     >
    <h1 className='text-white sm:text-5xl text-4xl my-7'>02</h1>
    <h1 className='text-white sm:text-3xl text-2xl mb-7 sm:w-1/2 w-full'>Online Verification</h1>
    <p className='text-zinc-500 text-xl mb-7'>Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
    </motion.div>

    <motion.div className='md:col-span-2 sm:col-span-4 col-span-8 sm:px-5 pb-3 text-start md:border-r-0 sm:border-r
     sm:border-r-green-300 border-t border-t-violet-500 md:border-t-0'
     variants={mainVariant}
     initial='hidden'
     animate={mainControls}
    transition={{duration:0.8, delay:1.6}}
     >
    <h1 className='text-white sm:text-5xl text-4xl my-7'>03</h1>
    <h1 className='text-white sm:text-3xl text-2xl mb-7 sm:w-1/2 w-full'>Setup Account</h1>
    <p className='text-zinc-500 text-xl mb-7'>Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
    </motion.div>

    <motion.div className='md:col-span-2 sm:col-span-4 col-span-8 sm:px-5 pb-3 text-start md:border-s md:border-l-green-300
     border-t border-t-violet-500 md:border-t-0' 
     variants={mainVariant}
     initial='hidden'
     animate={mainControls}
    transition={{duration:0.8, delay:1.9}}
     >
    <h1 className='text-white sm:text-5xl text-4xl my-7'>04</h1>
    <h1 className='text-white sm:text-3xl text-2xl mb-7 sm:w-2/3 w-full'>Enjoy Your Future</h1>
    <p className='text-zinc-500 text-xl mb-7'>Pharetra risus susipi cipit. Nulla gravida, nisi et facilisis accum san diam mauris sit amet slur iyoa</p>
    </motion.div>


    </div>   
    </div>
  )
}
