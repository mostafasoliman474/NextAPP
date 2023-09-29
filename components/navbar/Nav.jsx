import Toggle from "@components/DarkModeSlider/Toggle"
import Link from "next/link"
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
  return (
    <div className="w-full flex justify-between  h-[100px] items-center">
      <Link href='/' className="font-extrabold text-2xl">FATIMA</Link>
      <div className="flex gap-5 items-center">
        <Toggle/>
        {links.map((link) => (
          <Link href={link.url} key={link.id} className="text-lg font-medium ">{link.title}</Link>
        ))}
        <button type="button" className="Green_btn">Log Out</button>
      </div>
    </div>
  )
}

export default Nav