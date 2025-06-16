import React from 'react'
import Image from 'next/image';
import Policy from '@/components/Policy';
import Contact from '@/components/Contact';

function page() {
  return (
    <div>
      <div className="w-full md:px-20 px-2 p-5 bg-gray-100 rounded-lg shadow-lg flex items-center">
        <div className="w-1/2 text-left md:pr-12 mx-auto my-5">
           <h1 className="md:text-5xl text-2xl font-extrabold text-green-700 mb-8">E<span className='text-blue-600'>S</span><span className='text-orange-500'>G</span></h1>
          <div>
            <p className='text-lg text-green-700 mb-3 font-extrabold'>
              Environmental Stewardship 
            </p>
            <p className="font-bold text-[#750475]">Our Focus:</p>
            <p className='text-sm mb-5 text-gray-700'>Build a portfolio with modern, efficient assets in the right locations, staying ahead of our 
            customers’ needs, while positively impacting the environment and addressing climate 
            change risk.</p>
            <p className="font-bold text-[#750475]">Our Action</p>
            <ul className="list-disc text-sm list-item text-gray-700 space-y-2 ">
            <li className="text-sm">Achieve sustainable building certification for new development globally and incorporate cutting-edge, efficient to benefit our customers. 
              Within new development and existing assets, enable more efficient customer operations, promote the health and well-being of our customers, and deliver sustainability benefits 
              that enhance profitability and reduce environmental footprints. Some measures can 
              include responsibly sourced materials, decreased water and energy usage, lower carbon 
              footprints, and enhanced biodiversity that benefits our customers, our employees, our 
              surrounding communities, and the environment. 
            </li>
            <li>
              Seek and deploy innovative technologies to future-proof and enhance the resilience of 
              our buildings to unpredictable changes in the climate or the environment.
            </li>
            <li className="">
              Use a global Environmental Management System (EMS) that is implemented, maintained, and continually improved under the requirement of ISO 14001:2015
            </li>
            </ul>
          </div>

        </div>
        <div className="w-1/2 mx-auto my-5 text-center">
        <Image
        src="/images/esg.jpg"
        alt="ESG Image"
        width={500}
        height={300}
        className="w-full h-auto object-cover"
        />
        </div>
      </div>
      <Contact />
      <div className="w-full md:px-20 px-2 p-5 bg-gray-100 rounded-lg shadow-lg flex items-center">
        <div className="w-1/2 text-left md:pr-12 mx-auto my-5">
           <h1 className="md:text-5xl text-2xl font-extrabold text-green-700 mb-8">E<span className='text-blue-600'>S</span><span className='text-orange-500'>G</span></h1>
            <p className='text-lg text-blue-600 mb-3 font-extrabold'>
              Social Responsibility
            </p>
            <p className="font-bold text-[#750475]">Our Focus:</p>
            <p className='text-sm mb-5 text-gray-700'>Deepen relationships with our key stakeholders by investing in our employees and partnering with our customers, communities, investors, and suppliers. 
            </p>
            <p className="font-bold text-[#750475]">Our Action</p>
            <ul className="list-disc text-sm list-item text-gray-700 space-y-2 ">
            <li className="text-sm">Engage with our employees to provide a challenging, dynamic, inclusive, and diverse 
              work environment that supports their professional development, as well as promoting a 
              good work-life balance that prioritizes their overall health and wellness. 
            </li>
            <li>
              Support initiatives that benefit the environment, human welfare, and education. This 
              includes skills training that advances workforce talent pipelines for our customers and 
              economic development in the communities in which we operate. 
            </li>
            <li className="">
             Engage suppliers, customers, and employees around safety, health, and wellness.
            </li>
            <li className="">Preserve and promote the protection of human rights and welfare within our business 
               activities, as well as those of our supply chain, under our Anti-money laundering and 
               combatting Terrorist Financing, Anti-bribery, and corruption (including gifts and 
              hospitality), Market Abuse/Market Conduct, Code of Ethics and Business Conduct, 
              Modern Slavery Act, Human Rights Policy, and Diversity &Inclusion.</li>
            </ul>
        </div>
        <div className="w-1/2 text-left">
            <h1 className="md:text-5xl text-2xl font-extrabold text-green-700 mb-8">E<span className='text-blue-600'>S</span><span className='text-orange-500'>G</span></h1>
            <p className='text-lg text-orange-500 mb-3 font-extrabold'>
              Ethics & Governance 
            </p>
            <p className="font-bold text-[#750475]">Our Focus:</p>
            <p className='text-sm mb-5'>Promote strong oversight, transparency, and risk management at all levels of our 
               organization, ensuring the resilience and long-term preservation of value for our 
               business 
            </p>
            <p className="font-bold text-[#750475]">Our Action</p>
            <ul className="list-disc text-sm list-item text-gray-700 space-y-2 ">
            <li className="text-sm"> Maintain strong corporate governance practices through exemplary board stewardship, 
               management accountability, and proactive risk management.
            </li>
            <li>
             Mitigate risk exposure and build the resilience of our portfolio to climate change, 
             earthquakes, and other catastrophic events through smart design and sighting. 
            </li>
            <li className="">
              Maintain high ethical standards through a strong Code of Ethics and Business Conduct, 
              ongoing ethics training, and executive leadership that promotes a culture of integrity. 
            </li>
            <li className="">Cultivate strong stakeholder relationships through transparency, open communications, 
              and responding to stakeholder input
            </li>
            <li className="">Establish clear and effective governance for ESG, set goals, and establish accountability.
            </li>
            </ul>
        </div>
      </div>
      <Policy />
    </div>
  )
}

export default page