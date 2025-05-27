"use client";

import React, { useEffect, useState } from 'react'
import Contact from '@/components/Contact'
import Policy from '@/components/Policy';
import Link from 'next/link';
import Clock from '@/components/Clock';


const messages = [
  {
    title: 'Mission',
    content:
      'Atlantic Fenders and Support Services, we strive to deliver reliable, innovative, and customer focused marine services that add value to our client while upholding the highest standards of safety, integrity, and professionalism.',
  },
  {
    title: 'Vision',
    content:
      "To become west Africa's most trusted and responsive provider of integrated maritime and offshore support services - delivering operational excellence in a safe and environmentally sound manner.",
  },
  {
    title: 'Core Values',
    content:
      'Professionalism, Integrity, Teamwork, Customer Focus, Health & Safety',
  },
];

function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 7000) 

    return () => clearInterval(interval)
  }, [])

  const currentMessage = messages[currentIndex]

  return (
    <div className=''>
      <div
        style={{
          backgroundImage: 'url(/vessel/spmops.jpg)',
          height: '90vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          textAlign: 'center',
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backgroundBlendMode: 'darken',
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <h2 className='text-3xl md:text-5xl font-serif sm:text-4xl font-extrabold mb-4'>
            {currentMessage.title}
          </h2>
          <p className='text-sm'>{currentMessage.content}</p>
        </div>
      </div>
      < Contact />
      <div 
              style={{
                backgroundImage: 'url(/vessel/catherine2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center',
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backgroundBlendMode: 'darken',
              }}
      className='md:h-[70vh] h-auto justify-between flex flex-row space-x-10 md:space-x-40 items-center'>
        <div><p className=" text-2xl md:text-4xl font-semibold mb-2 text-left">
          We Specialize In
        </p>
        <p className="mb-5 md:text-4xl text-left text-green-700 text-xl font-extrabold">WHAT WE DO</p>
        </div>
        <div className="md:w-1/2 py-10 flex flex-col text-left space-y-2 md:pl-40 font-medium md:pt-30 ">
          <Link href={"/sts"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Ship to Ship Operations
          </Link>
          <Link href={"/services#manning"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Manning
          </Link>
          <Link href={"/services#marineservice"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Marine Services
          </Link>
          <Link href={"/services#turnkeyequipmentsolution"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Turnkey Equipment Solutions
          </Link>
          <Link href={"/services#marineconsultancy"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Marine Consultancy 
          </Link>
          <Link href={"/services#technicalservice"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Technical Service
          </Link>
      </div>
      </div>
      <Clock />
     <Policy />
    </div>
  )
}

export default Page
