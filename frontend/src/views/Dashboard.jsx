/* eslint-disable react/prop-types */

import { useEffect } from "react"
import EmployeeDash from "./employee/Dashboard"
import ClientDash from "./user/Dashboard"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Dashboard = () => {

    const { userInfo } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    useEffect(() => {
        if(!userInfo) {
            navigate('/')
        }
    }, [navigate,userInfo])

    if(userInfo) {
        return (
            <>
                {userInfo.role === 'employee'  ? (<EmployeeDash info={userInfo} />) : (<ClientDash info={userInfo} />)}
            </>
        )
    }
}

export default Dashboard