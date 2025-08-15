import Clock from '@/components/Clock'
import Contact from '@/components/Contact'
import Partner from '@/components/Partner'
import Policy from '@/components/Policy'
import Link from 'next/link'
import React from 'react'
import { FaShip, FaTools, FaCogs, FaUserTie, FaRegCompass } from 'react-icons/fa'
import { GiCargoShip } from 'react-icons/gi'

function page() {
  return (
    <div > 
      <div 
          style={{
            backgroundImage: 'url(/vessel/sts.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backgroundBlendMode: 'darken',
          }}
          className='md:h-[90vh] md:flex'>
      <div className="md:w-1/2 items-center justify-center md:px-10 px-3  md:pl-30 md:pt-30 bg-black/50 md:text-left py-20">
        <p className=" sm:text-3xl justify-center text-xl font-semibold mb-4 md:mb-4">
          Services
        </p>
        <p className="text-3xl text-green-700 sm:text-6xl font-bold mb-8">
          We Specialize 
        </p>
        <p className="uppercase text-sm md:font-semibold mb-4">
          We are dedicated to providing a wide range of safe & compliant marine services, including:
        </p>  
        <p className="">
        </p>
      </div>
      <div className="md:w-1/2 py-10 flex flex-col md:text-left space-y-2 md:pl-40 font-medium md:pt-30 ">
      <p className="md:hidden mb-5 text-green-700 text-xl font-extrabold">WHAT WE DO</p>
      <Link href={"/sts"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Ship-to-Ship Operations
          </Link>
          <Link href={"#manning"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Manning
          </Link>
          <Link href={"#marineservice"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Marine Services
          </Link>
          <Link href={"#turnkeyequipmentsolution"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Turnkey Equipment Solutions
          </Link>
          <Link href={"#marineconsultancy"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Marine Consultancy 
          </Link>
          <Link href={"#technicalservice"} className="hover:transform hover:scale-120 transition duration-500 ease-in-out">
            Technical Service
          </Link>
      </div>
      </div>
      <Contact />
      <section id='sts' className="h-auto flex shadow-gray-500 flex-col py-10 md:px-50 md:py-20 md:space-y-7 space-y-5 justify-center items-center text-center">
        <FaShip size={60} color="" className='text-green-900' />
        <p className="text-2xl font-medium text-blue-950">SHIP-TO-SHIP OPERATION</p>
        <p className="">
          Atlantic Fenders & Support Services (AFSS) offer a safe, efficient, and internationally compliant Ship-to-Ship (STS) transfer operations across key West African anchorages. Our STS services are tailored to support the transfer of crude oil, refined petroleum products, LPG, and other cargo between vessels at sea or at anchorage...
        </p>
        <Link href={'/sts'} className="bg-blue-950 py-2 px-1 w-50 text-center justify-center items-center rounded-md text-white mt-7 hover:scale-120 transition duration-500 ease-in-out">More Inside...</Link>
      </section>
      
      <div id='manning'
          style={{
            backgroundImage: 'url(/vessel/sts.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backgroundBlendMode: 'darken',
          }}
          className='h-auto flex flex-col md:mb-10 py-8 md:px-20 px-2 space-y-5  items-center text-center'>
          <FaUserTie size={60} color="" className='text-gray-200' />
        <p className="text-2xl mb-10  font-medium text-white">MANNING</p>
        <div className="space-y-5 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 justify-center md:space-x-5">
        <div className=" hover:text-gray-300 p-5 rounded-md shadow-lg">
        <p className="text-gray-300 text-xl font-medium mb-3">POAC’s Hire</p>
        <p className="text-left">
          Our internationally certified POAC s bring over a decade of mooring expertise across the Gulf of Guinea. Skilled in handling vessels ranging from Handymax to ULCC, our team has successfully executed over 3,000 STS operations with zero incidents, demonstrating unmatched reliability and professionalism.
        </p>
        </div>
        <div className='h-auto p-5 text-sm hover:text-gray-300 rounded-md shadow-lg'>
        <p className="text-gray-300 text-xl font-medium mb-3">Crew Management</p>
        <p className="text-left">At Atlantic Fenders & Support Services (AFSS), we offer reliable crew management solutions    designed to meet the operational demands of the marine and offshore industry. We recruit, deploy, and manage qualified and certified seafarers who meet both international standards and client-specific requirements</p>
        <div className="">
          <p className="mt-10 mb-3 text-gray-300 text-xl">Our crew management services include:</p>
          <ul className="text-left">
            <li>Selection and recruitment of skilled marine personnel</li>
            <li>Contract management and payroll services</li>
            <li>Compliance with STCW, MLC, and flag-state requirements</li>
            <li>Onboarding, briefing, and crew rotation planning</li>
            <li>Performance monitoring and training support</li>
          </ul>
          <p className="text-left mt-4">With a strong focus on safety, competence, and professionalism, AFSS ensures that every crew member onboard is prepared to deliver efficient and compliant operations whether for vessel supply, offshore logistics, or ship-to-ship transfers.</p>
        </div>
        </div>
        </div>

      </div>



      <section id='marineservice' className="h-auto flex shadow-gray-500 flex-col py-10 md:px-20 px-4 space-y-5 justify-center items-center text-center">
        <GiCargoShip size={60} color="" className='text-green-900' />
        <p className="text-2xl mb-10 md:mb-15 font-medium text-blue-950">MARINE SERVICES</p>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 justify-center md:space-x-5 text-sm">
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Boat Service</p>
        <p className="">
          We operate covered fast boats for secure personnel transfers and specialized open boats for delivering lightweight spares and provisions. Our boat services are designed to ensure prompt, safe, and reliable operations.
        </p>
        </div>
        <div className='hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm'>
        <p className="text-green-700 text-xl font-medium mb-3">Towage Service</p>
        <p className="">AFSS provides reliable coastal and long-distance deep-sea towing solutions, emphasizing safety, efficiency, and operational flexibility. Our diverse fleet of tugs, including offshore vessels with up to 61 tons of bollard pull, supports a wide range of towing needs — from vessel assistance to the transport of offshore modules. Our offshore teams are highly experienced and maintain an exceptional safety track record.</p>
        </div>
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Buoy & SPM Support Services</p>
        <p className="">AFSS supports offshore mooring operations by providing tug-assisted positioning and mooring of tankers to buoys and SPM systems. We also offer offshore support services, including deck space and logistics support for third-party teams conducting buoy maintenance. With a strong focus on safety and reliability, our team ensures your buoy and SPM operations are smooth, secure, and professionally executed.</p>
        </div>
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Marine Security (MOU-Based)</p>
        <p className="">Atlantic Fenders & Support Services (AFSS) provides marine security solutions under a valid Memorandum of Understanding (MOU) with licensed government security agencies. Through this collaboration, we ensure the safe escort, protection, and monitoring of offshore operations, vessel movements, and critical assets. Our security framework is compliant with regional maritime regulations and international best practices, offering clients peace of mind in high-risk or sensitive maritime zones.</p>
        </div>
        </div>
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 md:mx-70 mb-5 rounded-md shadow-lg text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Warehousing & Logistics Services</p>
        <p className="">We offer adaptable and secure storage solutions supported by state-of-the-art warehousing facilities. Our trained staff adhere strictly to HSSE (Health, Safety, Security, and Environment) standards. By working closely with clients, we ensure logistical precision that aligns with their timelines and operational requirements.</p>
        </div>
      </section>
      <Clock />
      <section id='turnkeyequipmentsolution' className="h-auto flex shadow-gray-500 flex-col py-10 md:px-20 px-4 space-y-5 justify-center items-center text-center">
        <FaTools size={60} color="" className='text-green-900' />
        <p className="text-2xl mb-10 md:mb-15 font-medium text-blue-950">TURNKEY EQUIPMENT SOLUTION</p>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 justify-center md:space-x-5 text-sm">
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Equipment Hire & Sale</p>
        <p className="">
        We offer a wide range of Pneumatic Fenders and Marine Hoses for lease and sale. All equipment is securely stored on-site and readily available for waterborne transport.
        </p>
        </div>
        <div className='hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm'>
        <p className="text-green-700 text-xl font-medium mb-3">Equipment Assistance</p>
        <p className="">We uphold operational excellence through meticulous maintenance planning for all STS equipment, ensuring continuous performance and reliability.</p>
        </div>
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Pressure Testing & Annual Re- Certification </p>
        <p className="">In accordance with manufacturers' guidelines and OCIMF standards, we conduct pressure testing and annual equipment re-certification to maintain compliance and safety.</p>
        </div>
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Maintenance Service</p>
        <p className="">Our expert maintenance team addresses all your pneumatic fender and marine hose servicing needs. We offer inspection, repair, and maintenance services designed to maximize the longevity and performance of your equipment. Comprehensive service contracts are also available to ensure consistent operational readiness.</p>
        </div>
        </div>
      </section>
      <section id='marineconsultancy'
                style={{
                  backgroundImage: 'url(/images/app.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  backgroundBlendMode: 'darken',
                }}
      className="h-auto flex w-full text-white flex-col py-8 md:px-50 p-10 md:py-15 md:space-y-7 space-y-5 justify-center items-center text-center">
        <div className=' p-4' >
          <div className="flex justify-center items-center">
            <FaRegCompass size={64} color="gray" />
            </div>
        <p className="text-2xl mb-2 md:mb-0 font-medium text-green-500 py-4">MARINE CONSULTANCY</p>
        <div className="">
          <p className="font-semibold text-xl mb-3 text-gray-300">Optimoor & Compatibility Services</p>
          <p className="">
          We offer complete Optimoor and Compatibility Services, from the development of custom Mooring Plans to the delivery of professionally prepared reports. These reports are formally acknowledged by stakeholders, ensuring alignment with operational and safety expectations. Our experienced Mooring Masters, each with over 10 years of field expertise, guarantee industry-compliant and reliable solutions for vessels of all sizes
        </p>
        </div>
        </div>
      </section>
      <section id='technicalservice'
      className="h-auto flex shadow-gray-500 flex-col py-10 md:px-20 px-4 space-y-5 justify-center items-center text-center">
        <FaCogs size={60} color="" className='text-green-900' />
        <p className="text-2xl mb-3 md:mb-0 font-medium text-blue-950">TECHNICAL SERVICE</p>
        <div className=" p-5 md:mx-30 mb-7 rounded-md shadow-lg text-sm">
        <p className="">AFSS Technical Services unit is responsible for ensuring the safe and efficient operation of our vessels, shore base equipment, and other assets. Our team of experts provides a range of technical services, including maintenance, dry docking, and ship repairs, as well as procurement and leasing of equipment and spare parts.</p>
        </div>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 justify-center md:space-x-5 text-sm">
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Vessel Maintenance</p>
        <p className="">Our team provides routine and corrective maintenance services to ensure our vessels are seaworthy and operate efficiently. </p>
        </div>
        <div className='hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm'>
        <p className="text-green-700 text-xl font-medium mb-3">Shore Base Equipment Maintenance</p>
        <p className="">We maintain and repair our shore base equipment, including cranes, forklifts, and other heavy machinery.</p>
        </div>
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Dry Docking & Ship Repairs</p>
        <p className="">AFSS manages dry docking and ship repair projects with a focus on quality, speed, and safety—minimizing downtime and getting vessels back in service efficiently</p>
        </div>
        <div className="hover:scale-110 transition duration-500 ease-in-out hover:bg-green-100 p-5 rounded-md shadow-lg hover:text-sm">
        <p className="text-green-700 text-xl font-medium mb-3">Technical Support & Training</p>
        <p className="">Our technical team provides hands-on support and continuous training to ensure our personnel are equipped with the skills and knowledge to perform effectively and safely</p>
        </div>
        </div>
      </section>
      <Partner />
      <Policy />
    </div>
    
  )
}

export default page