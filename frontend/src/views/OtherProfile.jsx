/* eslint-disable react/prop-types */
import DashNav from "../components/DashNav";
import miks from "../img/professional.png"
import Footer from "../components/Footer";
import { IoEarthSharp } from "react-icons/io5";
import { lazy, Suspense, useEffect, useState } from 'react'
import Spinner from "../components/Spinner";
import Education from "../components/Education";
import LanguageOval from "../components/LanguageOval"
import JobDescription from "../components/JobDescription";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOtherInfo } from "../slices/authSlice";

const MyJobs = lazy(() => import('./user/MyJobs'))

const OtherProfile = () => {
    const { id : paramId } = useParams()
    const [isLoading, setIsLoading] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        fetch(`/api/users/other/${paramId}`)
          .then(response => response.json())
          .then(data => dispatch(setOtherInfo(data)))
          .catch(error => toast.error(error.message));
        setIsLoading(false)
      }, [dispatch, paramId]);

      const { otherInfo : info } = useSelector((state) => state.auth)

    if(isLoading) {
        <Spinner />
    }

    if(info) {
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
                                </div>
                            </div>
                            
                            <div className="flex flex-col justify-around bg-[#dde2e7] h-44 w-1/12 rounded-tr-2xl rounded-br-2xl text-center">
                                <div>
                                    <p className="font-bold">Php <span className="text-3xl">{info.earnings}</span> </p>
                                    <p className="text-sm">Total Spend</p>
                                </div>
                                <div className="">
                                    <p className="text-3xl font-bold">{info.jobs ? info.jobs.length : 0}</p>
                                    <p className="text-sm">Total Request</p>
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
                                    title='Your Job Title'
                                    year='(starting year - end year)'
                                    description='Your Job Description'
                                    viewMode={true}
                                />
                        )}
                        <hr className="my-5 border-[1px] border-black"/>
                    <h1 className="px-5 py-2 text-3xl font-bold">Request History</h1>
                    <Suspense fallback={<Spinner />}>
                        <MyJobs/>
                    </Suspense>
            
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default OtherProfile;