import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useLoginMutation } from "../slices/usersApiSlice"
import { setCredentials } from '../slices/authSlice'
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import Footer from "../components/Footer"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        if(userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await login({ email, password }).unwrap()
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
            <section>
                <form className="container mx-auto flex flex-col items-center my-60 bg-[#F6F6F6] w-1/5 rounded border-2 border-black" onSubmit={submitHandler}>
                    <h1 className="text-2xl font-bold mt-5">Login</h1>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required className="w-9/12 mt-8 px-5 py-2 rounded bg-[#E4E4E4]"/>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-9/12 mt-5 px-5 py-2 rounded bg-[#E4E4E4]"/>
                    <button className="px-5 py-2 bg-[#E4E4E4] rounded font-bold my-8">Enter</button>
                    {isLoading && <Spinner />}
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Login