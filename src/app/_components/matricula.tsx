'use client'

import Link from "next/link"

function Enrollment() {
  return (
    <button className="bg-primary h-[2.5rem] w-full hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl 
    transition-all duration-200 transform hover:scale-105 text-center justify-center"><Link href='#'
        target="_blank"

      >Comprar</Link></button>

  )
}

export default Enrollment