import { HashLink } from "react-router-hash-link"
import footerLogo from "../img/footerlogo.png"

const Footer = () => {
    return (
        <footer className="bg-[#123E59] mt-20">
            <div className="flex justify-around items-end h-60 pb-10">
                <div className="text-white flex gap-x-20 font-bold text-xl">
                    <HashLink smooth to="/#top" className="hover:text-[#F6B51D]">Home</HashLink>
                    <HashLink smooth to="/#services" className="hover:text-[#F6B51D]">Services</HashLink>
                    <HashLink smooth to="/#features" className="hover:text-[#F6B51D]">Features</HashLink>
                    <HashLink smooth to="/#about" className="hover:text-[#F6B51D]">About</HashLink>
                    <HashLink smooth to="/#contacts" className="hover:text-[#F6B51D]">Contacts</HashLink>
                </div>
                <div>
                    <img src={footerLogo}/>
                    <p className="text-white">©  2022  •  All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer