import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../slices/authSlice"
import { toast } from 'react-toastify'
import { useRegisterMutation } from "../slices/usersApiSlice"
import Spinner from "../components/Spinner"
import SELogo from "../img/Logo.png"

const Register = () => {
    const [role, setRole] = useState("client")
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [address, setAddress] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [email, setEmail] = useState("")

    const handleRadio = (event) => {
        setRole(event.target.value.toLowerCase());
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [register, { isLoading }] = useRegisterMutation();

    const { userInfo } = useSelector((state) => state.auth)


    const navigateToLogin = (e) => {
        e.preventDefault()
        navigate('/login')
    }

    useEffect(() => {
        if(userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])

    const submitHandler = async (e) => {


        e.preventDefault()
        try {
            const res = await register({ role, name, gender, birthDate, contact: contactNumber, address, username, password, email }).unwrap()
            dispatch(setCredentials({ ...res }))
            toast.success('You have been registered successfully', {
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
            <Navbar/>
            <section className="h-screen drop-shadow-2xl shadow-2xl">
                <section className="h-screen flex justify-center items-center pt-16"> 
                    <form className="container mx-auto flex items-center bg-[#F6F6F6] w-8/12 h-4/5 rounded-2xl border-2 drop-shadow-2xl" onSubmit={submitHandler}>
                        <div className="bg-[#123E59] w-1/3 h-full rounded-tl-2xl rounded-bl-2xl flex flex-col items-center justify-between py-16">
                            
                            <div>
                                <img src={SELogo}/>
                            </div>

                            <div>
                                <h1 className="text-white font-bold text-4xl w-48">Hello Welcome!</h1> 
                                <p className="text-white font-extralight text-xs mt-6">Already have an account?</p>
                                <button onClick={navigateToLogin} className="bg-[#F6B51D] text-[#123E59] font-bold rounded-full py-3 px-5 mt-2">Log In</button>
                            </div>

                        </div>
                        <div className="w-3/4 flex items-center justify-center">
                            <div className="flex flex-col items-left w-3/6">

                                <h1 className="text-4xl font-extrabold mt-5">Create an account</h1>
                                <p className="mt-3 text-sm">Please input your information to create an account</p>
                                <p className="mt-5 text-sm">Create an account as a:</p>

                                <div className="flex mt-1">
                                    <input type="radio" checked={role === 'client'} value='client' onChange={handleRadio} name="role" className="cursor-pointer mr-1"/>
                                    <label htmlFor="client" className="mr-5 font-extrabold ">Client</label>
                                    <input type="radio" name="role" checked={role === 'freelancer'} value='freelancer' onChange={handleRadio} className="cursor-pointer mr-1"/>
                                    <label htmlFor="freelancer" className="font-extrabold">Freelancer</label>
                                </div>

                                <div className="flex mt-2">
                                    <div className="flex flex-col mr-5 w-9/12">
                                        <label htmlFor="fullName" className="font-extrabold">Full Name</label>
                                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="fullName" placeholder="Full Name" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>
                                    </div>
                                    <div className="flex flex-col w-1/4">
                                        <label htmlFor="age" className="font-extrabold">Gender</label>
                                        <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" name="age" placeholder="Gender" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1" />
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex flex-col mr-5 w-2/5">
                                        <label htmlFor="birthDate" className="font-extrabold mt-2">Birthdate</label>
                                        <input value={birthDate} onChange={(e) => setBirthDate(e.target.value)} type="date" name="birthDate" placeholder="MM/DD/YYYY" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>
                                    </div>
                                    <div className="flex flex-col w-8/12">
                                        <label htmlFor="contactNumber" className="font-extrabold mt-2">Contact Number</label>
                                        <input value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} type="text" name="contactNumber" placeholder="Contact Number" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>
                                    </div>
                                </div>

                                <label htmlFor="Address" className="font-extrabold mt-2">Address</label>
                                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" name="Address" placeholder="Address" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>
                                <label htmlFor="emailAddress" className="font-extrabold mt-2">Email Address</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="emailAddress" placeholder="Email Address" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>
                                <label htmlFor="username" className="font-extrabold mt-2">Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" placeholder="Username" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>

                                <div className="flex justify-between mt-2">
                                    <div className="flex flex-col">
                                        <label htmlFor="password" className="font-extrabold">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="rePassword" className="font-extrabold">Repassword</label>
                                        <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" name="rePassword" placeholder="Repassword" className="mt-2 rounded-xl bg-[#D9D9D9] pl-3 py-1"/>
                                    </div>
                                </div>
                                
                                
                                <button className="px-5 py-2 bg-[#F6B51D] text-[#123E59] w-1/4 rounded-full font-bold my-8 place-self-center">Register</button>
                                {isLoading && <Spinner />}
                            </div> 
                        </div>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Register