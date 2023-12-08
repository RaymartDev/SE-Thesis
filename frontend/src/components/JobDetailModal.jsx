/* eslint-disable react/prop-types */
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const JobDetailModal = ({id, setModalType}) => {
    const { jobsInfo } = useSelector((state) => state.jobs)

    const job = jobsInfo.find((job) => job._id === id)
    const { userInfo } = useSelector((state) => state.auth)

    if(job && job.owner._id === userInfo._id) {
        return ( 
            <>
                <div className="absolute overflow-auto bg-black bg-opacity-50 top-0 left-0 h-full z-10 w-full">
                    <div className="bg-white w-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl z-20">
                    <IoCloseOutline size={30} className="absolute right-1 top-1 cursor-pointer" onClick={() => setModalType(0)}/>
                        <h1 className="mx-4 mt-2 font-bold text-4xl">Job Detail</h1>
                        <div className="flex m-4">
                            <div className="w-2/3">
                                <h1 className="font-bold text-[#123E59] text-2xl px-5">{job.title}</h1>
                                <div className="mt-3 px-5">
                                <p className="text-sm">{job.description}</p>
                                </div>
                                <hr className="border-black border-[1px] mt-5"/>
                                <div className="flex py-10 px-5 justify-between">
                                    <p className="flex items-center"><RiMoneyDollarBoxFill size={20} className="mr-2"/>Estimated Budget ₱ {job.estimatedBudget}</p> 
                                </div>
                                <hr className="border-black border-[1px]"/>
                                <div className="flex flex-col py-4 px-5">
                                    <p className="text-xl">Expertise</p>
                                    <div className="w-11/12 flex flex-wrap mt-3">
                                        <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">{job.expertise}</button>
                                    </div>
                                </div>
                                <hr className="border-black border-[1px]"/>
                                <div className="py-5 px-5">
                                    <h1 className="text-xl">Attachments</h1>
                                    <button className="mt-2 text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">
                                        +
                                    </button>
                                </div>
                                
                            </div> 
                            <div className="border-black border-[1px]">
                                {/* Border Line in Middle */}
                            </div>
                            {/* Right Side */}
                            <div className="w-1/4 flex flex-col mx-auto">
                                <div className="flex flex-col w-full">
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        setModalType(2)
                                    }} className="text-[#FFFFFF] border-1 bg-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2">
                                        Edit Proposal
                                    </button>
                                    <button className="text-[#123E59] border-2 border-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2 flex items-center justify-center">
                                        See Applicants  <CiSaveDown2 size={20} className="ml-1"/>
                                    </button>
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">About the Client</h1>
                                    <p className="text-sm my-2">{job.owner.name}</p>
                                    <div className="text-sm my-2">
                                        <p>{job.owner.jobs.length} job(s) requested</p>
                                        <p className="text-[#AEAEAE]">100% hire rate</p>
                                    </div>
                                    <div className="text-sm my-2">
                                        <p>{job.owner.earnings}</p>
                                        <p className="text-[#AEAEAE]">Total spent</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if(job) {
        return ( 
            <>
                <div className="absolute overflow-auto bg-black bg-opacity-50 top-0 left-0 h-full z-10 w-full">
                    <div className="bg-white w-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl z-20">
                    <IoCloseOutline size={30} className="absolute right-1 top-1 cursor-pointer" onClick={() => setModalType(0)}/>
                        <h1 className="mx-4 mt-2 font-bold text-4xl">Job Detail</h1>
                        <div className="flex m-4">
                            <div className="w-2/3">
                                <h1 className="font-bold text-[#123E59] text-2xl px-5">{job.title}</h1>
                                <div className="mt-3 px-5">
                                <p className="text-sm">{job.detail}</p>
                                </div>
                                <hr className="border-black border-[1px] mt-5"/>
                                <div className="flex py-10 px-5 justify-between">
                                    <p className="flex items-center"><RiMoneyDollarBoxFill size={20} className="mr-2"/>Estimated Budget ₱ {job.estimatedBudget}</p> 
                                </div>
                                <hr className="border-black border-[1px]"/>
                                <div className="flex flex-col py-4 px-5">
                                    <p className="text-xl">Expertise</p>
                                    <div className="w-11/12 flex flex-wrap mt-3">
                                        <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">{job.expertise}</button>
                                    </div>
                                </div>
                                <hr className="border-black border-[1px]"/>
                                <div className="py-5 px-5">
                                    <h1 className="text-xl">Attachments</h1>
                                    <button className="mt-2 text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">
                                        +
                                    </button>
                                </div>
                                
                            </div> 
                            <div className="border-black border-[1px]">
                                {/* Border Line in Middle */}
                            </div>
                            {/* Right Side */}
                            <div className="w-1/4 flex flex-col mx-auto">
                                <div className="flex flex-col w-full">
                                    <button className="text-[#FFFFFF] border-1 bg-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2">
                                        Send Proposal
                                    </button>
                                    <button className="text-[#123E59] border-2 border-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2 flex items-center justify-center">
                                        Save This Job  <CiSaveDown2 size={20} className="ml-1"/>
                                    </button>
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">About the Client</h1>
                                    <p className="text-sm my-2">{job.owner.name}</p>
                                    <div className="text-sm my-2">
                                        <p>{job.owner.jobs.length} job(s) requested</p>
                                        <p className="text-[#AEAEAE]">100% hire rate</p>
                                    </div>
                                    <div className="text-sm my-2">
                                        <p>{job.owner.earnings}</p>
                                        <p className="text-[#AEAEAE]">Total spent</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default JobDetailModal;