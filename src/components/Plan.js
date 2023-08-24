import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";
import { mainVariant } from "./AnimationVarient";

export default function Plan() {

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


    <div className='flex flex-col items-center justify-center w-full'>

    <motion.div className='w-2/3'
    variants={mainVariant}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:0.7}}
    >
    <h1 className='text-white md:text-5xl text-3xl font-semibold w-full mb-5 text-center'>Choose Your Plan</h1>
    <p className='text-zinc-500 md:text-2xl text-xl w-full text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </motion.div>
    </div>

    <div className='mt-10 grid grid-cols-9 justify-center items-center md:border-t md:border-t-violet-500'>

    <motion.div className='md:col-span-3 col-span-9 md:px-7 pb-3 md:ps-5 text-start md:border-r md:border-r-green-300
     border-t border-t-violet-500 md:border-t-0'
     variants={mainVariant}
     initial='hidden'
     animate={mainControls}
    transition={{duration:0.8, delay:0.9}}
     >
    <h1 className='text-white sm:text-5xl text-4xl my-8'> $39 <span className='text-zinc-500 text-2xl px-1'>/ Month</span></h1>
    <h1 className='text-white sm:text-3xl text-2xl mb-7 w-full'>Silver Plan</h1>
    <p className='text-zinc-500 text-xl mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button className='border border-violet-500 text-violet-500 rounded-full py-3 px-5 my-4 text-xl hover:bg-violet-500 hover:text-white'>Learn More</button>
    </motion.div>



    <motion.div className='md:col-span-3 col-span-9 md:px-7 pb-3 md:ps-5 text-start md:border-r md:border-r-green-300
     border-t border-t-violet-500 md:border-t-0'
     variants={mainVariant}
     initial='hidden'
     animate={mainControls}
    transition={{duration:0.8, delay:1.2}}
     >
    <h1 className='text-white sm:text-5xl text-4xl my-8'> $49 <span className='text-zinc-500 text-2xl px-1'>/ Month</span> </h1>
    <h1 className='text-white sm:text-3xl text-2xl mb-7 w-full'>Gold Plan</h1>
    <p className='text-zinc-500 text-xl mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button className='border border-violet-500 text-violet-500 rounded-full py-3 px-5 my-4 text-xl hover:bg-violet-500 hover:text-white'>Learn More</button>
    </motion.div>



    <motion.div className='md:col-span-3 col-span-9 md:px-7 pb-3 text-start border-t border-t-violet-500 md:border-t-0'
    variants={mainVariant}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.8, delay:1.5}}>
    <h1 className='text-white sm:text-5xl text-4xl my-8'>$59 <span className='text-zinc-500 text-2xl px-1'>/ Month</span></h1>
    <h1 className='text-white sm:text-3xl text-2xl mb-7 w-full'>Platinum Plan</h1>
    <p className='text-zinc-500 text-xl mb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <button className='border border-violet-500 text-violet-500 rounded-full py-3 px-5 my-4 text-xl hover:bg-violet-500 hover:text-white'>Learn More</button>
    </motion.div>


    </div>   
    </div>
  )
}
