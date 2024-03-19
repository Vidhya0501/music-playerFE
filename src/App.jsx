import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
import { Toaster } from "react-hot-toast"

function App() {
  

  return (
  <>
  <div className="App">
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
            <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
        </Routes>
    </BrowserRouter>
  </div>
  </>
  )
}

export default App
