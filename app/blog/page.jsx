
import Post from '@models/Post';
import connect from '@utils/monogdb'
import Image from 'next/image'
import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// async function getData() {
//   const res = await fetch("/api/posts", {
//     method: "GET",
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Blog = async() => {
  // const [data , setData]= useState([]);
  // useEffect(async ()=>{
  //   const response = await getData(); 
  //   setData(response);

  //   console.log(data);

  // }, []);
  await connect();
  const data = await Post.find();
  // console.log(response)
  
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
    </div>
  )
}

export default Blog