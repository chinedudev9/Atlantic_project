"use client";

import React, { useEffect, useState } from 'react'
import Contact from '@/components/Contact'
import Policy from '@/components/Policy';
import Link from 'next/link';
import Image from 'next/image';

const messages = [
  {
    title: 'Our Mission',
    content:
      'To eliminate operational hurdles in Ship to Ship operations and set the global benchmark in offshore support.',
  },
  {
    title: 'Our Vision',
    content:
      'To be the trusted choice for STS operation, marine logistics, equipment, and consultancy solutions—driven by reliability, efficiency, and client satisfaction.',
  },
  {
    title: 'Core Values',
    content:
      'Professionalism, Integrity, Teamwork, Customer Focus, Health & Safety',
  },
]

function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 8000) // 8 seconds

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
          <h2 className='text-3xl font-serif sm:text-4xl font-bold mb-4'>
            {currentMessage.title}
          </h2>
          <p className='font-serif' style={{ fontSize: '1.25rem' }}>{currentMessage.content}</p>
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
      <div className="w-full h-auto  flex flex-col items-center justify-center mt-10 mb-10">
      </div>
     <Policy />
    </div>
  )
}

export default Page
