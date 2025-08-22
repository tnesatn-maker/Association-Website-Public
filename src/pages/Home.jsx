import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(){
  return (
    <div className='space-y-12'>
      <section className='bg-gradient-to-br from-sky-50 to-white border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8'>
        <img src='/logo.png' alt='TNESA' className='w-28 h-28 rounded-2xl shadow' />
        <div>
          <h1 className='hero-title'>Connecting CCTV Professionals of Tamil Nadu</h1>
          <p className='hero-sub mt-3'>Find verified system integrators, compare ratings, and contact trusted experts with confidence.</p>
          <div className='mt-6 flex gap-3'>
            <Link to='/directory' className='btn btn-primary'>Browse Installers</Link>
            <Link to='/signup' className='btn'>Become a Member</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
