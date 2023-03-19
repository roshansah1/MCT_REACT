import React, { createContext, useEffect, useState } from 'react'
import Login from './Component/Login'
import Signup from './Component/Signup'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Component/Home/Home'
import { Toaster } from 'react-hot-toast'
import Navbar from './Component/Navbar/Navbar'
import Products from './Component/Products/Products'
import ProductDetails from './Component/Products/ProductDetails'
import Users from './Component/Users/Users'
import Contact from './Component/Contact/Contact'
import ProtectedRoutes from './Component/Protected/ProtectedRoutes'
import { useSelector } from 'react-redux'


export const context = createContext()
const App = () => {
  const [value, setValue] = useState({
    name : "",
    email : "",
    password : ""
   })
const navigate = useNavigate()

 const [data, setData] = useState([])


 const getData = (value = "electronics") => {
      fetch(`https://fakestoreapi.com/products/category/${value}`)
      .then(res => res.json())
      .then(api => setData(api))
 }

 useEffect(() => {
     getData()
 },[])

 let storage = localStorage.getItem("login")
 const [login , setLogin] = useState(storage)

 
  return (
    <>
     <Toaster />
     <context.Provider value={{value , setValue, getData, data , setLogin}}>
        { 
        (login) && <Navbar />
        }

      <Routes>
      <Route path='/' element={<ProtectedRoutes Component={Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<ProtectedRoutes Component={Home} />} />
        <Route path='/products' element={ <ProtectedRoutes Component={Products} />} />
        <Route path='/productdetails/:id' exact element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<ProtectedRoutes Component={Users} />} />
        <Route path='/*' element={<ProtectedRoutes Component={Login} />} />
      </Routes>
      </context.Provider>
    </>
  )
}

export default App