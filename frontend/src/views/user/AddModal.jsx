/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCreateJobMutation } from "../../slices/jobApiSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addMyJob } from "../../slices/jobSlice";
import Spinner from "../../components/Spinner";

const AddModal = ({info}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [budget, setBudget] = useState(0)
    const [rate, setRate] = useState(0)
    const [expertise, setExpertise] = useState("")
    const [createJob, { isLoading, error }] = useCreateJobMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if(error) {
            if(error.data) {
                toast.error(error.data.message)
            }
        }
    }, [error])

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
            const res = await createJob({
                title,
                description,
                estimatedBudget: budget,
                rate,
                expertise,
                owner: info._id
            }).unwrap()

            dispatch(addMyJob(res));
        }catch(err) {
            toast.error(err?.data?.message || err.error)
        }

    }


    return ( 
        <>
            {isLoading && <Spinner />}
            <div className="bg-white z-40 w-1/2 h-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-10 rounded-3xl">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold">Add Job Request</h1>
                        <button onClick={handleSubmit} className="bg-[#123E59] rounded-full text-white px-5 py-[2px]">Publish Request</button>
                    </div>
                    <div >
                        <div className="flex flex-col mt-2">
                            <label htmlFor="title">Request Title</label>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" className="mt-1 px-3 border-[1px] border-black rounded-full"/>
                        </div>
                        
                        <div className="flex flex-col mt-3">
                            <label htmlFor="description">Brief Description</label>
                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="title" placeholder="Description" className="flex flex-wrap mt-1 px-3 pb-20 border-[1px] h-32 border-black rounded-2xl overflow-y-scroll" />
                        </div>
                        
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex flex-col">
                            <label htmlFor="budget">Estimated Budget</label>
                            <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="0.00" className="mt-1 px-3 border-[1px] border-black rounded-full"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <label htmlFor="price">Price Rate</label>
                            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="0.00" className="mt-1 px-3 border-[1px] border-black rounded-full"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="expertise">Expertise</label>
                            <select value={expertise} onChange={(e) => setExpertise(e.target.value)} className="mt-1 h-6 w-52 px-3 border-[1px] border-black rounded-full">
                                <option value="">Choose Expertise</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="Logo Branding">Logo Branding</option>
                                <option value="Graphic Design">Graphic Design</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-3">
                        <h1>Skills Needed</h1>
                        <div className="mt-3">
                            <button className="border-[1px] border-[#123E59] text-[#123E59] px-3 rounded-full mr-2">Javascript</button>
                            <button className="border-[1px] border-[#123E59] text-[#123E59] px-3 rounded-full mr-2">Web Dev</button>
                            <button className="border-[1px] border-[#123E59] text-[#123E59] px-3 rounded-full mr-2">Full Stack</button>
                            <button className="border-[1px] border-[#123E59] text-[#123E59] px-3 rounded-full mr-2">Javascript</button>
                            <button className="border-[1px] border-[#123E59] text-[#123E59] px-3 rounded-full mr-2">+</button>
                        </div>
                    </div>

                    <div className="mt-3">
                        <h1>Skills Needed</h1>
                        <div className="mt-3">
                            <button className="border-[1px] border-[#123E59] text-[#123E59] px-3 rounded-full mr-2">Upload</button>
                            <button className="border-[1px] border-[#123E59] text-[#123E59] px-3 rounded-full mr-2">+</button>
                        </div>
                    </div>
                    
                    
                </div>
        </>
    );
}

export default AddModal;