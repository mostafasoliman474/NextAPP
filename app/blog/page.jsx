
// import Post from '@models/Post';
// import connect from '@utils/monogdb'
import Image from 'next/image'
import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/posts`, {
    method: "GET",
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async() => {
  // const [data , setData]= useState([]);
  // useEffect(async ()=>{
  //   const response = await getData(); 
  //   setData(response);
  // }, []);
  const data = await getData(); 
  // await connect();
  // const data = await Post.find();
  // console.log(data)
 
  
  
  return (
    <div className='flex flex-col gap-16 my-8 h-auto' >
      {data.map((item)=>(
        <Link href={`blog/${item._id}`} key={item._id} className='flex gap-11 sm:h-[40vh] sm:flex-row flex-col '>
        <div className='sm:w-[40%] sm:relative '>
          <Image
            fill={true}
            // width={400}
            // height={200}
            src={item.img}
            alt='hi'
            className='object-cover rounded '
          />
        </div>
        <div  className='sm:w-[60%] flex flex-col justify-center'>
          <h1 className='Head_lines '>{item.title}</h1>
          <p className='font-normal text-[20px] w-[90%] py-[10px]'>{item.desc}</p>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default Blog