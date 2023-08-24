import React from 'react';
import { logo, purpleBall, greenBall } from '../assests/assets';
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <section className='w-full mt-14 pb-10 pt-20 bg-gray-900 rounded-2xl relative overflow-hidden mb-0'>

    <img src={purpleBall} className='absolute blur-md bottom-32 w-1/2 -right-[20%]'/>
    <img src={greenBall} className='absolute blur-md -left-20 -bottom-60'/>

    <div className='mx-24 relative'>
    <div className='flex md:flex-row flex-col md:justify-between md:items-start justify-center items-center'>
    <h1 className='mb-5 text-white w-full md:w-1/2 md:text-5xl text-3xl text-center md:text-start'>Unlock Your Future Digital Banking With Bankuy</h1>
    <button className='px-6 py-4 md:text-2xl text-xl text-gray-900 bg-white rounded-full
     hover:bg-violet-500'>Start Creating</button>
    </div>

    <div className='flex md:flex-row flex-col md:justify-between md:items-start justify-around items-center mt-20 
    border-b border-b-violet-500'>

    <div className='md:w-1/2'><img src={logo} className='mb-4 md:w-1/2'/></div>




    <div className='flex justify-between items-center mb-10'>
    <div className='flex justify-center items-center bg-gray-600 cursor-pointer text-white hover:bg-white hover:text-violet-700 p-4 rounded-full me-2'><BsInstagram /></div>
    <div className='flex justify-center items-center bg-gray-600 cursor-pointer text-white hover:bg-white hover:text-violet-700 p-4 rounded-full me-2'><FaFacebookF /></div>
    <div className='flex justify-center items-center bg-gray-600 cursor-pointer text-white hover:bg-white hover:text-violet-700 p-4 rounded-full me-2'><BsWhatsapp /></div>
    </div>


    </div>
    <p className='text-center text-white my-5 md:text-2xl text-xl'>© 2023 Bankuy. All Rights Reserved</p>
    </div>
    </section>
  )
}
