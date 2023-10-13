'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import useSWR from 'swr';

const Dashboard = () => {
  const [Toggle, setToggle] = useState(false);

  const session = useSession();
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher);
    console.log(data)
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      // e.target.reset();

    } catch (err) {
      console.log(err)
    }
  };
  if (session.status === 'loading') {
    return <p>loading</p>
  }
  if (session.status === 'unauthenticated') {
    router.push('/dashboard/login')
  }

  console.log(session)
  if (session.status === 'authenticated') {
    return (

      <div className='flex flex-col gap-7 items-center mt-[50px] relative '>
        {Toggle && (
          <>
            {/* <button className='Red_btn bg-[red]' onClick={() => setToggle((prev) => !prev)}>Cancel</button> */}

            <form className='popUpmenu' onSubmit={handleSubmit}>

              <input type='text' placeholder='Title' className='popUpmenuInput' />
              <input type='text' placeholder='Description' className='popUpmenuInput' />
              <input type='text' placeholder='Image source' className='popUpmenuInput' />
              <textarea className='overflow-hidden bg-transparent h-[100px]  p-[10px] border-[1px] w-[80%] text-white' placeholder='What do you think!'></textarea>
              <button className='Green_btn'>Post</button>

            </form>
          </>

        )}

        <button className='p-[10px_20px] border-[none] bg-[#53c28b]
         text-white font-semibold text-base rounded cursor-pointer  text-center'
          onClick={() => setToggle((prev) => !prev)}>Create Post </button>
        <div className='flex flex-col gap-[50px]'>
          {isLoading ? "loading" : data.map((post) => (
            <Link href={'/blog'} className='flex gap-11 h-[40vh]' key={post._id}>
              <div className='w-[40%] relative'>
                <Image
                  fill={true}
                  src={post.img}
                  alt='hi'
                  className='object-cover rounded '
                />
              </div>
              <div className='w-[60%] flex flex-col justify-center'>
                <h1 className='Head_lines '>{post.title}</h1>
                <p className='font-normal text-[20px] w-[90%] py-[10px]'>
                  {post.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard