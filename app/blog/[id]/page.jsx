import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostData from '@models/Post'
import connect from '@utils/monogdb'
// async function getData(id) {
//   const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
export async function generateMetadata({params}){
  const post = await PostData.findById(params.id)
  return{
    title:post.title,
    description: post.desc,
  }
}
const Post = async({params}) => {
  // const data=await getData(params.id);
  await connect();
  const data = await PostData.findById(params.id);
  return (
    <div>
      <div className='w-full flex my-[20px] gap-10 sm:flex-row flex-col'>
        <div className='flex-1'>
          <h1 className='Head_lines leading-7'>{data.title}</h1>
          <p className='font-normal text-[16px] mt-[40px] mb-[30px] leading-7'>{data.desc}</p>
          <Link href='./' className='flex items-center'>
            <span className='rounded-[100%] overflow-hidden relative w-[25px] h-[25px] mr-2 avatarBorder'>
              <Image
              width={400}
              height={200}
              src={data.profileImg}
              alt='profile picture'
              className='object-cover'
              />
            </span>
            <sapn className='hover:underline font-extrabold hover:text-white text-[14px]' >{data.username}</sapn>
          </Link>
        </div>
        <div className='sm:w-[40%] sm:relative w-[100%] h-[300px]'>
        <Image
            width={400}
            height={200}
            src={data.img}
            alt='hi'
            className='object-cover rounded relative h-[100%] w-[100%]'
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