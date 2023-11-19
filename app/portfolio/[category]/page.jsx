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
    <div className='flex flex-col gap-[30px]'>
      <p className=' font-extrabold text-3xl text-[#53c28b] mb-12 mt-8'>{params.category}</p>
      {data.map((item) => (
        
        <div className='flex gap-[32px] sm:h-[40vh] sm:flex-row-reverse flex-col-reverse' key={item.id} >
          <div className='flex-1 sm:p-[20px_0_0_20px] p-[20px_0_0_0] flex justify-center flex-col tracking-widest'>
            <h1 className='font-extrabold text-5xl '>{item.title}</h1>
            <p className='max-w-[90%] leading-6 my-5'>{item.desc}</p>
            <Button url='/' text='see more' />
          </div>
          <div className='sm:w-[40%] sm:relative w-[100%] h-[300px]'>
            <Image
              width={400}
              height={200}
              src={item.image}
              alt='ill Photo'
              className='object-cover rounded relative h-[100%] w-[100%]'
            />
          </div>
        </div>
      ))}

    </div>
  )
}

export default Category