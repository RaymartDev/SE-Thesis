/* eslint-disable react/prop-types */
import Oval from './Oval'
import { useState, useEffect } from 'react'
import JobDetailModal from './JobDetailModal'
import JobEditModal from './JobEditModal'
import AddProposalModal from '../views/employee/AddProposalModal'
import ViewApplicant from './ViewApplicantModal'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../slices/authSlice'
import { FaFlag } from "react-icons/fa";
import AddReportModal from './AddReportModal'

const JobList = (props) => {

    const[modalType, setModalType] = useState(0)

    const { userInfo: info } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(!info) {
            dispatch(logout())
            navigate('/login')
        }
    }, [info, dispatch, navigate])


    const handleClick = () => {
        if(!info) {
            dispatch(logout())
            navigate('/login')
        }
        setModalType(1)
    }

    return ( 
        <>
            {(modalType === 1 && info) && <JobDetailModal id={props.id} setModalType={setModalType}  />}
            {(modalType === 2 && info) && <JobEditModal id={props.id} setModalType={setModalType} />}
            {(modalType === 3 && info) && <ViewApplicant id={props.id} setModalType={setModalType} />}
            {(modalType === 4 && info) && <AddProposalModal id={props.id} setModalType={setModalType}/>}
            {(modalType === 5 && info) && <AddReportModal id={props.id} setModalType={setModalType}/>}
            <div className="relative px-6 py-8">
                <div>
                    <h1 className="cursor-pointer text-2xl overflow-hidden max-h-8 text-[#123E59] max-w-sm" onClick={handleClick}>{props.title} <span className='text-red-700'>{props.pending ? " - [JOB TAKEN]" : ""}</span></h1>
                    {props.salary >= 0 && <p className="font-bold mt-3">Estimated. Budget ₱{props.salary}</p>}
                    {props.rate > 0 && <p className="font-bold mt-3">Hourly Rate ₱{props.rate}</p>}
                    <div className="overflow-hidden m-h-28">
                        <p className="mt-3">{props.description}</p>
                    </div>
                    
                </div>
                <div className="mt-3">
                    <Oval key={1} name={props.expertise}/>
                </div>

                <FaFlag onClick={() => setModalType(5)} className='absolute right-10 top-10 cursor-pointer text-red-700 font-bold' />
            </div>
        </>
    );
}

export default JobList;