'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Register = () => {
  const router = useRouter();
  const [err,setErr]=useState(false);

  const handelSubmit=async(e)=>{
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status===201 && router.push("/dashboard/login?success=Account has been created");
      
    } catch (err) {
      setErr(true) ;
    }

  }
  return (
    <div className='flex items-center justify-center flex-col gap-3'>
      <form className='flex flex-col gap-10 w-72' onSubmit={handelSubmit}>
        <input type='text' placeholder='username' required className='input_form'/>
        <input type='emial' placeholder='email' required className='input_form'/>
        <input type='password' placeholder='password' required className='input_form'/>
  
        <button className='bg-[#53c28b] text-white rounded h-[50px]'>Register</button>
      </form>
      {err && "something went wrong!"}
      <Link href='/dashboard/login'>Login with an existed account</Link>
    </div>
  )
}

export default Register