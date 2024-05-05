import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
   <nav className="flexVetween max-container padding-container relative z-30 py-5">
<Link href="/">
    <Image src="/hilink-logo.svg" alt="log" width={74} height={29}/>
</Link>
   </nav>
  )
}

export default Navbar