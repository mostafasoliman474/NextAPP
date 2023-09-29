import Button from '@components/button/Button'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-8 items-center'>
      <h1 className='font-black text-6xl mb-[40px]'>Let's Keep in Touch</h1>
      <div className='flex gap-[100px] mb-[50px]'>

        <div className='flex-1 relative '>
          <Image
            src='/contact.png'
            width={700}
            height={700}
            className='object-cover contact_img'
            alt='contact photo'
          />
        </div>


        <form className='flex-1 flex flex-col gap-[20px] '>
          <input type='text' placeholder='name' className=' input' />
          <input type='email' placeholder='email' className=' input' />
          <textarea placeholder='massage' className='msg_inp'></textarea>
          <Button url='/contact' text='send' />
        </form>
        {/* outline-1 outline-gray-400 text-start */}
      </div>

    </div>
  )
}

export default Contact