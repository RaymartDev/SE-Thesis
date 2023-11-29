import Navbar from "../components/Navbar"

const Login = () => {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-center bg-slate-50 w-50% h-50%">
                <input type="text" className="w-20 bg-slate-200 mt-10 rounded"/>
                <input type="email" className="w-20 bg-slate-200 mt-5 rounded"/>
                <input type="password" className="w-20 bg-slate-200 mt-5 rounded"/>
            </section>
        </>
    )
}

export default Login