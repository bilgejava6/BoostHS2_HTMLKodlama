import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ToplamaVeUseStatePage from "./pages/ToplamaVeUseStatePage"

function Routerpage() {
  //  ToplamaVeUseStatePage  path=/toplama
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/toplama" element={<ToplamaVeUseStatePage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routerpage