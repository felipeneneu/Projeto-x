'use client'

import Link from "next/link"

function PreEnrollment() {
  return (
    <button className="bg-gray-700 h-[2.5rem] w-full hover:bg-primary text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl 
    transition-all duration-200 transform hover:scale-105 text-center justify-center"><Link href='/#intro'


      >Lista de Espera</Link></button>
  )
}

export default PreEnrollment