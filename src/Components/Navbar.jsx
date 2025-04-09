import Logo from "../assets/logo1.png"
import { LuFacebook } from "react-icons/lu";
import { CiTwitter } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <div className="bg-white w-full h-14 flex flex-row justify-between">
            {/* Logo */}
            <div className="flex flex-col justify-center mx-16">
                <img className="w-40 h-6 max-md:w-32" src={Logo} alt="Logo" />
                <p className="text-blue-700 text-[10px] max-md:text-[8px]">Empowering Financial Independence</p>
            </div>
            <div className="flex flex-row items-center gap-20 mx-16 max-md:gap-12">
                <LuFacebook className="size-8"/>
                <CiTwitter className="size-8"/>
                <SlSocialLinkedin className="size-8"/>
                <FaInstagram className="size-8"/>
            </div>
        </div>
        <div className="bg-black w-full h-16 text-sm flex justify-between items-center">
            <div className="flex gap-16 mx-16 text-neutral-500 text-lg">
                <a>Home</a>
                <a href="#About">About us</a>
                <a>Services</a>
                <a href="#contact">Contact</a>
            </div>
            <button className="mx-16 bg-blue-700 p-2 rounded-md text-white text-center">Book your slot</button>
        </div>
    </div>
  )
}

export default Navbar