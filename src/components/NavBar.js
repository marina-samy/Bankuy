import React from 'react';
import { Navbar } from 'flowbite-react';
import { logo } from '../assests/assets';

export default function NavBar() {

    return (
        <Navbar
          fluid
          className='bg-gray-950 mx-24 pt-5 -mb-5'
          data-aos="fade-up"
        >
          <Navbar.Brand href="https://flowbite-react.com">
            <img
              alt="Flowbite React Logo"
              className="mr-3 h-6 sm:h-9"
              src={logo}
            />
            
          </Navbar.Brand>
          <div className="flex md:order-2">
            <button className='bg-tranparent p-3 md:px-6 md:py-3 border border-purple-600 rounded-full text-purple-600
             hover:bg-violet-800 hover:text-white focus:bg-violet-800 hover:text-white text-lg'>
              Get Started
            </button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link
              active
              href="#"
            >
              <p className='text-purple-600 hover:text-purple-600 text-lg'>
                Home
              </p>
            </Navbar.Link>
            <Navbar.Link href="#">
            <p className='text-white hover:text-purple-600 text-lg'>
            About
            </p>
            </Navbar.Link>
            <Navbar.Link href="#">
            <p className='text-white hover:text-purple-600 text-lg'>
            Services
            </p>
            </Navbar.Link>
            <Navbar.Link href="#">
            <p className='text-white hover:text-purple-600 text-lg'>
            Contact
            </p>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      )
}
