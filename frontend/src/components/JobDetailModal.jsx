/* eslint-disable react/prop-types */
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useSaveJobMutation } from "../slices/jobApiSlice";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { addSaveJob } from "../slices/jobSlice";
import { useNavigate } from "react-router-dom";

const JobDetailModal = ({id, setModalType}) => {
    const { jobsInfo } = useSelector((state) => state.jobs)

    const job = jobsInfo.find((job) => job._id === id)
    const { userInfo } = useSelector((state) => state.auth)

    const [saveJob, { isLoading }] = useSaveJobMutation()
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleOtherProfile = (id) => {
        navigate(`/profile/${id}`)
    }

    const handleProposal = () => {
        setModalType(4)
    }

    const handleSave = async (e) => {
        e.preventDefault()

        try {
            const res = await saveJob({id}).unwrap()
            dispatch(addSaveJob(res.job))
            toast.success(res.message)
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

    const handleApplicants = () => {
        setModalType(3)
    }

    if(job && job.owner._id === userInfo._id) {
        if(job.status !== 2) {
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
                                        <button onClick={handleApplicants} className="text-[#123E59] border-2 border-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2 flex items-center justify-center">
                                            See Applicants  <CiSaveDown2 size={20} className="ml-1"/>
                                        </button>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">About the Client</h1>
                                        <p className="text-sm my-2">{job.owner.name}</p>
                                        
                                        <div className="text-sm my-2">
                                            <p>{job.proposals.length} Proposal(s)</p>
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
        if(job.status === 2) {
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
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold">About the Freelancer</h1>
                                        <p className="text-sm my-2 cursor-pointer text-[#123E59] font-semibold" onClick={() => {
                                            handleOtherProfile(job.employee._id)
                                        }}>{job.employee.name}</p>
                                        
                                        <div className="text-sm my-2">
                                            <p>{job.employee.jobs.filter(job => job.status === 5).length} job(s) completed</p>
                                            <p className="text-[#AEAEAE]">100% complete rate</p>
                                        </div>
                                        <div className="text-sm my-2">
                                            <p>{job.employee.earnings}</p>
                                            <p className="text-[#AEAEAE]">Total earned</p>
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

    if(job) {
        return ( 
            <>
                {isLoading && <Spinner/>}
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
                                    {userInfo.role === 'employee' ? (<><button onClick={handleProposal} className="text-[#FFFFFF] border-1 bg-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2">
                                        Send Proposal
                                    </button>
                                    <button onClick={handleSave} className="text-[#123E59] border-2 border-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2 flex items-center justify-center">
                                        Save This Job  <CiSaveDown2 size={20} className="ml-1"/>
                                    </button></>) : (<></>)}
                                </div>
                                <div>
                                    <h1 className="text-xl font-semibold">About the Client</h1>
                                    <p className="text-sm my-2">{job.owner.name}</p>
                                    <p className="text-black">{job.proposals.length} Applicants</p>
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