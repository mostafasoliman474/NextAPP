'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => { 
  const router=useRouter();
  const session= useSession();
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handelSubmit=async(e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    
    const password = e.target[1].value;

    signIn('credentials',{
      email,password
    });
    
  }
 
  return (
    <div className='flex flex-col gap-6 items-center justify-center'>
      <form className='flex flex-col gap-10 w-72' onSubmit={handelSubmit}>
       
        <input type='email' placeholder='email' required className='input_form'/>
        <input type='password' placeholder='password' required className='input_form'/>
  
        <button className='bg-[#53c28b] text-white rounded h-[50px]'>Log In</button>
      </form>
      <button onClick={()=>signIn("google")}>click to log in</button>
    </div>
  )
}

export default Login