/* eslint-disable react/prop-types */
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useAddReportMutation } from "../slices/jobApiSlice";
import { addProposal } from "../slices/jobSlice";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const AddReportModal = ({id, setModalType}) => {
    const [description, setDescription] = useState("")
    const [addReportApi, {isLoading}] = useAddReportMutation()
    const dispatch = useDispatch()

    const handleClose = () => {
        setModalType(0)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await addReportApi({message: description,jobID: id}).unwrap()
            dispatch(addProposal(res))
            toast.success('Successfully submitted report')
            setModalType(0)
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

    return ( 
        <>
            {isLoading && <Spinner/>}
            <div className="absolute overflow-auto bg-black bg-opacity-50 top-0 left-0 h-full z-10 w-full">
                <div className="bg-white z-40 w-1/2 h-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-10 rounded-3xl">
                
                        <div className="flex justify-between relative">
                        <IoCloseOutline size={30} className="absolute -right-8 -top-8 cursor-pointer" onClick={handleClose}/>
                            <h1 className="text-3xl font-bold">Submit Report</h1>
                            <button onClick={handleSubmit} className="bg-[#123E59] rounded-full text-white px-5 py-[2px]">Publish Report</button>
                        </div>
                        <div >
                            
                            <div className="flex flex-col mt-5">
                                <label htmlFor="description">Write Report</label>
                                <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="proposal" placeholder="Your Report" className="flex pt-2 flex-wrap mt-1 px-3 pb-20 border-[1px] h-48 border-black rounded-2xl overflow-y-scroll no-scrollbar" />
                            </div>
                            
                        </div>
                </div>
            </div>
        </>
    );
}

export default AddReportModal