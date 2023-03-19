import React, {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import image from "../assets/login-page.jpg"
import { protectedData } from '../redux/action';
import { useDispatch } from 'react-redux';
import { context } from '../App';

const Login = () => {
  const dispatch = useDispatch()
  const {setLogin} = useContext(context)
 

  const [value , setValue] = useState({
    email : "",
    password : ""
  })
  let navigate  = useNavigate()
  const login = () => {
    let account = JSON.parse(localStorage.getItem(value.email))
    if(value.email !== "" || value.password !== ""){
      if(account !== null){
        if(account.password === value.password){
          toast.success("Login sucess")
          localStorage.setItem('login', true)
          setLogin(true)
          navigate("/home")
          dispatch(protectedData(true))
        }else{
           toast.error("Invalid Password")
        }    
      }else{
        toast.error("Invalid Email")
      }
    }else{
      toast.error("Invalid Email and Password")
    }
  }
 
  
  const email = (e) => {
     setValue({
      ...value,
      email : e.target.value
     })

  }
  
  
  const password = (e) => {
    setValue({
      ...value,
      password : e.target.value
     })
}

const enter = (e) => {
  if(e.code === "Enter"){
    login()
  }
}

  return (
    <>
        <div className='main_container'>
        <div className='left_container'>
             <div className='login_container'>
                 <div className='header_text'>
                 <h1> Welcome back to Pretty Login </h1>
                 <p> It's great to have you back! </p>
                 </div>
                 <input type="email" onChange={email} onKeyUp={enter} placeholder='Email' />
                 <input type="password" onChange={password}  onKeyUp={enter} placeholder='Password' />
                 <div className='check_password'>
                  <div className='checkbox'> <div><input type="checkbox" /></div>  <p> Remember me? </p></div>
                  <div><p>Forgot Password?</p></div>
                 </div>
                 <div className='button_container'>
                 <Button variant="contained" onClick={login}>Login</Button>
                 <Link to="/signup"> <Button variant="contained">CREATE ACCOUNT</Button></Link>
                 </div>
                 <div className='login_extra'>
                  <p> Or login with</p>
                  <div className='login_text'>
                    <p>Facebook</p> <p>Google</p>
                  </div>
                 </div>
             </div>
             </div>
             <div className='right_container'>
             <div className='login_image'>
              <img src={image} alt='login-page' />
             </div>
             </div>
        </div>
    </>
  )
}

export default Login