import React from 'react'
export default function Badge({ level, verified }){
  return (
    <div className='flex items-center gap-2'>
      {level==='Gold' && <span className='badge-gold'>Gold</span>}
      {level==='Platinum' && <span className='badge-platinum'>Platinum</span>}
      {level==='Silver' && <span className='badge bg-gray-50 text-gray-700 border-gray-200'>Silver</span>}
      {verified && <span className='badge-verified'>Verified</span>}
    </div>
  )
}
