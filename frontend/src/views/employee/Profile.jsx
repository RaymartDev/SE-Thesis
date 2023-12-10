/* eslint-disable react/prop-types */
import DashNav from "../../components/DashNav";
import miks from "../../img/professional.png"
import Footer from "../../components/Footer";
import { FaGithub } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import Education from "../../components/Education";
import LanguageOval from "../../components/LanguageOval"
import JobDescription from "../../components/JobDescription";
import { lazy, Suspense} from 'react'
import Spinner from "../../components/Spinner";
import ProjectDescription from "../../components/ProjectDescription";

const MyJobs = lazy(() => import('./MyJobs'))

const Profile = ({info}) => {

    return ( 
        <>
            <DashNav />
            <div className="container mx-auto border-[1px] rounded-2xl my-10 border-black">
                <div className="h-44">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex py-4 px-10 items-center w-11/12">
                            <img src={miks} className="cursor-pointer object-cover object-center h-36 w-36 rounded-full "/>
                            <div className="flex flex-col mx-5 w-1/5">
                                <h1 className="text-3xl font-bold">{info.name}</h1>
                                <a href="#" className="text-[#123E59] flex items-center"><IoEarthSharp size={20} className="mr-2 text-[#123E59]"/>{info.website ? info.website : 'Your Website'}</a>
                                <a href="#" className="text-[#123E59] flex items-center"><FaGithub size={20} className="mr-2 text-[#123E59]"/>{info.website ? info.website : 'Your Website'}</a>
                            </div>
                            <div className="flex flex-col px-10 hover:scale-105 transition-all duration-75">
                                <button className="flex items-center bg-[#123E59]  text-white rounded-full px-10 text-xs font-extrabold py-4">
                                    Change Password&nbsp;&nbsp;<FaKey size={15}/>
                                </button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col justify-around bg-[#dde2e7] h-44 w-1/12 rounded-tr-2xl rounded-br-2xl text-center">
                            <div>
                                <p className="font-bold">Php <span className="text-3xl">{info.earnings}</span> </p>
                                <p className="text-sm">Total Earnings</p>
                            </div>
                            <div className="">
                                <p className="text-3xl font-bold">{info.jobs.length}</p>
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
                            <div className="flex justify-between items-center mt-6">
                                <div>
                                    <p className="font-bold text-sm">{info.email}</p>
                                    <p className=" text-sm">Current Email Address</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold text-sm">{info.address}</p>
                                    <p className=" text-sm">Current Address</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold text-sm">{info.contact}</p>
                                    <p className=" text-sm">Contact Number</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div>
                                    <p className="font-bold text-sm">{info.birthDate}</p>
                                    <p className=" text-sm">Birthdate</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5">
                            <h1 className="underline font-bold">Education</h1>
                                {info.education && info.education.length > 0 
                                && info.education.map((item, index) => (
                                    <Education
                                        key={`${item}-${index}`}
                                        school={item.split(',')[0]}
                                        course={item.split(',')[1]}
                                        year={item.split(',')[2]}
                                    />
                                ))}
                        </div>

                        {/* Language */}
                        <div className="mt-5">
                            <h1 className="underline font-bold">Language</h1>
                            <div className="flex flex-wrap mt-1">
                                {info.language && info.language.length > 0 
                                && info.language.map((item, index) => (
                                    <LanguageOval 
                                        key={`${item}-${index}`}
                                        language={item}
                                    />
                                ))}
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-5">
                            <h1 className="underline font-bold">Skills</h1>
                            <div className="flex flex-wrap mt-1">
                                {info.skills && info.skills.length > 0 
                                    && info.skills.map((item, index) => (
                                        <LanguageOval 
                                            key={`${item}-${index}`}
                                            language={item}
                                        />
                                    ))}
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Preferred Payment */}
                        <div className="mt-5">
                            <h1 className="underline font-bold">Payment Gateway</h1>
                            <div className="flex flex-wrap mt-1">
                                    {info.payment && info.payment.length > 0 
                                    && info.payment.map((item, index) => (
                                        <LanguageOval 
                                            key={`${item}-${index}`}
                                            language={item}
                                        />
                                    ))}
                                <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="w-9/12 border-[1px] border-black rounded-2xl">
                    {info.occupation && info.occupation.length > 0 ? (
                            info.occupation.map((item, index) => (
                                <JobDescription 
                                    key={`${item}-${index}`}
                                    title={item.title}
                                    year={item.year}
                                    description={item.description}
                                />
                            ))
                        ) : (
                                <JobDescription 
                                    key={1}
                                    title='Job Title'
                                    year='(starting year - end year)'
                                    description='Job Description'
                                />
                    )}
                    
                
                <hr className="mt-5 border-[1px] border-black"/>
                <div className="px-5 py-5">
                    <div className="flex justify-between">
                        <h1 className="font-bold text-3xl">Portfolio</h1>
                    </div>
                    {info.projects && info.projects.length > 0 ? (
                            info.projects.map((item, index) => (
                                <ProjectDescription 
                                    key={`${item}-${index}`}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))
                        ) : (
                                <ProjectDescription 
                                    key={1}
                                    title='Project Title / Link'
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                                />
                    )}
                
                </div>
                <hr className="my-5 border-[1px] border-black"/>
                <h1 className="px-5 py-2 text-3xl font-bold">Work History</h1>
                <Suspense fallback={<Spinner />}>
                    <MyJobs/>
                </Suspense>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;