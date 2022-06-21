import Link from "next/link"


const navbar = () => {
  return (
 <nav className="bg-gray-700">
 <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-new">
  <Link href="/">
    <a className="text-base md:text-2xl">Oglądnij
      <span className="text-blue-600">Mnie ;)</span>
    </a>
  </Link> 
   </div>
 </nav>
  )
}

export default navbar