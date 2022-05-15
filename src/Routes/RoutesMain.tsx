
import { BrowserRouter, Route, Routes, Navigate   } from "react-router-dom"
import React, { useState,useContext, useEffect } from "react";
import { AuthContext } from "../contexts/DataContext";
import App from "../App"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
import NotFound from "../pages/NotFound/NotFound"
import About from "../pages/About/About"
import Profile from "../pages/Profile/Profile";
import Cookies from 'js-cookie'


function RoutesMain() {
  let cookies = Cookies.get("access_token")
  const  {auth, setAuth}:any = useContext(AuthContext)

  useEffect(() =>{
    if(cookies=== undefined){
      setAuth(false)
    }else {
      setAuth(true)
    }
    console.log("cookies",cookies)
  },[cookies])

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />}/> // Pagina de carga
        <Route path="/login" element={<Login />}/>
        <Route path="/home"
        element={ auth ?< Home/> : < Login />}
        />
       <Route path="/about"
        element={ auth ?< About/> : < Login />}
        />
        <Route path="*"
        element={ auth ?< NotFound/> : < Login />}
        />
        <Route path="/profile" element={<Profile />} />
       {/*  <Route path="/about" element={<About />}/> */}
       {/* { <Route path="*" element={<NotFound/>}/>} */}

      </Routes>
    </BrowserRouter>
  );
}

export default RoutesMain;
