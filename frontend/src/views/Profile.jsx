/* eslint-disable react/prop-types */

import EmployeeProfile from "./employee/Profile"
import ClientProfile from "./user/Profile"

const Dashboard = ({info}) => {
    return (
        <>
            {info.role === 'employee' ? (<EmployeeProfile info={info} />) : (<ClientProfile info={info} />)}
        </>
    )
}

export default Dashboard