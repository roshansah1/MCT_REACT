import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { context } from '../../App'


const Navbar = () => {
    const {setLogin} = useContext(context)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("login")
        // localStorage.setItem("login", false)
        setLogin(false)
        navigate("/login")
    }
    
 
  return (
    <>
        <header>
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/users">Users</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li onClick={logout}><NavLink to="/login">Logout</NavLink></li>
        </ul>
        </header>
    </>
  )
}

export default Navbar