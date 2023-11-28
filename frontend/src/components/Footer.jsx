import {Link} from "react-router-dom"
import footerLogo from "../img/footerlogo.png"

const Footer = () => {
    return (
        <footer className="bg-[#123E59]">
            <div className="flex justify-around items-end h-60 pb-10">
                <div className="text-white flex gap-x-20 font-bold text-xl">
                    <Link to="/" className="hover:text-[#F6B51D]">Home</Link>
                    <Link to="#" className="hover:text-[#F6B51D]">Services</Link>
                    <Link to="#" className="hover:text-[#F6B51D]">Features</Link>
                    <Link to="#" className="hover:text-[#F6B51D]">About</Link>
                    <Link to="#" className="hover:text-[#F6B51D]">Contacts</Link>
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