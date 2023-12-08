/* eslint-disable react/prop-types */
import Oval from './Oval'
import { useState } from 'react'
import JobDetailModal from './JobDetailModal'
import JobEditModal from './JobEditModal'

const JobList = (props) => {

    const[modalType, setModalType] = useState(0)


    const handleClick = () => {
        setModalType(1)
    }

    return ( 
        <>
            {modalType === 1 && <JobDetailModal id={props.id} setModalType={setModalType}  />}
            {modalType === 2 && <JobEditModal id={props.id} setModalType={setModalType} />}
            <div onClick={handleClick} className="px-6 py-8">
                <div>
                    <h1 className="cursor-pointer text-2xl overflow-hidden max-h-8 text-[#123E59]" onClick={handleClick}>{props.title}</h1>
                    {props.salary >= 0 && <p className="font-bold mt-3">Estimated. Budget ₱{props.salary}</p>}
                    {props.rate > 0 && <p className="font-bold mt-3">Hourly Rate ₱{props.rate}</p>}
                    <div className="overflow-hidden max-h-28">
                        <p className="mt-3">{props.description}</p>
                    </div>
                    
                </div>
                <div className="mt-3">
                    <Oval key={1} name={props.expertise}/>
                </div>
            </div>
        </>
    );
}

export default JobList;