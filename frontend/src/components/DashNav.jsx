import SELogo from "../img/SElogo.png"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { clearJob } from '../slices/jobSlice';
import { toast } from 'react-toastify'

const DashNav = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [logoutApiCall] = useLogoutMutation();

    const clickHome = () => {
        navigate("/")
    }

    const logoutHandler = async () => {
        try {
          await logoutApiCall().unwrap();
          dispatch(logout());
          dispatch(clearJob())
          navigate('/login');
        } catch (err) {
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
        }
    };

    return ( 
        <>
            <div className="bg-[#123E59]">
                <nav className="h-20 container m-auto flex items-center justify-between">
                    <div className="flex items-center cursor-pointer" onClick={clickHome}>
                        <img src={SELogo}/><p className="text-3xl font-extrabold text-white uppercase">SE <span className="text-3xl font-extrabold text-[#F6B51D] uppercase">Tech</span></p>
                    </div>

                    <div className="text-white flex gap-x-8">
                        <button onClick={logoutHandler} className="hover:scale-110 transition duration-400 border-2 font-semibold border-[#F6B51D] w-20 h-7 rounded-md bg-[#F6B51D] text-[#123E59]">
                            Logout
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default DashNav;