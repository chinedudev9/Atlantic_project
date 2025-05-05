import SafetyBanner from '@/components/SafetyBanner';
import React from 'react';

const documents = [
  { title: 'Compliance & Commitment to Global Standards', date: 'May 31, 2019', link: '/pdf/CCGS.pdf' },
  { title: 'Corporate Overview', date: 'November 28, 2020', link: '/pdf/corporate-overview.pdf' },
  { title: 'Company Organogram', date: 'February 11, 2022', link: '/pdf/AFSS_organogram.pdf' },
  { title: 'Career Overview', date: 'May 31, 2019', link: '/pdf/career_afss.pdf' },
  { title: 'Modern Slavery Policy', date: 'April 4, 2022', link: '/pdf/mdsp.pdf' },
  { title: 'AFSS Policy', date: 'April 4, 2022', link: '/pdf/Revised_AFSS_Policy.pdf' },
  { title: 'CSR', date: 'February 11, 2022', link: '/pdf/CSR_Template.pdf' },
  { title: 'ESG', date: 'February 11, 2022', link: '/pdf/ESG_Template.pdf' },
  { title: 'Pneumatic Fenders', date: 'February 11, 2022', link: '/pdf/pneumatic_rubber.pdf' },
];

function pages() {
  return (
    <div className="">
      <SafetyBanner />
    <div className="min-h-screen p-8 bg-gray-100">
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Info Centre</h1>
      <ul className="space-y-4">
        {documents.map((doc, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <h2 className="text-lg font-semibold">{doc.title}</h2>
              <p className="text-sm text-gray-500">{doc.date}</p>
            </div>
            <a href={doc.link} download className="text-blue-600 hover:underline">
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  </div>
  )
}

export default pages