import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useLoginMutation } from "../slices/usersApiSlice"
import { setCredentials } from '../slices/authSlice'
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import SELogo from "../img/Logo.png"

const Login = () => {
    const [role, setRole] = useState("client")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleRadio = (event) => {
        setRole(event.target.value.toLowerCase());
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)

    const navigateToRegister = (e) => {
        e.preventDefault()
        navigate('/register')
    }

    useEffect(() => {
        if(userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await login({ username: user, password, role }).unwrap()
            dispatch(setCredentials({ ...res }))
            toast.success('You have logged in successfully', {
                position: "bottom-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
            navigate('/')
        }catch (err) {
            toast.error(err?.data?.message || err.error, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        }
    }

    return (
        <>
            <Navbar />
            
            <section className="h-screen drop-shadow-2xl shadow-2xl">
                <section className="h-screen flex justify-center items-center pt-16"> 
                    <form className="container mx-auto flex items-center bg-[#F6F6F6] w-8/12 h-4/5 rounded-2xl border-2 drop-shadow-2xl" onSubmit={submitHandler}>
                        <div className="bg-[#123E59] w-1/3 h-full rounded-tl-2xl rounded-bl-2xl flex flex-col items-center justify-between py-16">
                            <div><img src={SELogo}/></div>
                            <div>
                                <h1 className="text-white font-bold text-4xl w-48">Welcome back!</h1> 
                                <p className="text-white font-extralight text-xs mt-6">Don&apos;t have an account?</p>
                                <button type="button" onClick={navigateToRegister} className="bg-[#F6B51D] text-[#123E59] font-bold rounded-full py-3 px-5 mt-2">Create Account</button>
                            </div>
                        </div>
                        <div className="w-3/4 flex items-center justify-center">
                            <div className="flex flex-col items-left w-3/6">
                                <h1 className="text-5xl font-extrabold mt-5">Log In</h1>
                                <p className="mt-3">Please input your credentials to log in to your account</p>
                                <div className="flex mt-10 justify-center">
                                    <input type="radio" checked={role === 'client'} onChange={handleRadio} name="role" id="client" value="client" className="cursor-pointer mr-1"/>
                                    <label htmlFor="client" className="mr-5">Client</label>
                                    <input type="radio" checked={role === 'employee'} onChange={handleRadio} name="role" id="freelancer" value="employee" className="cursor-pointer mr-1"/>
                                    <label htmlFor="freelancer">Freelancer</label>
                                </div>
                                <label htmlFor="email" className="font-extrabold text-black">Email or Username</label>
                                <input value={user} onChange={(e) => setUser(e.target.value)} type="text" placeholder="Email or Username" name="email" required className="w-full mt-2 px-5 py-2 rounded-xl bg-[#D9D9D9]"/>
                                <label htmlFor="password" className="mt-5 font-extrabold text-black">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name="password" required className="mt-2 px-5 py-2 rounded-xl bg-[#D9D9D9]"/>
                                <div className="flex justify-around mt-3">
                                    <div>
                                        <input type="checkbox" name="rememberMe" id="rememberMe" className="mr-1"/>
                                        <label htmlFor="rememberMe" className="font-extralight">Remember me</label>  
                                    </div>
                                    <div>
                                        <p className="cursor-pointer font-extrabold">Forgot Password?</p>
                                    </div>
                                </div>
                                
                                <button type="submit" className="px-5 py-2 bg-[#F6B51D] text-[#123E59] w-1/4 rounded-full font-bold my-8 place-self-center">Log In</button>
                                {isLoading && <Spinner />}
                            </div> 
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Login