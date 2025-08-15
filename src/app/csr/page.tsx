import React from 'react'
import Image from 'next/image';
import SafetyBanner from '@/components/SafetyBanner';
import Contact from '@/components/Contact';
import Policy from '@/components/Policy';
import Clock from '@/components/Clock';

function page() {
  return (
    <div>
      <SafetyBanner />
      <div className="w-full md:h-[70vh] md:px-20 md:mt-0 md:mx-0 px-2 rounded-lg md:bg-gray-100 shadow-lg md:flex items-center">
              <div className="md:w-1/2 md:text-left md:pr-12 px-2 my-5 rounded-xl bg-gray-100 md:bg-none p-5">
                 <h1 className="md:text-5xl text-2xl font-extrabold text-red-700 mb-8">CSR</h1>
                <div>
                  <p className='text-sm'>
                    At Atlantic Fenders & Support Services, our commitment goes beyond business. We believe in creating positive, lasting impact within the communities we serve 
                  </p>
                  <p className="text-sm">Through our CSR initiatives, we support education, maritime safety awareness, local job creation, and environmental conservation</p>
                  <p className='text-sm mt-3'>We are dedicated to being a responsible corporate citizen — empowering people, protecting the environment, and promoting shared growth. </p>
                  <p className="text-sm">We believe that success is not just measured by financial achievements, but also by the positive impact we make on the environment, 
                    society, and the communities we serve.</p>
                </div>
      
              </div>
              <div className="md:w-1/2 mx-auto mb-20 md:mb-0 mt-10 md:mt-0 bg-gray-100 my-5 text-center">
              <img
              src="/images/csr.jpg"
              alt="ESG Image"
              width='500'
              height='300'
              className="w-full h-auto object-cover"
              />
              </div>
            </div>
            <Contact />
            <Clock />
            <Policy />
    </div>
  )
}

export default page