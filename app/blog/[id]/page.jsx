import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function generateMetadata({params}){
  const post =await getData(params.id);
  return{
    title:post.title,
    description: post.desc,
  }
}
const Post = async({params}) => {
  const data=await getData(params.id);
  return (
    <div>
      <div className='w-full flex my-[20px] gap-10'>
        <div className='flex-1'>
          <h1 className='Head_lines leading-7'>{data.title}</h1>
          <p className='font-normal text-[16px] mt-[40px] mb-[30px] leading-7'>{data.desc}</p>
          <Link href='./' className='flex items-center'>
            <span className='rounded-[100%] overflow-hidden relative w-[25px] h-[25px] mr-2 avatarBorder'>
              <Image
              fill={true}
              src={data.profileImg}
              alt='profile picture'
              className='object-cover'
              />
            </span>
            <sapn className='hover:underline font-extrabold hover:text-white text-[14px]' >{data.username}</sapn>
          </Link>
        </div>
        <div className='flex-1 relative'>
        <Image
            fill={true}
            src={data.img}
            alt='hi'
            className='object-cover rounded '
          />
        </div>
      </div>
      <div>
        <p className='font-normal text-[16px] my-[30px] leading-7'>{data.content}</p>
      </div>
    </div>
  )
}

export default Post