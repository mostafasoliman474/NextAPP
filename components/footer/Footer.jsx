import Image from 'next/image'
import React from 'react'
const SocialPhoto=[
  {
    id:1,
    alt:'facebook',
    src:'/1.png'
  },
  {
    id:2,
    alt:'instagram',
    src:'/2.png'
  },
  {
    id:3,
    alt:'Twitter',
    src:'/3.png'
  },
  {
    id:4,
    alt:'Youtube',
    src:'/4.png'
  },
]
const Footer = () => {
  return (
    <div className='flex justify-between items-center h-[50px]'>
      <div className='text-xs'>@ 2023 Kejoodiv . All rights reserved </div>
      <div className='flex gap-5 items-center'>
        {SocialPhoto.map((photo)=>(
          <Image
          key={photo.id}
          src={photo.src}
          width={16}
          height={16}
          alt={photo.alt}
          className='object-contain cursor-pointer'
        />
        ))}
      </div>
    </div>
  )
}
export default Footer