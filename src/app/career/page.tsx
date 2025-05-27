import Contact from '@/components/Contact';
import Link from 'next/link';
import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

async function page() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tenants/${process.env.NEXT_PUBLIC_TENANT_ID}/external/vacancies`, {
    headers: { Accept: 'application/json' }
  });
  const data = await res.json();
  const vacancies = data.data || [];

  return (
    <div className='justify-center items-center'>
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
        <p className=" md:text-3xl md:text-left justify-center text-sm text-center font-semibold mb-4 md:mb-4">
          Career Opportunities
        </p>
        <p className="md:text-3xl md:text-left text-green-800  text-center sm:text-6xl font-bold mb-8">
          WHY CHOOSE US? 
        </p>
        <p className="md:text-sm text-center md:text-left px-5 md:px-0 md:font-medium mb-5">
        At Atlantic Fenders and Support Services Ltd, we understand that the marine industry comes with its unique challenges and demands. While we take pride in the hard work and dedication of our team, we also recognize the importance of maintaining a healthy work-life balance to ensure our employees thrive both professionally and personally.
        As a company operating in the marine sector, we offer exciting and dynamic opportunities where you can build a fulfilling career while enjoying the freedom to recharge and pursue your passions outside of work.
        </p>  
      </div>
      <div className="md:2/3 text-center md:text-left pt-8 pb-10 md:pb-0 md:pt-20 md:pl-20 px-4 md:pr-20 space-y-8 md:space-y-5 md:mb-0">
        <div className="">
          <p className="text-gray-400 font-bold md:text-2xl text-xl text-center mb-3">
           Work-Life Balance 
          </p>
          <h2 className="px-5 md:px-0">
          We know that life at sea or onshore can be demanding, but we are committed to supporting our employees’ well-being. We offer flexible schedules, generous time off, and opportunities for employees to balance their professional duties with personal time—whether at home, with family, or enjoying the outdoors.
          </h2>
        </div>
        <div className="">
          <p className="text-gray-400 font-bold md:text-2xl text-xl text-center mb-3">
          Supportive Environment 
          </p>
          <h2 className="px-5 md:px-0">
          The marine industry can be tough, but at Atlantic Fenders and Support Services Ltd, we emphasize a culture of care and support for each team member. From team-building activities to mental health resources, we aim to make sure that our employees have the tools and support they need to succeed without burnout.
          </h2>
        </div>
        <div className="">
          <p className="text-gray-400 font-bold md:text-2xl text-xl text-center mb-3">
           Career Growth & Development 
          </p>
          <h2 className="px-5 md:px-0">
          As a learning Organization, alongside our commitment to work-life balance, we provide numerous opportunities for career development, training, and advancement. Whether you’re navigating a new challenge on deck or your skills in the office, we want to help you reach your full potential
          </h2>
        </div>
        </div>
      </div>
      <Contact />
      <div className=" md:flex-row justify-center py-10 px-2 items-center bg-gray-100 md:px-30 gap-8">
        <p className="text-blue-600 font-bold px-10 md:text-2xl text-xl text-center mb-8">
        Ready to Join Us? <strong className='text-sm text-green-600 px-2 py-2 bg-amber-50 rounded-md'>You've got the Green-Light</strong>
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 space-x-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="md:w-1/3 h-auto px-10 md:py-20 md:text-sm rounded-full bg-gray-200 hover:bg-blue-100 py-15">
        <p className="text-center font-semibold mb-3 text-xl text-blue-900">Join Us and Find Your Balance</p>
          <h2 className="text-center mb-8">
          Atlantic Fenders and Support Services your career is not just about the work you do; it’s about the life you live. We strive to create an environment where you can thrive professionally, all while making time for the things and people that matter most to you. Explore our current career opportunities and take the next step in a fulfilling, balanced career with Atlantic Fenders and Support Services Ltd.
          </h2>
          <p className="font-semibold mb-4 text-center text-blue-800">Job listings and application instructions</p>
          <ul className='md:list-disc text-center md:text-left space-y-2 md:pl-10 text-xs font-semibold'>
            <li>Captain</li>
            <li>Mooring Master</li>
            <li>Chief Engineer</li>
            <li>Second Engineer</li>
            <li>Electrical Engineer</li>
            <li>Bosun</li>
            <li>Oiler</li>
            <li>Able Seaman</li>
          </ul>
        </div>
        <div className="md:w-1/3 h-auto md:px-10 mx-2 md:text-sm rounded-full justify-center items-center bg-blue-100 hover:bg-gray-300 py-23">
          <p className="text-center font-semibold text-xl px-5 md:px-0 mb-3 text-blue-900">Our Commitment to Your Well-Being</p>
          <h2 className="text-center mb-5 px-8 md:px-0">
          We know that the nature of our work can sometimes involve long hours or extended time away from home. That’s why we offer structured schedules that allow our crew members to enjoy time off and resting hours, as well as flexible onshore roles that provide more routine working hours
          </h2>
          <p className="font-semibold text-center mb-5 text-blue-800">Benefits of Working with Us</p>
          <ul className="md:list-disc space-y-2 px-10 md:px-0">
            <li className=""><strong>Flexible Schedules: </strong>Whether you’re onshore or offshore, we provide flexible work arrangements to give you the time you need for family, recreation, and self-care.</li>
            <li className=""><strong>Paid Time Off: </strong>We offer generous leave policies, ensuring that you have time to unwind and focus on personal priorities.</li>
            <li className=""><strong>Family Support: </strong>We believe in supporting families and offer various programs to help with family care needs while balancing work responsibilities.</li>
            <li className=""><strong>Wellness Programs: </strong>From physical fitness support to mental health resources, we prioritize the well-being of our team, helping you stay healthy and energized.</li>
          </ul>
        </div>

        <div className="md:w-1/3 h-[80vh] hover:bg-blue-100 md:px-10 md:pt-23 md:text-sm rounded-full justify-center px-8 bg-gray-200 py-15 md:pl-10">
        <p className="text-center font-semibold mb-3 text-xl text-blue-900 pt-15 md:pt-0">HR Contact & Support</p>
          <h2 className="text-center mb-8">
          We are committed to supporting our employees at every stage of their careers. Whether you're looking to join our team, need assistance with HR-related inquiries, or require support during your time with us, our dedicated HR team is here to help.
          </h2>
          <div className="items-center text-center justify-center space-x-2">
          <div className="flex items-center justify-center space-x-2 mb-1">
          <FaEnvelope size={20} color='gray' />
          <p className="hover:underline text-blue-800">hr@atlanticfenders.com</p>
         </div>
         <p className=" justify-center items-center font-bold">General HR Inquiries</p>
         </div>
        </div>
        </div>
      </div>
      <div className="py-10 px-4 md:px-20 items-center justify-center bg-gray-300 text-center">
      <h1 className="text-xl font-bold mb-4">Job Board</h1>
      {vacancies.length === 0 ? (
        <p>No vacancies at the moment. Please check back later.</p>
      ) : (
        <ul>
          {vacancies.map((vacancy: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
            <li key={vacancy.id} className="mb-4">
              <h3>{vacancy.title}</h3>
              <p>{vacancy.description}</p>
              <Link href={`/apply/${vacancy.id}`} className="text-blue-600 underline">Apply Now</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  )
}

export default page