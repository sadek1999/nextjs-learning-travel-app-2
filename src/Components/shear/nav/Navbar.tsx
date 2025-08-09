import Link from "next/link"
import { NaveLinks } from "./constant"
import { TbAirBalloon } from "react-icons/tb"
import { HiBars3BottomRight } from "react-icons/hi2"


export const Navbar = () => {
  return (
    <nav className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000] relative">
      <div className="flex items-center h-full justify-between w-[98%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Tripi
          </h1>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {NaveLinks.map((links) => (
            <Link href={links.url} key={links.id}>
              <p
                className="relative text-white text-base font-medium w-fit block 
                after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full 
                after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right"
              >
                {links.label}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className=" md:px-2 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg ">
          Book Now
        </button>

        {/* Burger Menu  */}
        <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" />
      </div>
    </nav>
  )
}
