import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Spinner'
import { useSelector } from 'react-redux'

const Landing = lazy(() => import("./Landing"))
const Register = lazy(() => import("./views/Register"))
const Login = lazy(() => import("./views/Login"))
const Dashboard = lazy(() => import("./views/Dashboard"))
const Profile = lazy(() => import("./views/Profile"))
const JobDetail = lazy(() => import("./components/JobDetailModal"))

function App() {

  const { userInfo } = useSelector((state) => state.auth)

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing info={userInfo} />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard info={userInfo} />} />
            <Route path="/profile" element={<Profile info={userInfo} />} />
            <Route path="/jobdetail" element={<JobDetail />} />
            <Route path="/loader" element={<Spinner />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
