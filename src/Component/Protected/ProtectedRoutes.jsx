import React, { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({Component}) => {
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem("login")
        if(!login){
          navigate("/login")
        }
    })
  return (
   <>
    <Component />
   </>
  )
}

export default ProtectedRoutes