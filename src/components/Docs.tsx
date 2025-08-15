import React from 'react'
import Link from 'next/link'

function docs() {
  return (
    <div
    style={{ backgroundColor: "var(--background)" }}
    className="h-auto md:flex px-3 md:px-30 md:gap-10 relative z-20 md:h-[40vh] items-center md:space-y-0 space-y-10 justify-center py-10">
        <div className='w-1/2 mx-auto'>
            <h1 className="text-3xl text-green-900 font-extrabold text-left mb-4">Documents</h1>
            <p className="text-left mb-8">At Atlantic Fenders, we provide easy access to essential documents to ensure transparency and convenience for our partners and clients. You can view our brochures...</p>
            <Link href='/documents' className='text-right pr-4 bg-green-900 py-2 rounded-md px-2 text-white'>Explore Docs</Link>
        </div>
        <div className="w-1/2 mx-auto">
            <h2 className="text-3xl text-green-900 font-extrabold text-left mb-4">Corporate Social Responsibility </h2>
            <p className="text-left mb-8 ">We are committed to corporate social responsibility by investing in community development, promoting maritime safety, and ensuring environmental sustainable operations within our locality...</p>
            <Link href="/csr" className='text-left bg-green-900 py-2 rounded-md px-2 text-white'>Explore More</Link>
        </div>
    </div>
  )
}

export default docs

