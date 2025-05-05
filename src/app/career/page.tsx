import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

function page() {
  return (
    <div className='justify-center items-center '>
      <div 
          style={{
            backgroundImage: 'url(/vessel/sts.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backgroundBlendMode: 'darken',
          }}
          className='md:h-auto md:flex w-full'>
      <div className="md:w-2/3 items-center pt-10 pb-4 justify-center px-4  md:pl-20 md:pr-5 md:pt-20 bg-black/50">
        <p className=" md:text-3xl md:text-left justify-center text-xl text-center font-semibold mb-4 md:mb-4">
          Career Opportunities
        </p>
        <p className="md:text-3xl md:text-left text-green-700 text-center sm:text-6xl font-bold mb-8">
          WHY CHOOSE US? 
        </p>
        <p className="md:text-sm md:font-medium">
        At Atlantic Fenders and Support Services Ltd, we understand that the marine industry comes with its unique challenges and demands. While we take pride in the hard work and dedication of our team, we also recognize the importance of maintaining a healthy work-life balance to ensure our employees thrive both professionally and personally.
        As a company operating in the marine sector, we offer exciting and dynamic opportunities where you can build a fulfilling career while enjoying the freedom to recharge and pursue your passions outside of work.
        </p>  
      </div>
      <div className="md:2/3 text-center md:text-left pt-8 pb-2 md:pt-20 md:pl-20 px-4 md:pr-20 space-y-8 md:space-y-5">
        <div className="">
          <p className="text-gray-300 font-bold md:text-2xl text-xl text-center mb-3">
           Work-Life Balance 
          </p>
          <h2 className="">
          We know that life at sea or onshore can be demanding, but we are committed to supporting our employees’ well-being. We offer flexible schedules, generous time off, and opportunities for employees to balance their professional duties with personal time—whether at home, with family, or enjoying the outdoors.
          </h2>
        </div>
        <div className="">
          <p className="text-gray-300 font-bold md:text-2xl text-xl text-center mb-3">
          Supportive Environment 
          </p>
          <h2 className="">
          The marine industry can be tough, but at Atlantic Fenders and Support Services Ltd, we emphasize a culture of care and support for each team member. From team-building activities to mental health resources, we aim to make sure that our employees have the tools and support they need to succeed without burnout.
          </h2>
        </div>
        <div className="">
          <p className="text-gray-300 font-bold md:text-2xl text-xl text-center mb-3">
           Career Growth & Development 
          </p>
          <h2 className="">
          As a learning Organization, alongside our commitment to work-life balance, we provide numerous opportunities for career development, training, and advancement. Whether you’re navigating a new challenge on deck or your skills in the office, we want to help you reach your full potential
          </h2>
        </div>
        </div>
      </div>
      <div className=" md:flex-row justify-center py-10 items-center bg-gray-100 md:px-30 gap-8">
        <p className="text-green-600 font-bold md:text-2xl text-xl text-center mb-3 md:mb-8">
        Ready to Join Our Team? 
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 space-x-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/3 h-auto md:px-4 md:text-sm rounded-3xl bg-gray-200 py-5 md:pl-10">
        <p className="text-center font-semibold mb-3">Join Us and Find Your Balance</p>
          <h2 className="text-center mb-8">
          At Atlantic Fenders and Support Services Ltd your career is not just about the work you do; it’s about the life you live. We strive to create an environment where you can thrive professionally, all while making time for the things and people that matter most to you. Explore our current career opportunities and take the next step in a fulfilling, balanced career with Atlantic Fenders and Support Services Ltd.
          </h2>
          <p className="">Job listings and application instructions</p>
          <ul>
            <li>Captain</li>
            <li>Mooring Master</li>
            <li>Chief Engineer</li>
            <li>Second Engineer</li>
            <li>Electrical Engineer</li>
            <li>Bosun</li>
            <li>Olier</li>
            <li>Able Seaman</li>
          </ul>
        </div>
        <div className="md:w-1/3 h-auto md:px-4 md:text-sm rounded-3xl bg-gray-200 py-5 md:pl-10">
          <p className="text-center font-semibold mb-3">Our Commitment to Your Well-Being</p>
          <h2 className="text-center mb-8">
          We know that the nature of our work can sometimes involve long hours or extended time away from home. That’s why we offer structured schedules that allow our crew members to enjoy time off and resting hours, as well as flexible onshore roles that provide more routine working hours
          </h2>
          <p className=""><span>Benefits of Working</span> at Atlantic Fenders & Support Services</p>
          <ul className="">
            <li className="">Flexible Schedules <span>Whether you’re onshore or offshore, we provide flexible work arrangements to give you the time you need for family, recreation, and self-care</span></li>
            <li className="">Paid Time Off <span>We offer generous leave policies, ensuring that you have time to unwind and focus on personal priorities.</span></li>
            <li className="">Family Support <span>We believe in supporting families and offer various programs to help with family care needs while balancing work responsibilities.</span></li>
            <li className="">Wellness Programs <span>From physical fitness support to mental health resources, we prioritize the well-being of our team, helping you stay healthy and energized.</span></li>
          </ul>
        </div>
        <div className="md:w-1/3 h-[80vh] md:px-4 md:text-sm rounded-3xl bg-gray-200 py-5 md:pl-10">
        <p className="text-center font-semibold mb-3">HR Contact & Support</p>
          <h2 className="text-center mb-8">
          At Atlantic Fenders and Support Services, we are committed to supporting our employees at every stage of their careers. Whether you're looking to join our team, need assistance with HR-related inquiries, or require support during your time with us, our dedicated HR team is here to help.
          </h2>
          <div className="items-center text-center justify-center space-x-2">
          <p className=" justify-center items-center">General HR Inquiries</p>
          <div className="flex items-center justify-center space-x-2">
          <FaEnvelope size={24} color='blue' />
          <p className="">hr@atlanticfenders.com</p>
         </div>
         </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default page