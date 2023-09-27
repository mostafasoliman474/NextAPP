import Button from "@components/button/Button"
import Image from "next/image"

const About = () => {
  return (
    <div >
      <div className="w-full h-[25vh] mb-5 bc relative">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="teamwork"
          className="object-cover grayscale "
        />
        <div className="absolute bg-[#53c28b] bottom-5 left-5 text-white font-medium] p-[5px_20px]">
          <h1 className="font-bold text-[26px]">Digital Storytellers</h1>
          <h1 className="font-bold text-[22px]">Handcrafting award winning digital experiences</h1>
        </div>
      </div>
      <div className="flex gap-10 ">
        <div className="desc_about flex-1">
          <h1 className="Head_lines">Who Are We?</h1>
          <p>
            orem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex flex-col flex-1 ">
          <h1 className='Head_lines'>What We Do?</h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </div>
  )
}

export default About