import Button from '@components/button/Button'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='flex gap-24 items-center sm:flex-row flex-col'>
      <div className=' flex-1'>
        <h1 className='Head'>Better design for your digital products.</h1>
        <p className='desc'>turning your idea into Reality.We bring together the teams from the global tech industry</p>
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      <div>
        <Image src='/hero.png' width={500} height={500} alt='hero photo' className='object-cover Img_Home' />
      </div>
    </div>
  )
}
