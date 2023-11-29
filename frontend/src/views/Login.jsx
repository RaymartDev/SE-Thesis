import Navbar from "../components/Navbar"

const Login = () => {
    return (
        <>
            <Navbar />
            <section className="w-3/4 h-full bg-slate-500">
                <section className="flex flex-col w-2/4 bg-slate-50 h-3/4">
                    <input type="email" placeholder="Email" className="w-20 bg-slate-200 mt-5 rounded"/>
                    <input type="password" placeholder="Password" className="w-20 bg-slate-200 mt-5 rounded"/>
                </section>
            </section>
            
        </>
    )
}

export default Login