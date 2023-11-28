import {Link, useNavigate} from "react-router-dom"
import SELogo from "../img/SELogo.png"

const Navbar = () => {
    const navigate = useNavigate()

    const clickLogin = () => {
        navigate("/login")
    }
    
    const clickRegister = () => {
        navigate("/register")
    }

    const clickHome = () => {
        navigate("/")
    }
    return (
        <>
            <div className="bg-[#123E59]">
                <nav className="h-20 container m-auto flex items-center justify-between">
                    <div className="flex items-center cursor-pointer" onClick={clickHome}>
                        <img src={SELogo}/><p className="text-3xl font-extrabold text-white uppercase">SE <span className="text-3xl font-extrabold text-[#F6B51D] uppercase">Tech</span></p>
                    </div>
                    <div className="text-white flex gap-x-8 ">
                        <Link to="/" className="hover:text-[#F6B51D]">Home</Link>
                        <Link to="#" className="hover:text-[#F6B51D]">Services</Link>
                        <Link to="#" className="hover:text-[#F6B51D]">Features</Link>
                        <Link to="#" className="hover:text-[#F6B51D]">About</Link>
                        <Link to="#" className="hover:text-[#F6B51D]">Contacts</Link>
                    </div>
                    <div className="text-white flex gap-x-8">
                        <button onClick={clickLogin} className="border-2 font-semibold w-20 h-7 rounded-md">
                            Login
                        </button>

                        <button onClick={clickRegister} className="border-2 font-semibold border-[#F6B51D] w-20 h-7 rounded-md bg-[#F6B51D] text-[#123E59]">
                            Signup
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar