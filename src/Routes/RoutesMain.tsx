import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"


function RoutesMain() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/> // Pagina de carga
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesMain