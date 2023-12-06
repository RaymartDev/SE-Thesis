import DashNav from "../../components/DashNav";
import Footer from "../../components/Footer";
import { IoSearch } from "react-icons/io5";
import JobList from "../../components/JobList";
import Profile from "../../components/Profile";
import { TbStatusChange } from "react-icons/tb";


const Dashboard = () => {
    return ( 
        <>
        <DashNav />
            <div className="container flex mx-auto justify-between mt-14">
                <div className="w-3/4">
                    <div className=" border-black rounded-full border-[1px] relative">
                        <input type="text" placeholder="Search" className="w-full px-10 py-2 rounded-full text-black" />
                        <IoSearch size={20} className="absolute translate-x-4 top-1/2 -translate-y-1/2"/>
                    </div>
                    
                    
                    <div className="rounded-2xl border-[1px] border-black mt-6">
                        <div className="flex justify-between px-6 items-center my-4">
                            <h1 className="text-3xl font-bold">Jobs you might like</h1>
                            <TbStatusChange size={30}/>
                            
                        </div>
                        <hr className="bg-black h-[2px]"/>
                        <div className="flex px-6 my-4"  >
                            <button className="text-[#123E59] font-bold border-black border-[1px] rounded-full px-3 py-1 hover:text-[#FFFFFF] hover:bg-[#123E59] default:bg-[#123E59] active:bg-[#123E59] mr-4">Active Jobs</button>
                            <button className="text-[#123E59] font-bold border-black border-[1px] rounded-full px-3 py-1 hover:text-[#FFFFFF] hover:bg-[#123E59] active:bg-[#123E59] mr-4">My Jobs</button>
                            <button className="text-[#123E59] font-bold border-black border-[1px] rounded-full px-3 py-1 hover:text-[#FFFFFF] hover:bg-[#123E59] active:bg-[#123E59] mr-4">Saved Jobs</button>
                            <button className="text-[#123E59] font-bold border-black border-[1px] rounded-full px-3 py-1 hover:text-[#FFFFFF] hover:bg-[#123E59] active:bg-[#123E59] mr-4">Completed Jobs</button>
                            <button className="text-[#123E59] font-bold border-black border-[1px] rounded-full px-3 py-1 hover:text-[#FFFFFF] hover:bg-[#123E59] active:bg-[#123E59] mr-4">Job History</button>
                        </div>
                        <hr className="bg-black h-[2px]"/>
                        <JobList 
                            title="Video Editing"
                            salary="120"
                            description="Lorem ipsum dolor sit amet. Sed natus consequatur est 
                            nesciunt facilis non accusantium natus eos quia exercitationem. Et 
                            totam voluptates et exercitationem velit id sunt dolores id sint incidunt 
                            et quas dolor. Non repudiandae repellendus quo voluptas ipsa in voluptatem 
                            laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                            In cupiditate totam est dolores corporis ut quia explicabo cum tenetur 
                            debitis qui saepe voluptatem. Rem blanditiis voluptatem est dolores nobis et 
                            harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut 
                            numquam quis! Rem optio ipsum eum enim commodi et velit similique.t"
                        />
                        <JobList 
                            title="Graphic Design"
                            salary="140"
                            description="Lorem ipsum dolor sit amet. Sed natus consequatur est 
                            nesciunt facilis non accusantium natus eos quia exercitationem. Et 
                            totam voluptates et exercitationem velit id sunt dolores id sint incidunt 
                            et quas dolor. Non repudiandae repellendus quo voluptas ipsa in voluptatem 
                            laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                            In cupiditate totam est dolores corporis ut quia explicabo cum tenetur 
                            debitis qui saepe voluptatem. Rem blanditiis voluptatem est dolores nobis et 
                            harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut 
                            numquam quis! Rem optio ipsum eum enim commodi et velit similique.t"
                        />
                        <JobList 
                            title="Graphic Design"
                            salary="140"
                            description="Lorem ipsum dolor sit amet. Sed natus consequatur est 
                            nesciunt facilis non accusantium natus eos quia exercitationem. Et 
                            totam voluptates et exercitationem velit id sunt dolores id sint incidunt 
                            et quas dolor. Non repudiandae repellendus quo voluptas ipsa in voluptatem 
                            laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                            In cupiditate totam est dolores corporis ut quia explicabo cum tenetur 
                            debitis qui saepe voluptatem. Rem blanditiis voluptatem est dolores nobis et 
                            harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut 
                            numquam quis! Rem optio ipsum eum enim commodi et velit similique.t"
                        />
                        <JobList 
                            title="Graphic Design"
                            salary="140"
                            description="Lorem ipsum dolor sit amet. Sed natus consequatur est 
                            nesciunt facilis non accusantium natus eos quia exercitationem. Et 
                            totam voluptates et exercitationem velit id sunt dolores id sint incidunt 
                            et quas dolor. Non repudiandae repellendus quo voluptas ipsa in voluptatem 
                            laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                            In cupiditate totam est dolores corporis ut quia explicabo cum tenetur 
                            debitis qui saepe voluptatem. Rem blanditiis voluptatem est dolores nobis et 
                            harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut 
                            numquam quis! Rem optio ipsum eum enim commodi et velit similique.t"
                        />
                        <JobList 
                            title="Graphic Design"
                            salary="140"
                            description="Lorem ipsum dolor sit amet. Sed natus consequatur est 
                            nesciunt facilis non accusantium natus eos quia exercitationem. Et 
                            totam voluptates et exercitationem velit id sunt dolores id sint incidunt 
                            et quas dolor. Non repudiandae repellendus quo voluptas ipsa in voluptatem 
                            laboriosam aut nihil reiciendis aut amet delectus non neque vero. 
                            In cupiditate totam est dolores corporis ut quia explicabo cum tenetur 
                            debitis qui saepe voluptatem. Rem blanditiis voluptatem est dolores nobis et 
                            harum delectus est dolore dolorem nam repellendus facere ad galisum vitae ut 
                            numquam quis! Rem optio ipsum eum enim commodi et velit similique.t"
                        />
                        <hr className="bg-black h-[2px]"/>
                        <div className="text-center py-4">
                            <button className="text-center text-sm py-1 px-5 text-blue-300 border-[1px] rounded-full">
                                See More
                            </button>
                        </div>
                        
                        
                    </div> 
                    
                </div>

                <div className="w-1/5 flex flex-col items-center border-[1px] h-72 border-black rounded-xl">
                    <Profile />
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;