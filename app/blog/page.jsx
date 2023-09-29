import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='flex flex-col gap-16 my-8 h-auto' >
      <Link href='/blog/post' className='flex gap-11 h-[40vh] '>
        <div className='w-[40%] relative'>
          <Image
            fill={true}
            src='https://images.pexels.com/photos/6976754/pexels-photo-6976754.jpeg'
            alt='hi'
            className='object-cover rounded '
          />
        </div>
        <div  className='w-[60%] flex flex-col justify-center'>
          <h1 className='Head_lines '>Woman Posing With A Bunch Of Yellow Flowers</h1>
          <p className='font-normal text-[20px] w-[90%] py-[10px]'>Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
        </p>
        </div>
      </Link>

      <Link href='/blog/post' className='flex gap-11 h-[40vh] '>
        <div className='w-[40%] relative'>
          <Image
            fill={true}
            src='https://images.pexels.com/photos/6976937/pexels-photo-6976937.jpeg'
            alt='hi'
            className='object-cover rounded '
          />
        </div>
        <div  className='w-[60%] flex flex-col justify-center'>
          <h1 className='Head_lines '>Woman Posing With A Bunch Of Yellow Flowers</h1>
          <p className='desc'>Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
        </p>
        </div>
      </Link>


      <Link href='/blog/post' className='flex gap-11 h-[40vh] '>
        <div className='w-[40%] relative'>
          <Image
            fill={true}
            src='https://images.pexels.com/photos/6976939/pexels-photo-6976939.jpeg'
            alt='hi'
            className='object-cover rounded '
          />
        </div>
        <div  className='w-[60%] flex flex-col justify-center'>
          <h1 className='Head_lines '>Woman Posing With A Bunch Of Yellow Flowers</h1>
          <p className='desc'>Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
        </p>
        </div>
      </Link>


      <Link href='/blog/post' className='flex gap-11 h-[40vh] '>
        <div className='w-[40%] relative'>
          <Image
            fill={true}
            src='https://images.pexels.com/photos/6976940/pexels-photo-6976940.jpeg'
            alt='hi'
            className='object-cover rounded '
          />
        </div>
        <div  className='w-[60%] flex flex-col justify-center'>
          <h1 className='Head_lines '>Woman Posing With A Bunch Of Yellow Flowers</h1>
          <p className='desc'>Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
          Woman Posing With A Bunch Of Yellow Flowers
        </p>
        </div>
      </Link>
    </div>
  )
}

export default Blog