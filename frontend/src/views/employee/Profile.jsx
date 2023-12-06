import DashNav from "../../components/DashNav";
import miks from "../../img/pm2.jpg"
import { MdMessage } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import Footer from "../../components/Footer";
import JobList from "../../components/JobList";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";

const Profile = () => {

    return ( 
        <>
            <DashNav />
            <div className="container mx-auto border-[1px] rounded-2xl my-10 border-black">
                <div className="h-44">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex py-4 px-10 items-center w-11/12">
                            <img src={miks} className="object-cover object-center h-36 w-36 rounded-full "/>
                            <div className="flex flex-col mx-5 w-2/5">
                                <h1 className="text-3xl font-bold">Micholo Joaquin Buenafe</h1>
                                <a href="#" className="flex items-center"><IoEarthSharp className="mr-2"/>https://github.com/Leanseln</a>
                            </div>
                            <div className="flex flex-col px-10">
                                <button className="flex items-center bg-[#123E59] text-white rounded-full px-10 text-xs font-extrabold py-1">
                                    Message<MdMessage size={15} className="ml-1"/>
                                </button>
                                <button className="flex items-center justify-center bg-[#123E59] text-white rounded-full mt-3 text-xs font-extrabold py-1">
                                    Add Content<RiContactsFill size={15} className="ml-1"/>
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-around bg-[#dde2e7] h-44 w-1/12 rounded-tr-2xl rounded-br-2xl text-center">
                            <div>
                                <p className="font-bold">Php <span className="text-3xl">120M</span> </p>
                                <p className="text-sm">Total Earnings</p>
                            </div>
                            <div className="">
                                <p className="text-3xl font-bold">694</p>
                                <p className="text-sm">Total Job</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex justify-between">
                <div className="border-[1px] border-black w-1/5 px-5 h-fit rounded-2xl">
                    <div className="py-5">
                        <div>
                            <p className="font-bold underline">Personal Information</p>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold">benjie.lyfie@gmail.com</p>
                                    <p className=" text-sm">Current Email Address</p>
                                </div>
                                <BiSolidMessageSquareEdit size={20} className="hover:scale-110"/>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold">Kiko Camarin, Caloocan City</p>
                                    <p className=" text-sm">Current Address</p>
                                </div>
                                <BiSolidMessageSquareEdit size={20} className="hover:scale-110" />
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold">0910231212312</p>
                                    <p className=" text-sm">Contact Number</p>
                                </div>
                                <BiSolidMessageSquareEdit size={20} className="hover:scale-110"/>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold">February 29, 1995</p>
                                    <p className=" text-sm">Birthdate</p>
                                </div>
                                <BiSolidMessageSquareEdit size={20} className="hover:scale-110"/>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h1 className="underline font-bold">Education</h1>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold">University of Caloocan City</p>
                                    <p className=" text-sm">Bachelor of Science</p>
                                </div>
                                <BiSolidMessageSquareEdit size={20} className="hover:scale-110"/>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold">High School</p>
                                    <p className=" text-sm">Grade 10 (2011 - 2015)</p>
                                </div>
                                <BiSolidMessageSquareEdit size={20} className="hover:scale-110"/>
                            </div>
                        </div>

                        {/* Language */}
                        <div className="mt-5">
                            <h1 className="underline font-bold">Language</h1>
                            <div className="flex flex-wrap mt-1">
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    Filipino(Mother Tongue)
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                English(Primary)
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    English(Primary)
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-5">
                            <h1 className="underline font-bold">Skills</h1>
                            <div className="flex flex-wrap mt-1">
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    Networking
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    Memeh
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    Oug Oug
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Preferred Payment */}
                        <div className="mt-5">
                            <h1 className="underline font-bold">Language</h1>
                            <div className="flex flex-wrap mt-1">
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    Paypal
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    Gcash
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    Google Pay
                                </button>
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-9/12 border-[1px] border-black rounded-2xl">
                    <div className="mt-5 ml-5 mr-2">
                        <div className="flex justify-between">
                            <h1 className="text-3xl font-bold">Prof sa UCC</h1>
                            <BiSolidMessageSquareEdit size={25} className="hover:scale-110"/>
                        </div>
                        
                        <p className="text-sm mt-3">Description about self here</p>
                        <p className="text-sm mt-3">Lorem ipsum dolor sit amet. Aut galisum minus et 
                            fugit architecto rem corrupti nulla hic iusto iusto et expedita 
                            recusandae non blanditiis magnam et eveniet eveniet. Et dicta tempore 
                            ut dicta consequatur et illo quia. Rem placeat officia id rerum quas et 
                            placeat reiciendis cum velit dolor id maiores officia 
                            rem quidem voluptas est delectus eveniet? Qui reiciendis 
                            possimus aut suscipit quia est voluptates voluptate et placeat deserunt 
                            ut debitis totam id debitis sint. Idrem quidem voluptas est delectus eveniet? Qui reiciendis 
                            possimus aut suscipit quia est voluptates voluptate et placeat deserunt 
                            ut debitis totam id debitis sint. Id</p>
                        <button className="mt-2 underline font-bold text-sm text-[#123E59]  ">More</button>
                    </div>
                    <hr className="my-5 border-[1px] border-black"/>
                <h1 className="px-5 py-2 text-3xl font-bold">Work History</h1>
                <JobList 
                    title="Web Deisgn"
                    salary="1000"
                    description="Lorem ipsum dolor sit amet. Aut galisum minus et 
                    fugit architecto rem corrupti nulla hic iusto iusto et expedita 
                    recusandae non blanditiis magnam et eveniet eveniet. Et dicta tempore 
                    ut dicta consequatur et illo quia. Rem placeat officia id rerum quas et 
                    placeat reiciendis cum velit dolor id maiores officia 
                    rem quidem voluptas est delectus eveniet? Qui reiciendis 
                    possimus aut suscipit quia est voluptates voluptate et placeat deserunt 
                    ut debitis totam id debitis sint. Idrem quidem voluptas est delectus eveniet? Qui reiciendis 
                    possimus aut suscipit quia est voluptates voluptate et placeat deserunt 
                    ut debitis totam id debitis sint. Id"
                />
                <hr className="mt-5 border-[1px] border-black"/>
                <div className="px-5 py-5">
                    <h1 className="font-bold text-3xl">Portfolio</h1>
                    <div className="flex justify-between mt-5">
                        <p className="flex text-center font-bold w-1/5"><FaGlobeAfrica size={20} className="mr-1"/>Project Title/Weblink</p>
                        <p className="w-9/12">Lorem ipsum dolor sit amet. Aut galisum minus et 
                    fugit architecto rem corrupti nulla hic iusto iusto et expedita 
                    recusandae non blanditiis magnam et eveniet eveniet. Et dicta tempore 
                    ut dicta consequatur et illo quia. Rem placeat officia id rerum quas et 
                    placeat reiciendis cum velit dolor id maiores officia 
                    rem quidem voluptas est delectus eveniet? Qui reiciendis 
                    possimus aut suscipit quia est voluptates voluptate et placeat deserunt 
                    ut debitis totam id debitis sint. Idrem quidem voluptas</p>
                    </div>
                <div className="mt-3 flex justify-between">
                        <p className="flex font-bold w-1/5"><FaGlobeAfrica size={20} className="mr-1"/> Project Title/Weblink</p>
                        <p className="w-9/12">Lorem ipsum dolor sit amet. Aut galisum minus et 
                    fugit architecto rem corrupti nulla hic iusto iusto et expedita 
                    recusandae non blanditiis magnam et eveniet eveniet. Et dicta tempore 
                    ut dicta consequatur et illo quia. Rem placeat officia id rerum quas et 
                    placeat reiciendis cum velit dolor id maiores officia 
                    rem quidem voluptas est delectus eveniet? Qui reiciendis 
                    possimus aut suscipit quia est voluptates voluptate et placeat deserunt 
                    ut debitis totam id debitis sint. Idrem quidem voluptas</p>
                    </div>
                <div className="mt-3 flex justify-between">
                        <p className="flex font-bold w-1/5"><FaGithub size={20} className="mr-1"/>Github</p>
                        <p className="w-9/12">Lorem ipsum dolor sit amet. Aut galisum minus et 
                    fugit architecto rem corrupti nulla hic iusto iusto et expedita 
                    recusandae non blanditiis magnam et eveniet eveniet. Et dicta tempore 
                    ut dicta consequatur et illo quia. Rem placeat officia id rerum quas et 
                    placeat reiciendis cum velit dolor id maiores officia 
                    rem quidem voluptas est delectus eveniet? Qui reiciendis 
                    possimus aut suscipit quia est voluptates voluptate et placeat deserunt 
                    ut debitis totam id debitis sint. Idrem quidem voluptas</p>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;