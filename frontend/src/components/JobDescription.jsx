/* eslint-disable react/prop-types */
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const JobDescription = (props, viewMode=false) => {
    return (
        <div className="px-5 py-5">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">{props.title}</h1>
                {!viewMode && <BiSolidMessageSquareEdit size={25} className="hover:scale-110 cursor-pointer"/>}
            </div>
                            
            <p className="text-sm mt-3">{props.year}</p>
            <p className="text-sm mt-3">{props.description}</p>
        </div>
    )
}

export default JobDescription