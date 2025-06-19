'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VacancyAlert() {
  const [showAlert, setShowAlert] = useState(false);
  const [vacancy, setVacancy] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchVacancies = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/tenants/${process.env.NEXT_PUBLIC_TENANT_ID}/external/vacancies`
          );
          const data = await res.json();

          if (Array.isArray(data) && data.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.length);
            setVacancy(data[randomIndex]);
          } else {
            console.warn('No vacancies found.');
          }

          setShowAlert(true);
        } catch (error) {
          console.error('Error fetching vacancies:', error);
          setShowAlert(true);
        }
      };

      fetchVacancies();
    }, 65000); 

    return () => clearTimeout(timer);
  }, []);

  if (!showAlert) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-[28rem] bg-blue-100 border border-yellow-100 text-blue-900 p-4 rounded shadow-lg"
    >
      <button
        onClick={() => setShowAlert(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="font-semibold mb-2">📢 Vacancy Alert</div>
      <div className="mb-2">
        <span>{vacancy?.vacancy_request?.designation?.name || 'We have new job opportunities!'}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        {vacancy?.link && (
          <Link href={`/apply/${vacancy.link}`} className="text-blue-600 text-sm underline">
            Apply Now
          </Link>
        )}
        <Link href="/career#vacancies" className="text-gray-800 text-sm underline hover:text-gray-600">
          See All Jobs
        </Link>
      </div>
    </motion.div>
  );
}
