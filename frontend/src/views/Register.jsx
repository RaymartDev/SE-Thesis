import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../slices/authSlice"
import { toast } from 'react-toastify'
import { useRegisterMutation } from "../slices/usersApiSlice"
import Spinner from "../components/Spinner"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth)

    useEffect(() => {
        if(userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await register({ name, email, password }).unwrap()
            dispatch(setCredentials({ ...res }))
            toast.success('You have been registered successfully', {
                position: "top-right",
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
            toast.error(err?.data?.message || err.error)
        }
    }

    return (
        <>
            <Navbar/>
            <section>
                    <form className="container mx-auto flex flex-col items-center my-60 bg-[#F6F6F6] w-1/5 rounded" onSubmit={submitHandler}>
                        <h1 className="text-2xl font-bold mt-5">Sign up</h1>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" required className="w-9/12 mt-8 px-5 py-2 rounded bg-[#E4E4E4]"/>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required className="w-9/12 mt-5 px-5 py-2 rounded bg-[#E4E4E4]"/>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-9/12 mt-5 px-5 py-2 rounded bg-[#E4E4E4]"/>
                        <button className="px-5 py-2 bg-[#E4E4E4] rounded font-bold my-8">Register</button>
                        {isLoading && <Spinner />}
                    </form>
            </section>
        </>
    )
}

export default Register