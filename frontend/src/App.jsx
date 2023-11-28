import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {lazy, Suspense} from "react"

const Landing = lazy(() => import("./Landing"))
const Register = lazy(() => import("./views/Register"))
const Login = lazy(() => import("./views/Login"))

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>...Loading</h1>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
