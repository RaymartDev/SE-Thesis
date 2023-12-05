import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Spinner'

const Landing = lazy(() => import("./Landing"))
const Register = lazy(() => import("./views/Register"))
const Login = lazy(() => import("./views/Login"))
const EmployeeDashboard = lazy(() => import("./views/employee/Dashboard"))
const ClientDashboard = lazy(() => import("./views/user/Dashboard"))
const AddModal = lazy(() => import("./views/user/AddModal"))

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/employeedashboard" element={<EmployeeDashboard />} />
            <Route path="/clientdashboard" element={<ClientDashboard />} />
            <Route path="/addmodal" element={<AddModal />} />
            <Route path="/loader" element={<Spinner />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
