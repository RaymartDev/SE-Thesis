/* eslint-disable react/prop-types */
import DashNav from "../../components/DashNav";
import { IoSearch } from "react-icons/io5";
import Profile from "../../components/Profile";
import { TbStatusChange } from "react-icons/tb";
import { useState, useEffect } from "react";
import { lazy, Suspense } from 'react'
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../slices/authSlice";

const MyJobs = lazy(() => import("./MyJobs"))
const AvailableJobs = lazy(() => import("./AvailableJobs"))
const SavedJob = lazy(() => import("./SavedJob"))
const CompletedJob = lazy(() => import("./CompletedJob"))


const Dashboard = ({info}) => {
    const [navPage, setNavPage] = useState(1)
    const [search, setSearch] = useState("")


    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!info) {
            dispatch(logout())
            navigate('/login')
        }
    }, [info, dispatch, navigate])
    
    const handleActiveBtn = (e) => {
        e.preventDefault()
        setNavPage(1)
    }

    const handleJobsBtn = (e) => {
        e.preventDefault()
        setNavPage(2)
    }

    const handleSaveBtn = (e) => {
        e.preventDefault()
        setNavPage(3)
    }

    const handleCompleteBtn = (e) => {
        e.preventDefault()
        setNavPage(4)
    }

    const activeClass = "font-bold border-black border-[1px] rounded-full px-3 py-1 text-white bg-[#123E59] mr-4"
    const inactiveClass = "font-bold border-black border-[1px] rounded-full px-3 py-1 text-[#123E59] bg-white mr-4"

    if(info) {
        return ( 
            <>
            <DashNav />
                <div className="container flex mx-auto justify-between mt-14">
                    <div className="w-3/4">
                        <div className=" border-black rounded-full border-[1px] relative">
                            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="w-full px-10 py-2 rounded-full text-black" />
                            <IoSearch size={20} className="absolute translate-x-4 top-1/2 -translate-y-1/2"/>
                        </div>
                        
                        
                        <div className="rounded-2xl border-[1px] border-black mt-6">
                            <div className="flex justify-between px-6 items-center my-4">
                                <h1 className="text-3xl font-bold">Jobs you might like</h1>
                                <TbStatusChange size={30}/>
                                
                            </div>
                            <hr className="bg-black h-[2px]"/>
                            <div className="flex px-6 my-4"  >
                                <button onClick={handleActiveBtn} className={navPage === 1 ? activeClass : inactiveClass}>Active Jobs</button>
                                <button onClick={handleJobsBtn} className={navPage === 2 ? activeClass : inactiveClass}>My Jobs</button>
                                <button onClick={handleSaveBtn} className={navPage === 3 ? activeClass : inactiveClass}>Saved Jobs</button>
                                <button onClick={handleCompleteBtn} className={navPage === 4 ? activeClass : inactiveClass}>Completed Jobs</button>
                            </div>
                            <hr className="bg-black h-[2px]"/>
                            <Suspense fallback={<Spinner/>}>
                                {(navPage === 1 && info) && <AvailableJobs query={search} />}
                                {(navPage === 2 && info) && <MyJobs query={search} />}
                                {(navPage === 3 && info) && <SavedJob query={search} />}
                                {(navPage === 4 && info) && <CompletedJob query={search} />}
                            </Suspense>
                        </div> 
                        
                    </div>
    
                    <div className="w-1/5 flex flex-col items-center border-[1px] h-72 border-black rounded-xl">
                        <Profile
                            name={info.name}
                            website={info.website}
                            portfolio={info.portfolio} />
                    </div>
                    
                </div>
            </>
        );
    }
}

export default Dashboard;