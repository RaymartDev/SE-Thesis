import Navbar from "./components/Navbar"
import bg2 from "./img/bg.png"
import App from "./img/App.png"
import globe from "./img/globe.png"
import ink from "./img/Ink.png"
import megaphone from "./img/megaphone.png"
import Team from "./img/team.png"
import SETechLogo from "./img/SETechBlack.png"
import Phone from "./img/phone.png"
import Envelope from "./img/envelope.png"
import Card from "./components/Card"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import TeamCard from "./components/TeamCard"
import pm from "./img/pm.jpg"
import pm2 from "./img/pm2.jpg"
import pm3 from "./img/pm3.jpg"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const Landing = () => {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const { userInfo } = useSelector((state) => state.auth)

    const handleContact = (e) => {
        e.preventDefault()
    }

    const navigate = useNavigate()
    const handleButton = (e) => {
        e.preventDefault()
        navigate("/register")
    }

    useEffect(() => {
        if(userInfo) {
            navigate('/dashboard')
        }
    }, [navigate,userInfo])

    return (
        <>
            <Navbar />
            <main id="top">
                <div>
                    <div className="flex justify-end relative ">
                        <img src={bg2} className="absolute w-3/5 "/>
                    </div>
                    <div className="container mx-60 my-52 w-2/5 text-[#000000]">
                        <h1 className="font-extrabold text-5xl">You Idea is our passion. The only limit is your imagination</h1>
                        <p className="mt-8 text-[#000000] font-light text-2xl w-96">Be One of Us or Experience our Greatness!</p>
                        <button onClick={handleButton} className="bg-[#123E59] text-[#FFFFFF] font-extrabold text-4 py-2 px-4 rounded hover:text-[#F6B51D] mt-5">
                            Explore More
                        </button>
                    </div>
                </div>
            </main>

            <section id="services">
                <h1 className="text-center text-black font-extrabold text-5xl mt-64">Our Services</h1>
                <div className="grid grid-cols-4 container m-auto mt-10 gap-10">
                    <Card
                        title="Web Development"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis."
                        img={globe}
                    />
                    <Card
                        title="App Development"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis."
                        img={App}
                    />
                    <Card
                        title="Graphic Design"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis."
                        img={ink}
                    />
                    <Card
                        title="Logo Branding"
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                        Curabitur tempus urna at turpis condimentum lobortis."
                        img={megaphone}
                    />
                </div>
                <div className="container m-auto mt-10 grid grid-cols-3">
                    <div className="col-span-2">
                        <h1 className="font-extrabold text-5xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        Nunc vulputate.</h1>  
                    </div>
                    <div className="flex justify-center items-center"  >
                        <button onClick={handleButton} className="bg-black text-white rounded px-5 py-2 font-bold hover:text-[#F6B51D]">See all</button>
                    </div>
                </div>
            </section>

                <section id="features" className="bg-[#123E59] mt-20">
                    <div className="grid grid-cols-3 container m-auto gap-20 pt-20 pb-20 text-white">
                        <div>
                            <h1 className="font-extrabold text-5xl">Our Features</h1>
                            <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                                Curabitur tempus urna at turpis condimentum lobortis.</p>
                            <button onClick={handleButton} className="bg-[#F6B51D] text-[#123E59] px-5 py-2 rounded font-bold mt-8">Learn More</button>
                        </div>
                        <div className="flex flex-col justify-around text-center">
                            <Feature 
                                name="Lorem, ipsum"
                            />
                            <Feature 
                                name="Lorem, ipsum"
                            />
                        </div>
                        <div className="flex flex-col justify-around text-left">
                            <Feature 
                                name="Lorem, ipsum"
                            />
                            <Feature 
                                name="Lorem, ipsum"
                            />
                        </div>
                    </div>
                </section>

                <section id="about" className="grid grid-cols-2 container mx-auto mt-20 gap-10">
                    <div className="flex items-center justify-center">
                        <img src={Team}/>
                    </div>
                    <div>
                        <h1 className="text-5xl font-extrabold">About Us</h1>
                        <h2 className="text-3xl font-bold mt-10">What is SE Tech?</h2>
                        <p className="mt-10">Lorem ipsum dolor sit amet. Sed natus consequatur est nesciunt facilis non accusantium natus eos quia exercitationem. 
                        Et totam voluptates et exercitationem velit id sunt dolores id sint incidunt et quas dolor. 
                        Non repudiandae repellendus quo voluptas ipsa in voluptatem laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                        In cupiditate totam est dolores corporis ut quia explicabo cum tenetur debitis qui saepe voluptatem. 
                        Rem blanditiis voluptatem est dolores nobis et harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut numquam quis! 
                        Rem optio ipsum eum enim commodi et velit similique.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet. Sed natus consequatur est nesciunt facilis non accusantium natus eos quia exercitationem. 
                        Et totam voluptates et exercitationem velit id sunt dolores id sint incidunt et quas dolor. 
                        Non repudiandae repellendus quo voluptas ipsa in voluptatem laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                        In cupiditate totam est dolores corporis ut quia explicabo cum tenetur debitis qui saepe voluptatem. 
                        Rem blanditiis voluptatem est dolores nobis et harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut numquam quis! 
                        Rem optio ipsum eum enim commodi et velit similique.</p>
                    </div>
                </section>

                <section className="container mx-auto mt-20">
                    <h1 className="text-5xl font-extrabold text-center">The Team</h1>
                    <div className="grid grid-cols-3 gap-10">
                        <TeamCard 
                            name="Raymart Sarmiento"
                            pos="Project Manager/FullStack"
                            img={pm}
                        />
                        <TeamCard 
                            name="Micholo Buenafe"
                            pos="UI/UX Developer"
                            img={pm2}
                        />
                        <TeamCard 
                            name="Leansel Nico Ortega"
                            pos="Frontend Developer"
                            img={pm3}
                        />
                    </div>
                </section>

                <section id="contacts" className="container mx-auto mt-20">
                    <h1 className="text-5xl font-extrabold">Contact Us</h1>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="bg-[#F6F6F6] p-10 mt-14 rounded">
                            <h1 className="text-3xl font-bold">Get in Touch</h1>
                            <p className="mt-3 mb-3">Ask us anything or just say hi...</p>

                            <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Firstname" className="py-2 px-5 rounded mr-5 mt-5 bg-[#E4E4E4]"/> 
                            <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Lastname" className="py-2 px-5 rounded bg-[#E4E4E4]"/><br />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Address" className="mt-5 w-full py-2 px-5 rounded bg-[#E4E4E4]"/><br />
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone Number" className="mt-5 w-full py-2 px-5 rounded bg-[#E4E4E4]"/><br />
                            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Message" className="mt-5 w-full pb-32 text-left py-2 px-5 rounded bg-[#E4E4E4]"/><br />
                            <div className="flex item-center justify-center">
                                <button onClick={handleContact} className="text-center font-bold bg-[#123E59] text-[#F6B51D] p-2 px-5 rounded mt-4">Submit</button>
                            </div>
                            
                        </div>
                        <div className="flex flex-col justify-around">
                            <div>
                                <div className="flex items-center">
                                    <img src={SETechLogo} />
                                    <h1 className="w-10 font-extrabold justify-center">SE <span className="text-[#F6B51D]">TECH</span></h1>
                                </div>
                                    <p>Lorem ipsum dolor sit amet. Sed natus consequatur est nesciunt facilis non accusantium natus eos quia exercitationem. 
                                    Et totam voluptates et </p>
                            </div>
                            <div>
                                <div className="text-2xl font-extrabold">
                                    <div className="flex items-center"><img src={Phone} className="mr-3"/><p>+63 967 947 2818</p></div>
                                    <div className="flex items-center mt-5"><img src={Envelope} className="mr-3"/><p>setech</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
        </>
    )
}

export default Landing