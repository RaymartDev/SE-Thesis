/* eslint-disable react/prop-types */

import { useEffect } from "react"
import EmployeeProfile from "./employee/Profile"
import CLientProfile from "./user/Profile"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Profile = () => {

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
                {userInfo.role === 'employee'  ? (<EmployeeProfile info={userInfo} />) : (<CLientProfile info={userInfo} />)}
            </>
        )
    }
}

export default Profile