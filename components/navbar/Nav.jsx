'use client'
import Toggle from "@components/DarkModeSlider/Toggle"
import Button from "@components/button/Button"
import { ThemeContext } from "@context/ThemeContext"

import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
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
  const {mode}=useContext(ThemeContext)
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
      <div className="flex sm:hidden rounded-[100%] cursor-pointer w-8 h-8 relative" onClick={()=>setpopToggle((priv)=>!priv)}>
        <Image
        fill={true}
        src='https://images.pexels.com/photos/18629365/pexels-photo-18629365/free-photo-of-yawning-lion-in-the-savannah.jpeg'
        className="object-cover absolute rounded-[50%]"
        alt="profile image"
        
        />
        
        
      </div>
      {/* {popToggle&& ( */}
          <div className={`${mode==='light'?'dark':'light'} ${popToggle===true?'w-[100%]':'w-[0]'} popsideMenu `}>
            <p className="text-[20px] p-3" onClick={()=>setpopToggle((priv)=>!priv)}>x</p>
            
            {links.map((link) => (
              <Link href={link.url} key={link.id} className="text-lg font-medium " onClick={()=>setpopToggle((priv)=>!priv)}>{link.title}</Link>
            ))}
            {session.status==="authenticated"?(
              <button className="Green_btn" onClick={signOut}>Log Out</button>
            ):(
              <div onClick={()=>setpopToggle((priv)=>!priv)}>

              <Button className="Green_btn" url='/dashboard/register' text='Sign Up' />
              </div>
            )}
            <Toggle/>
          </div>
        {/* // )} */}
    </nav>
  )
}

export default Nav