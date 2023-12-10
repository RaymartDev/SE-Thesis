/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { useApproveProposalMutation, useDeleteProposalMutation } from "../../slices/jobApiSlice";
import { toast } from "react-toastify";
import { removeProposal } from "../../slices/jobSlice";
import { useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import { removeJob } from "../../slices/jobSlice";
import { useNavigate } from "react-router-dom";

const Applicant = ({setModalType, proposal}) => {

    const [deleteProposalApi, {error, isLoading}] = useDeleteProposalMutation()
    const [approveProposalApi, {isLoading : isPending}] = useApproveProposalMutation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const visitOwner = (id) => {
        navigate(`/profile/${id}`)
    }

    const handleApproval = async (e) => {
        e.preventDefault()
        try {
            await approveProposalApi({proposalID: proposal._id, ownerID: proposal.owner})
            if(!error) {
                dispatch(removeJob(proposal.job))
                toast.success('Successfully approved proposal and chosen freelancer')
            }
        }catch (err) {
            toast.error((err.data.message || err.error), {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
        }finally {
            setModalType(0)
        }
    }

    const handleReject = async (e) => {
        e.preventDefault()
        try {
            deleteProposalApi({id: proposal._id}).then((prop) => {
                dispatch(removeProposal(prop))
                toast.success('Successfully removed proposal')
            })
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
        }finally {
            setModalType(1)
        }
    }

    return(
        <>
        {(isLoading || isPending) && <Spinner />}
        <div className="w-full">
            <p className="mt-3 px-5 underline font-bold text-base cursor-pointer" onClick={() => {
                visitOwner(proposal.owner._id)
            }}>{proposal.owner.name}</p>
            <div className="mt-3 px-5 flex">
                <div className="w-11/12">
                    <p className="text-sm min-h-fit overflow-x-hidden">{proposal.body}</p>
                </div>
                <div className="w-1/12 flex justify-center items-center">
                    <button onClick={handleApproval} className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded mr-1"><FaCheck size={12}/></button>
                    <button onClick={handleReject} className="w-1/2 hover:scale-150 h-7 flex flex-col justify-center items-center rounded"><FaX size={12}/></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Applicant