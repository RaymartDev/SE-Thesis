/* eslint-disable react/prop-types */
import Applicant from "./Applicant";

const Proposal = ({setModalType, proposals}) => {

    return (
        <>
            {proposals && proposals.map((proposal) => (
                <Applicant 
                    key={proposal._id} 
                    proposal={proposal}
                    setModalType={setModalType} />
            ))}
        </>
    )
}

export default Proposal