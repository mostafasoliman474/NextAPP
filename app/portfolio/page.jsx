import Image from "next/image"
const portfilioCat=[
  {
    id:1,
    src:"/illustration.png",
    alt:'illustration'
  },
  {
    id:2,
    src:"/apps.jpg",
    alt:'apps'
  },
  {
    id:3,
    src:"/websites.jpg",
    alt:'websites'
  },
]

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-black text-6xl ">Our works</h1>
      <div>
        <p className="font-semibold text-2xl pb-8">Choose a galary</p>
        <div className="flex gap-9">
          {portfilioCat.map((item)=>(
            <div className="portfilio_cat">
              <Image
              src={item.src}
              fill={true}
              alt={item.alt}
              className="object-cover w-full"
              />
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Portfolio