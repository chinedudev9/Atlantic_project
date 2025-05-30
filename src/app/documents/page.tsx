import Contact from '@/components/Contact';
import SafetyBanner from '@/components/SafetyBanner';
import React from 'react';

const documents = [
  { title: 'Corperate Overview', date: 'December 07, 2024', link: '/pdf/corperate_overview.pdf' },
  { title: 'Company Organogram', date: 'December 07, 2024', link: '/pdf/AFSS_organogram.pdf' },
  { title: 'Career Overview', date: 'February 31, 2025', link: '/pdf/career_afss.pdf' },
  { title: 'AFSS Policy', date: 'April 25, 2025', link: '/pdf/Updated_AFSS_Policy.pdf' },
  { title: 'Compliance & Commitment', date: 'February 4, 2025', link: '/pdf/compliance.pdf' },
  { title: 'Pneumatic Fenders', date: 'June 11, 2024', link: '/pdf/Pneumatic_Rubber.pdf' },
];

function pages() {
  return (
    <div className="">
      <SafetyBanner />
      <Contact />
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