/* eslint-disable react/prop-types */
import Oval from './Oval'
import { useState } from 'react'
import JobDetailModal from './JobDetailModal'
import JobEditModal from './JobEditModal'
import AddProposalModal from '../views/employee/AddProposalModal'
import ViewApplicant from './ViewApplicantModal'

const JobList = (props) => {

    const[modalType, setModalType] = useState(0)


    const handleClick = () => {
        setModalType(1)
    }

    return ( 
        <>
            {modalType === 1 && <JobDetailModal id={props.id} setModalType={setModalType}  />}
            {modalType === 2 && <JobEditModal id={props.id} setModalType={setModalType} />}
            {modalType === 3 && <ViewApplicant id={props.id} setModalType={setModalType} />}
            {modalType === 4 && <AddProposalModal id={props.id} setModalType={setModalType}/>}
            <div onClick={handleClick} className="px-6 py-8">
                <div>
                    <h1 className="cursor-pointer text-2xl overflow-hidden max-h-8 text-[#123E59]" onClick={handleClick}>{props.title} <span className='text-red-700'>{props.pending ? " - [JOB TAKEN]" : ""}</span></h1>
                    {props.salary >= 0 && <p className="font-bold mt-3">Estimated. Budget ₱{props.salary}</p>}
                    {props.rate > 0 && <p className="font-bold mt-3">Hourly Rate ₱{props.rate}</p>}
                    <div className="overflow-hidden m-h-28">
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