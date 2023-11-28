import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './Landing'
import Login from './views/Login'
import Register from './views/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
