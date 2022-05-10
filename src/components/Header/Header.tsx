import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Menu from '../Menu/Menu'
import  styles from './Header.module.css'

function Header() {
    const [stylish, setStylish]= useState(false)   
  return (
    <header>
        <div className={styles.logo}>
            <h1>Radio Pato</h1>
        </div>
        <div className={stylish ? `${styles.nav} ${styles.navActive}`: `${styles.nav} ${styles.navInactive}`}>
            <NavLink
            className={styles.navLinks}
            to={'/home'}>Home</NavLink>
            <NavLink
            className={styles.navLinks}
            to={'/login'}>Profile</NavLink>
            <NavLink
            className={styles.navLinks}
            to={'/about'}>About us</NavLink>
        </div>
        <div className={styles.burgerBtn}
        onClick={()=>{setStylish(!stylish)}}>
         <Menu />   
        </div>
    </header>
  )
}

export default Header