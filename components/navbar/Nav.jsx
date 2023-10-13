'use client'
import Toggle from "@components/DarkModeSlider/Toggle"
import Button from "@components/button/Button"
import { signOut, useSession } from "next-auth/react"
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
  const [authontication, setAuthontication] = useState(null)
  const session =useSession();
  console.log(session)
  // useEffect(()=>{
  //   // const session =useSession();
  //   setAuthontication(session.status)
  // },[])
  // console.log(authontication)
  return (
    <nav className="w-full flex justify-between  h-[100px] items-center">
      <Link href='/' className="font-extrabold text-2xl">FATIMA</Link>
      {/* desktop view */}
      <div className="flex gap-5 items-center">
        <Toggle/>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="text-lg font-medium ">{link.title}</Link>
        ))}
        {session.status==="authenticated"?(
          <button className="Green_btn" onClick={signOut}>Log Out</button>
        ):(
          <Button className="Green_btn" url='dashboard/login' text='Sign In'/>
        )}
      </div>
    </nav>
  )
}

export default Nav