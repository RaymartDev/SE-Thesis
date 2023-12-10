/* eslint-disable react/prop-types */
import { CiSaveDown2 } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Proposal from "../views/user/Proposal";
import { useDispatch, useSelector } from "react-redux";
import { useGetProposalQuery } from "../slices/jobApiSlice";
import { useEffect } from "react";
import { setProposal } from "../slices/jobSlice";
import { toast } from "react-toastify";
import Spinner from "./Spinner";

const ViewApplicant = ({setModalType, id,title="Applicants", client="Client Name"}) => {

    const { jobsInfo } = useSelector((state) => state.jobs)
    const { userInfo } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const {data, isLoading, error, refetch} = useGetProposalQuery(id)

    const job = jobsInfo.find((job) => job._id === id)

    useEffect(() => {
        refetch()
        if(data) {
            dispatch(setProposal(data.proposals))
        }
    }, [refetch, data, dispatch])

    const { proposals } = useSelector((state) => state.jobs)

    useEffect(() => {
        if(error) {
            console.log(error)
            if(error.data) {
                toast.error(error.data.message, {
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
    }, [error])

    if(isLoading) {
        return (
            <Spinner />
        )
    } 

    return ( 
        <>
            <div className="absolute overflow-auto bg-black bg-opacity-50 top-0 left-0 h-full z-10 w-full">
                <div className="bg-white w-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl z-20 p-10">
                <IoCloseOutline size={30} className="absolute right-1 top-1 cursor-pointer" onClick={() => setModalType(1)}/>
                    <h1 className="mx-4 mt-2 font-bold text-4xl">Job Detail</h1>
                    <div className="flex m-4">
                        <div className="w-2/3">
                            <h1 className="font-bold text-[#123E59] text-2xl px-5">{title}</h1>
                            <Proposal proposals={proposals} setModalType={setModalType} jobID={id} />
                            
                        </div> 
                        <div className="border-black border-[1px]">
                            {/* Border Line in Middle */}
                        </div>
                        {/* Right Side */}
                        <div className="w-1/4 flex flex-col mx-auto">
                            <div className="flex flex-col w-full">
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setModalType(2)
                                }} className="text-[#FFFFFF] border-1 bg-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2">
                                    Edit My Proposal
                                </button>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setModalType(1)
                                }} className="text-[#123E59] border-2 border-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2 flex items-center justify-center">
                                    View Detail  <CiSaveDown2 size={20} className="ml-1"/>
                                </button>
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold">About the Client</h1>
                                <p className="text-sm my-2">{client}</p>
                                <div className="text-sm my-2">
                                    <p>{job.proposals.length} Proposal(s)</p>
                                    <p>{userInfo.jobs.length} job(s) requested</p>
                                    <p className="text-[#AEAEAE]">100% hire rate</p>
                                </div>
                                <div className="text-sm my-2">
                                    <p>{userInfo.earnings}</p>
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

export default ViewApplicant;