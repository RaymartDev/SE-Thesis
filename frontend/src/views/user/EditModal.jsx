import { IoCloseOutline } from "react-icons/io5";

const EditModal = (setModal) => {
    return ( 
        <>
            <div className="w-screen h-screen relative bg-black bg-opacity-50">
                <div className="w-1/2 h-3/5 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-10 rounded-3xl">
                <IoCloseOutline size={30} className="absolute right-1 top-1 cursor-pointer" onClick={() => setModal(false)}/>
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold">Edit Job Request</h1>
                        <button className="bg-[#123E59] rounded-full text-white px-5 py-[2px]">Save Request</button>
                    </div>
                    <div >
                        <div className="flex flex-col mt-2">
                            <label htmlFor="title">Request Title</label>
                            <input type="text" name="title" placeholder="Title" className="mt-1 px-3 border-[1px] border-black rounded-full"/>
                        </div>
                        
                        <div className="flex flex-col mt-3">
                            <label htmlFor="description">Brief Description</label>
                            <input type="text" name="title" placeholder="Description" className="mt-1 px-3 pb-14 pt-2 border-[1px] border-black rounded-2xl" />
                        </div>
                        
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex flex-col">
                            <label htmlFor="budget">Estimated Budget</label>
                            <input type="number" placeholder="0.00" className="mt-1 px-3 border-[1px] border-black rounded-full"/>
                        </div>
                        
                        <div className="flex flex-col">
                            <label htmlFor="price">Price Rate</label>
                            <input type="number" placeholder="0.00" className="mt-1 px-3 border-[1px] border-black rounded-full"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="expertise">Expertise</label>
                            <input type="text" placeholder="Select" className="mt-1 px-3 border-[1px] border-black rounded-full"/>
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
            </div>
        </>
    );
}

export default EditModal;