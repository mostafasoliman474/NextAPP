import Link from "next/link"

const Button = ({ text, url }) => {
  return (

    <Link href={url} className="Green_btn ">
      {text}
    </Link>

  )
}

export default Button