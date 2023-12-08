/* eslint-disable react/prop-types */
import { CiSaveDown2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const ViewApplicant = ({setModal, title="Applicants",applicantName="Name of Applicant Here", detail="Detail Here", client="Client Name", jobs=0, spent=0}) => {
    return ( 
        <>
            <div className="absolute overflow-auto bg-black bg-opacity-50 top-0 left-0 h-full z-10 w-full">
                <div className="bg-white w-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl z-20 p-10">
                <IoCloseOutline size={30} className="absolute right-1 top-1 cursor-pointer" onClick={() => setModal(false)}/>
                    <h1 className="mx-4 mt-2 font-bold text-4xl">Job Detail</h1>
                    <div className="flex m-4">
                        <div className="w-2/3">
                            <h1 className="font-bold text-[#123E59] text-2xl px-5">{title}</h1>
                            <p className="mt-3 px-5 underline font-bold text-base" >{applicantName}</p>
                            <div className="mt-3 px-5 flex">
                                <div className="w-11/12">
                                    <p className="text-sm min-h-fit overflow-x-hidden">{detail}</p>
                                </div>
                                <div className="w-1/12 flex justify-center items-center">
                                    <button className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded mr-1"><FaCheck size={12}/></button>
                                    <button className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded"><FaX size={12}/></button>
                                </div>
                            </div>

                            <div className="w-full">
                                <p className="mt-3 px-5 underline font-bold text-base" >{applicantName}</p>
                                <div className="mt-3 px-5 flex">
                                    <div className="w-11/12">
                                        <p className="text-sm min-h-fit overflow-x-hidden">{detail}</p>
                                    </div>
                                    <div className="w-1/12 flex justify-center items-center">
                                        <button className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded mr-1"><FaCheck size={12}/></button>
                                        <button className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded"><FaX size={12}/></button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full">
                                <p className="mt-3 px-5 underline font-bold text-base" >{applicantName}</p>
                                <div className="mt-3 px-5 flex">
                                    <div className="w-11/12">
                                        <p className="text-sm min-h-fit overflow-x-hidden">{detail}</p>
                                    </div>
                                    <div className="w-1/12 flex justify-center items-center">
                                        <button className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded mr-1"><FaCheck size={12}/></button>
                                        <button className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded"><FaX size={12}/></button>
                                    </div>
                                </div>
                            </div>
                            
                        </div> 
                        <div className="border-black border-[1px]">
                            {/* Border Line in Middle */}
                        </div>
                        {/* Right Side */}
                        <div className="w-1/4 flex flex-col mx-auto">
                            <div className="flex flex-col w-full">
                                <button className="text-[#FFFFFF] border-1 bg-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2">
                                    Edit My Proposal
                                </button>
                                <button className="text-[#123E59] border-2 border-[#123E59] rounded-full py-1 px-2 text-sm mr-2 mb-2 flex items-center justify-center">
                                    View Detail  <CiSaveDown2 size={20} className="ml-1"/>
                                </button>
                            </div>
                            <div>
                                <h1 className="text-xl font-semibold">About the Client</h1>
                                <p className="text-sm my-2">{client}</p>
                                <div className="text-sm my-2">
                                    <p>{jobs} job(s) requested</p>
                                    <p className="text-[#AEAEAE]">100% hire rate</p>
                                </div>
                                <div className="text-sm my-2">
                                    <p>{spent}</p>
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