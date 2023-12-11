import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Spinner'
import { useSelector } from 'react-redux'
import OtherProfile from './views/OtherProfile'

const Landing = lazy(() => import("./Landing"))
const Register = lazy(() => import("./views/Register"))
const Login = lazy(() => import("./views/Login"))
const Dashboard = lazy(() => import("./views/Dashboard"))
const Profile = lazy(() => import("./views/Profile"))

function App() {

  const { userInfo } = useSelector((state) => state.auth)

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={userInfo ? (<Dashboard info={userInfo} />) : (<Landing />)} />
            <Route path="/profile" element={userInfo ? (<Profile info={userInfo} />) : (<Landing />)} />
            <Route path="/loader" element={<Spinner />} />
            <Route path="/profile/:id" element={userInfo ? (<OtherProfile />) : (<Landing />)} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
