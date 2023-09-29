import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Post = ({params}) => {
  console.log(params.id)
  return (
    <div>
      <div className='w-full flex my-[20px] gap-10'>
        <div className='flex-1'>
          <h1 className='Head_lines leading-7'>Woman Posing With A Bunch Of Yellow Flowers</h1>
          <p className='font-normal text-[16px] mt-[40px] mb-[30px] leading-7'>Woman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow Flowers</p>
          <Link href='./' className='flex items-center'>
            <span className='rounded-[100%] overflow-hidden relative w-[25px] h-[25px] mr-2 avatarBorder'>
              <Image
              fill={true}
              src="https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg "
              alt='profile picture'
              className='object-cover'
              />
            </span>
            
            
            <sapn className='hover:underline font-extrabold hover:text-white text-[14px]' >@kaitywidson</sapn>
          </Link>
        </div>
        <div className='flex-1 relative'>
        <Image
            fill={true}
            src='https://images.pexels.com/photos/6976597/pexels-photo-6976597.jpeg'
            alt='hi'
            className='object-cover rounded '
          />
        </div>
      </div>
      <div>
        <p className='font-normal text-[16px] my-[30px] leading-7'>Woman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With <br/><br/>A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman<br/><br/> Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow FlowersWoman Posing With A Bunch Of Yellow Flowers</p>
      </div>
    </div>
  )
}

export default Post