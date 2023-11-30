import { Link, useNavigate } from "react-router-dom"
import SELogo from "../img/SElogo.png"
import Login from "../views/Login"
import { useSelector, useDispatch } from "react-redux"
import { useLogoutMutation } from "../slices/usersApiSlice"
import { logout } from "../slices/authSlice"
import { toast } from "react-toastify"
import { HashLink } from "react-router-hash-link"

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

    const dispatch = useDispatch()
    const [logoutApiCall] = useLogoutMutation()
    const clickLogout = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            toast('🦄 Goodbye', {
                position: "bottom-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
            navigate('/')
        }catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }

    const { userInfo } = useSelector((state) => state.auth)
    return (
        <>
            <div className="bg-[#123E59]">
                <nav className="h-20 container m-auto flex items-center justify-between">
                    <div className="flex items-center cursor-pointer" onClick={clickHome}>
                        <img src={SELogo}/><p className="text-3xl font-extrabold text-white uppercase">SE <span className="text-3xl font-extrabold text-[#F6B51D] uppercase">Tech</span></p>
                    </div>
                    {userInfo ? (<h1 className="font-bold text-white">Welcome {userInfo.name}</h1>) : (<div className="text-white flex gap-x-8 ">
                        <HashLink smooth to="/#top" className="hover:text-[#F6B51D]">Home</HashLink>
                        <HashLink smooth to="/#services" className="hover:text-[#F6B51D]">Services</HashLink>
                        <HashLink smooth to="/#features" className="hover:text-[#F6B51D]">Features</HashLink>
                        <HashLink smooth to="/#about" className="hover:text-[#F6B51D]">About</HashLink>
                        <HashLink smooth to="/#contacts" className="hover:text-[#F6B51D]">Contacts</HashLink>
                    </div>)}
                    {userInfo ? (<div className="text-white flex gap-x-8">
                        <button onClick={clickLogout} className="hover:scale-110 transition duration-400 border-2 font-semibold w-20 h-7 rounded-md">
                            <Link to={Login}>
                                Logout
                            </Link>
                        </button>
                    </div>) : (<div className="text-white flex gap-x-8">
                        <button onClick={clickLogin} className="hover:scale-110 transition duration-400 border-2 font-semibold w-20 h-7 rounded-md">
                            <Link to={Login}>
                                Login
                            </Link>
                        </button>

                        <button onClick={clickRegister} className="hover:scale-110 transition duration-400 border-2 font-semibold border-[#F6B51D] w-20 h-7 rounded-md bg-[#F6B51D] text-[#123E59]">
                            Signup
                        </button>
                    </div>)}
                </nav>
            </div>
        </>
    )
}

export default Navbar