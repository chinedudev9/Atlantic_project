// src/components/Footer.js

import Image from 'next/image';
import Link from 'next/link';
import {  FaLinkedin, FaYoutube } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-10 h-auto text-white px-3 md:px-12 text-xs py-6">
        <div className="pb-2 md:text-3xl text-xl font-bold text-center">
          Atlantic Fenders & Support Services
        </div>

      <div className="flex pb-10 gap-4 mt-4 justify-center">
          <Link href="https://www.linkedin.com/company/atlantic-fenders-and-support-services/" className=" hover:text-white">
            <FaLinkedin size={25} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCwlwl7U73ta6afKo4ahADJQ" className=" hover:text-white">
            <FaYoutube size={25} />
          </Link>
        </div>
        <div className="justify-center items-center mt-8">
          <div className="">
            <div className=" justify-center items-center gap-2 flex">
             <MdLocationOn size={25} />
             <p className="">Head Office</p>
             </div>
             <p className="text-center px-10 text-xs">2nd Floor Eleganza House, 15 Wesley Joseph Street, Lagos Island, Lagos, Nigeria</p>
          </div>
        </div>
        <div className="flex lg:gap-[50vh] md:space-x-10 gap-x-25 sm:px-10 text-nowrap px-7 justify-center items-center mt-8 pb-20">
          <div className="items-center justify-center text-center">
             <div className="items-center justify-center flex flex-col mb-1">
             <IoCallOutline size={25} className='mb-2'/>
             <p className="">+234(0) 9044299624</p>
             <p className="">(24hrs)</p>
             </div>
          </div>
          <div className="items-center justify-center space-y-3">
             <div className="mb-5 items-center justify-center flex flex-col">
               <TfiEmail size={25} className='items-center justify-center mb-2'/>
               <p className="">sts@atlanticfenders.com</p>
             </div>
             <div className="items-center justify-center flex flex-col mb-1">
               <TfiEmail size={25} className=' mb-2'/>
               <p className="text-center">info@atlanticfenders.com</p>
              </div>
          </div>
        </div>
        <div className="flex space-x-4 md:space-x-8 justify-center items-center mt-8 pb-20">
           <Link className='hover:underline' href="/">Home</Link>
           <hr className="w-px h-4 bg-gray-400 border-0" />
           <Link className='hover:underline' href="#contact">Contact</Link>
           <hr className="w-px h-4 bg-gray-400 border-0" />
           <Link className='hover:underline' href="/services">Services</Link>
           <hr className="w-px h-4 bg-gray-400 border-0 hover:underline" />
           <Link className='hover:underline' href="/documents">Docs</Link>
          </div>

        <div className="gap-6 mb-15 flex flex-col md:flex-row md:space-y-0 space-y-4 justify-center items-center">
          <Image src={'/images/image.png'} alt={'bluestar certified'} height={100} width={150} />
          <Image src={'/images/image1.png'} alt={'bluestar certified'} height={100} width={150} />
          <Image src={'/images/image2.png'} alt={'bluestar certified'} height={100} width={150} />
        </div>

      <div className="border-t bg-gray-900 border-gray-800 bottom-0 pt-6 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Atlantic Fenders & Support Services&reg;. All rights reserved. <Link className='hover:underline text-blue-500 pl-2' href="/privacypage">Privacy & Cookie Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
