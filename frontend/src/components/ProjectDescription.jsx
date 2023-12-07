/* eslint-disable react/prop-types */
import { FaGlobeAfrica } from "react-icons/fa";
const ProjectDescription = (props) => {
    return (
        <div className="mt-3 flex justify-between">
                <p className="flex font-bold w-1/5"><FaGlobeAfrica size={20} className="mr-1"/>{props.title}</p>
                <p className="w-9/12">{props.description}</p>
        </div>
    )
}

export default ProjectDescription