/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";
import { IoCloseOutline } from "react-icons/io5";
import { useUpdateJobMutation } from "../slices/jobApiSlice";
import { updateJob } from "../slices/jobSlice";

const JobEditModal = ({id, setModalType}) => {
    const dispatch = useDispatch()
    const [updateJobApi, {error, isLoading}] = useUpdateJobMutation()
    
    useEffect(() => {
        if(error) {
            toast.error(error.data?.message)
        }
    }, [error])

    const { jobsInfo } = useSelector((state) => state.jobs)
    const job = jobsInfo.find((job) => job._id === id)

    const [title, setTitle] = useState(job.title)
    const [description, setDescription] = useState(job.description)
    const [budget, setBudget] = useState(job.estimatedBudget)
    const [rate, setRate] = useState(job.rate)
    const [expertise, setExpertise] = useState(job.expertise)


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(!title) {
            toast.error('Please enter a title')
            return
        }
        if(!description) {
            toast.error('Please enter a description')
            return
        }
        if(!expertise) {
            toast.error('Please select expertise')
            return
        }

        try {
            const res = await updateJobApi({
                _id:job._id,
                title,
                description,
                expertise,
                estimatedBudget:budget,
                rate
            }).unwrap()
            console.log(res)
            dispatch(updateJob(res))
            setModalType(1)
            toast.success('Successfully updated job')
        }catch(err) {
            console.log(err)
            toast.error(err?.data?.message || err.error)
        }
    }


    if(job) {
        return ( 
            <div className="absolute overflow-auto bg-black bg-opacity-50 top-0 left-0 h-full z-10 w-full">
                {isLoading && <Spinner />}
                <div className="bg-white z-40 w-1/2 h-2/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-10 rounded-3xl">
                
                        <div className="flex justify-between relative">
                        <IoCloseOutline size={30} className="absolute -right-8 -top-8 cursor-pointer" onClick={() => setModalType(1)}/>
                            <h1 className="text-3xl font-bold">Edit Job Request</h1>
                                <button onClick={handleSubmit} className="bg-[#123E59] rounded-full text-white px-5 py-[2px]">Save Changes</button>
                        </div>
                        <div >
                            <div className="flex flex-col mt-2">
                                <label htmlFor="title">Request Title</label>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" className="mt-1 h-10 px-3 border-[1px] border-black rounded-full"/>
                            </div>
                            
                            <div className="flex flex-col mt-3">
                                <label htmlFor="description">Description</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="title" placeholder="Description" className="flex pt-2 flex-wrap mt-1 px-3 pb-20 border-[1px] h-48 border-black rounded-2xl overflow-y-scroll no-scrollbar" />
                            </div>
                            
                        </div>
                        <div className="flex justify-between mt-3">
                            <div className="flex flex-col">
                                <label htmlFor="budget">Estimated Budget</label>
                                <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="0.00" className="h-10 mt-1 px-3 border-[1px] border-black rounded-full"/>
                            </div>
                            
                            <div className="flex flex-col">
                                <label htmlFor="price">Price Rate</label>
                                <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="0.00" className="h-10 mt-1 px-3 border-[1px] border-black rounded-full"/>
                            </div>
    
                            <div className="flex flex-col">
                                <label htmlFor="expertise">Expertise</label>
                                <select value={expertise} onChange={(e) => setExpertise(e.target.value)} className="pmt-1 h-10 w-52 px-3 border-[1px] border-black rounded-full">
                                    <option value="">Choose Expertise</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Logo Branding">Logo Branding</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                </select>
                            </div>
                        </div>
                        
                        
                </div>
            </div>
        );
    }
}

export default JobEditModal;