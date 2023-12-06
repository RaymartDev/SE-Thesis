import miks from '../img/pm2.jpg'
import { IoEarth } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate()

    const clickProfile = () => {
        navigate("/employeeprofile")
    }

    return ( 
        <>
            <div className='flex flex-col items-center justify-center w-full h-72'>
                <img src={miks} onClick={clickProfile} className='w-28 h-28 rounded-full place-items-center object-center object-cover' />
                <h2 className='font-bold text-xl mt-2'>Micholo Joaquin</h2>
                <div className='h-[2px] bg-black w-2/3 mt-1'></div>
                <p className='flex items-center self-start mt-4 ml-8'><IoEarth className='mr-2' /> Weblink</p>
                <p className='flex items-center self-start mt-2 ml-8'><CgWebsite className='mr-2' /> Portfolio</p>
            </div>
        </>
    );
}

export default Profile;