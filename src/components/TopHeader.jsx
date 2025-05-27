"use client"
import React, { useState, useEffect } from 'react'
import { MdLocationOn } from 'react-icons/md'
import Link from 'next/link'

function TopHeader() {
  const addresses = [
    {
      text: '2nd Floor Eleganza House, 15 Wesley Joseph Street, Lagos Island, Lagos, Nigeria',
      country: 'Nigeria'
    },
    {
      text: 'Port of Lome, Togo',
      country: 'Togo'
    },
    {
      text: 'Port of Abidjan, Côte d\'Ivoire',
      country: 'Cote d\'Ivoire'
    },
  ]

  const flags = {
    'Nigeria': 'https://flagcdn.com/w40/ng.png',
    'Togo': 'https://flagcdn.com/w40/tg.png',
    'Cote d\'Ivoire': 'https://flagcdn.com/w40/ci.png',
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % addresses.length)
        setVisible(true)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [addresses.length])

  const current = addresses[currentIndex]

  return (
    <div className=' hidden md:flex justify-between items-center px-15 py-2'
      style={{ backgroundColor: "var(--top-header)", color: "var(--text-color)" }}>

      {/* Left: Location Icon and Address */}
      <div className="flex items-center gap-4" style={{ color: "var(--icon)" }}>
        <MdLocationOn size={20} />
        <span
          className={`text-sm font-semibold transition-all duration-500 ease-in-out transform ${
            visible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
          style={{ color: "var(--accent)" }}
        >
          {current.text}
        </span>
        <div className='flex gap-2'>
        <img
          src={flags[current.country]}
          alt={current.country}
          className='w-6 h-4 rounded-sm'
        />
      </div>
      </div>
          
        {/* Right: Contact Info */}
        <div className="flex text-xs items-center text-nowrap gap-6" style={{ color: "var(--icon)" }}>
           <Link href={"/career"}><h2 className="cursor-pointer hover:underline">Career</h2></Link>
           <button className='cursor-pointer hover:underline' onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact Us
           </button>
        </div>
    </div>
  )
}

export default TopHeader

