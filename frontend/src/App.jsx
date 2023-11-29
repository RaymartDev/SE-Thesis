import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from './components/Spinner'

const Landing = lazy(() => import("./Landing"))
const Register = lazy(() => import("./views/Register"))
const Login = lazy(() => import("./views/Login"))

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
            <Route path="/loader" element={<Spinner />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
