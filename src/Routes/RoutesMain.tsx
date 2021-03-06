import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/DataContext";
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import Cookies from "js-cookie";

function RoutesMain() {
  let cookies = Cookies.get("access_token");
  const { auth, setAuth }: any = useContext(AuthContext);

  useEffect(() => {
    if (cookies === undefined) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [cookies]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> // Pagina de carga
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={auth ? <Home /> : <Login />} />
        <Route path="/about" element={auth ? <About /> : <Login />} />
        <Route path="*" element={auth ? <NotFound /> : <Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesMain;
