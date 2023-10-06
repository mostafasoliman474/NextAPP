import Button from '@components/button/Button'
import Image from 'next/image'
import React from 'react'
import { item } from './data'
import notFound from 'next/navigation'
const getData = (category) => {
  const data = item[category]
  if (data) {
    return data;
  }
  else return notFound;
}

const Category = ({ params }) => {

  const data = getData(params.category);

  return (
    <div>
      <p className='font-extrabold text-3xl text-[#53c28b] mb-12 mt-8'>{params.category}</p>
      {data.map((item) => (
        <div className='flex h-[45vh] gap-10 mb-[20vh] [&:nth-child(even)]:flex-row-reverse' key={item.id} >
          <div className='flex-1 p-[20px_0_0_20px] flex justify-center flex-col tracking-widest'>
            <h1 className='font-extrabold text-5xl '>{item.title}</h1>
            <p className='max-w-[90%] leading-6 my-5'>{item.desc}</p>
            <Button url='/' text='see more' />
          </div>
          <div className='relative flex-1 '>
            <Image
              fill={true}
              src={item.image}
              alt='ill Photo'
              className='absolute object-cover rounded'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category