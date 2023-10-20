'use client'
import Toggle from "@components/DarkModeSlider/Toggle"
import Button from "@components/button/Button"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  },
]
const Nav = () => {
  const [popToggle, setpopToggle] = useState(false);
  // const [authontication, setAuthontication] = useState(null)
  const session =useSession();
  // console.log(session)
  // useEffect(()=>{
  //   // const session =useSession();
  //   setAuthontication(session.status)
  // },[])
  // console.log(authontication)
 
  return (
    <nav className="w-full flex justify-between  h-[100px] items-center">
      <Link href='/' className="font-extrabold text-2xl">ASBUILT</Link>
      {/* desktop view */}
      <div className="sm:flex gap-5 items-center hidden">
        <Toggle/>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="text-lg font-medium ">{link.title}</Link>
        ))}
        {session.status==="authenticated"?(
          <button className="Green_btn" onClick={signOut}>Log Out</button>
        ):(
          <Button className="Green_btn" url='/dashboard/register' text='Sign Up'/>
        )}
      </div>

      {/* mobile view */}
      <div className="flex sm:hidden ">
        <Image
        height={25}
        width={30}
        src='https://images.pexels.com/photos/18629365/pexels-photo-18629365/free-photo-of-yawning-lion-in-the-savannah.jpeg'
        className="object-contain rounded-[50%] cursor-pointer"
        alt="profile image"
        onClick={()=>setpopToggle((priv)=>!priv)}
        />
        
        
      </div>
      {popToggle&& (
          <div className="flex flex-col fixed h-full w-[50%] right-0 bg-white top-0 items-center z-50 pt-[20px] gap-5 ">
            
            {links.map((link) => (
              <Link href={link.url} key={link.id} className="text-lg font-medium " onClick={()=>setpopToggle((priv)=>!priv)}>{link.title}</Link>
            ))}
            <Toggle/>
          </div>
        )}
    </nav>
  )
}

export default Nav