import Navbar from "../components/Navbar"

const Register = () => {
    return (
        <>
            <Navbar/>
            <section className="container mx-auto flex flex-col items-center my-60 bg-[#F6F6F6] w-1/5 rounded">
                    <h1 className="text-2xl font-bold mt-5">Sign up</h1>
                    <input type="text" placeholder="Name" required className="w-9/12 mt-8 px-5 py-2 rounded bg-[#E4E4E4]"/>
                    <input type="email" placeholder="Email" required className="w-9/12 mt-5 px-5 py-2 rounded bg-[#E4E4E4]"/>
                    <input type="password" placeholder="Password" required className="w-9/12 mt-5 px-5 py-2 rounded bg-[#E4E4E4]"/>
                    <button className="px-5 py-2 bg-[#E4E4E4] rounded font-bold my-8">Register</button>
            </section>
        </>
    )
}

export default Register