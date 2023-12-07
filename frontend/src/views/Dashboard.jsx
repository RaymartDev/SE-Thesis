/* eslint-disable react/prop-types */

import EmployeeDash from "./employee/Dashboard"
import ClientDash from "./user/Dashboard"

const Dashboard = ({info}) => {
    return (
        <>
            {info.role === 'employee' ? (<EmployeeDash info={info} />) : (<ClientDash info={info} />)}
        </>
    )
}

export default Dashboard