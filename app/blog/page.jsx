import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData(); 
  
  return (
    <div className='flex flex-col gap-16 my-8 h-auto' >
      {data.map((item)=>(
        <Link href={`blog/${item._id}`} key={item._id} className='flex gap-11 h-[40vh] '>
        <div className='w-[40%] relative'>
          <Image
            fill={true}
            src={item.img}
            alt='hi'
            className='object-cover rounded '
          />
        </div>
        <div  className='w-[60%] flex flex-col justify-center'>
          <h1 className='Head_lines '>{item.title}</h1>
          <p className='font-normal text-[20px] w-[90%] py-[10px]'>{item.desc}</p>
        </div>
      </Link>
      ))}

      {/* <Link href='/blog/post2' className='flex gap-11 h-[40vh] '>
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


      <Link href='/blog/post3' className='flex gap-11 h-[40vh] '>
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


      <Link href='/blog/post4' className='flex gap-11 h-[40vh] '>
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
      </Link> */}
    </div>
  )
}

export default Blog