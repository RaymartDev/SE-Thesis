/* eslint-disable react/prop-types */

import { useEffect } from "react"
import EmployeeDash from "./employee/Dashboard"
import ClientDash from "./user/Dashboard"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../slices/authSlice"

const Dashboard = () => {

    const { userInfo } = useSelector((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo) {
            dispatch(logout())
            navigate('/login')
        }

    }, [dispatch, navigate, userInfo])

    if(userInfo) {
        return (
            <>
                {userInfo.role === 'employee'  ? (<EmployeeDash info={userInfo} />) : (<ClientDash info={userInfo} />)}
            </>
        )
    }

    return null
}

export default Dashboard