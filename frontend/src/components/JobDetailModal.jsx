import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaHeadSideVirus } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";

const JobDetailModal = () => {
    return ( 
        <>
                <div className="w-1/2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl z-20">
                    <h1 className="mx-4 mt-2 font-bold text-4xl">Job Detail</h1>
                    <div className="flex m-4">
                        <div className="w-2/3">
                            <h1 className="font-bold text-[#123E59] text-2xl px-5">Title</h1>
                            <div className="mt-3 px-5">
                            <p className="text-sm">Lorem ipsum dolor sit amet. Sed natus consequatur est 
                            nesciunt facilis non accusantium natus eos quia 
                            exercitationem. Et totam voluptates et exercitationem 
                            velit id sunt dolores id sint incidunt et quas dolor. 
                            Non repudiandae repellendus quo voluptas ipsa in 
                            voluptatem laboriosam aut nihil reiciendis aut amet 
                            delectus non neque vero. 
                            In cupiditate totam est dolores corporis ut quia</p>
                            </div>
                            <hr className="border-black border-[1px] mt-5"/>
                            <div className="flex py-10 px-5 justify-between">
                                <p className="flex items-center"><RiMoneyDollarBoxFill size={20} className="mr-2"/>Estimated Budget $6000</p>
                                <p className="flex items-center"><FaHeadSideVirus size={18} className="mr-2"/>Entry Level</p>    
                            </div>
                            <hr className="border-black border-[1px]"/>
                            <div className="flex flex-col py-4 px-5">
                                <p className="text-xl">Skills and Expertise</p>
                                <div className="w-11/12 flex flex-wrap mt-3">
                                    <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">UI/UX Design</button>
                                    <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">Graphic Design</button>
                                    <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">Backend Developer</button>
                                    <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">Frontend Developer</button>
                                    <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">UI/UX Design</button>
                                    <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">UI/UX Design</button>
                                    <button className="text-[#123E59] bg-[#efeff0] rounded-full py-1 px-2 text-xs mr-2 mb-2">+</button>
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
                                <p className="text-sm my-2">Client Name</p>
                                <div className="text-sm my-2">
                                    <p>HR Manager</p>
                                    <p className="text-[#AEAEAE]">Member since August 2023</p>
                                </div>
                                <div className="text-sm my-2">
                                    <p>7 jobs requested</p>
                                    <p className="text-[#AEAEAE]">100% hire rate</p>
                                </div>
                                <div className="text-sm my-2">
                                    <p>140k</p>
                                    <p className="text-[#AEAEAE]">Total spent</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default JobDetailModal;