import Image from "next/image"
import Link from "next/link"
const portfilioCat = [
  {
    id: 1,
    src: "/illustration.png",
    alt: 'Illustration'
  },
  {
    id: 2,
    src: "/apps.jpg",
    alt: 'Applications'
  },
  {
    id: 3,
    src: "/websites.jpg",
    alt: 'Websites'
  },
]

const Portfolio = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="font-semibold text-2xl pb-8">Choose a galary</p>
        <div className="flex gap-9">
          {portfilioCat.map((item) => (
            <Link href={`/portfolio/${item.alt}`} className="portfilio_cat" key={item.id}>
              <Image
                src={item.src}
                fill={true}
                alt={item.alt}
                className="object-cover w-full"
              />
              <p className="z-50 text-white absolute bottom-3 right-3 font-extrabold text-3xl hover:text-[#53c28b]">{item.alt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio