/* eslint-disable react/prop-types */
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const Education = (props) => {
    return (
        <>
        <div className="flex justify-between items-center mt-2">
            <div>
                <p className="font-bold text-sm">{props.school}</p>
                <p className=" text-sm">{props.course} ({props.year})</p>
            </div>
            <BiSolidMessageSquareEdit size={20} className="hover:scale-110 cursor-pointer"/>
        </div>
        </>
    )
}

export default Education