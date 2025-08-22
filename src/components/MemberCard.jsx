import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'
import Badge from './Badge'

export default function MemberCard({ m }){
  return (
    <div className='card hover:shadow-lg transition'>
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='font-semibold text-lg'>{m.companyName || 'Unnamed Company'}</h3>
          <p className='text-sm text-gray-600'>{m.city || '-'}</p>
        </div>
        <Badge level={m.badgeLevel} verified={m.verified} />
      </div>

      <div className='mt-3 flex items-center gap-4 text-sm'>
        <div className='flex items-center gap-1'>
          <StarRating value={m.customerRatingAvg || 0} readOnly />
          <span className='text-gray-600'>({m.customerRatingCount || 0})</span>
        </div>
        <div className='flex items-center gap-1'>
          <span className='text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded'>TNESA</span>
          <StarRating value={m.adminRating || 0} readOnly />
        </div>
      </div>

      <div className='mt-3 text-sm text-gray-600 space-y-1'>
        {m.website && <a className='text-tnesa-primary underline' href={m.website} target='_blank'>Website</a>}
        <div>📞 {m.phone || '—'}  •  ✉️ {m.email || '—'}</div>
      </div>

      <div className='mt-4'>
        <Link to={`/profile/${m.id}`} className='btn btn-primary w-full justify-center'>View Profile</Link>
      </div>
    </div>
  )
}
