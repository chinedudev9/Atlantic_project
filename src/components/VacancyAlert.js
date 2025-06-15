'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function VacancyAlert() {
  const [showAlert, setShowAlert] = useState(false);
  const [vacancy, setVacancy] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tenants/${process.env.NEXT_PUBLIC_TENANT_ID}/external/vacancies`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setShowAlert(true);
          setVacancy(data[0]); 
        }
      });
  }, []);

  if (!showAlert || !vacancy) return null;

  return (
    <div className="bg-yellow-100 text-black p-4 rounded shadow mb-4">
      <strong>New Vacancy Alert:</strong> {vacancy.title}
      <Link href={`/apply/${vacancy.id}`} className="ml-4 text-blue-600 underline">
        Apply Now
      </Link>
    </div>
  );
}
