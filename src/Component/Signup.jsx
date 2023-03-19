import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { context } from '../App';
import { toast } from 'react-hot-toast';

const Signup = () => {
 let data =  useContext(context)
 
 const getName = (e) => {
  data.setValue({
    ...data.value,
    name : e.target.value,
  })
 }

 const getEmail = (e) => {
  data.setValue({
    ...data.value,
    email : e.target.value,
  })
 }

 const getPassword = (e) => {
  data.setValue({
    ...data.value,
    password : e.target.value
  })
 }

 const validName = (name) => {
    if(name.match(/^[a-zA-Z ]{3,}$/)){
      return true
    }else{
      toast.error("Name must be minimum 3 character")
    }
 }

 const validPassword = (password) => {
  if(password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)){
    return true
  }else{
    toast.error("Password must be minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character (such as: @Password123)")
  }
 }

 const validEmail = (email) => {
   if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){  // eslint-disable-line
       return true
   }else{
      toast.error("Please enter a valid email address")
   }
 }
 
 const getData = () => {
  if(data.value.name !== "" && data.value.email !== "" && data.value.password !== ""){
    if(validName(data.value.name) &&  validEmail(data.value.email) && validPassword(data.value.password)){
      localStorage.setItem(data.value.email, JSON.stringify(data.value))
    data.setValue({
      name : "",
      email : "",
      password : ""
    })
    toast.success("Thank you for creating account")
    }
  }else{
     toast.error("All input fields are required")
  }
 }

 const enter = (e) => {
   if(e.code === "Enter")
   getData()
 }

  return (
    <>
        <div className='main_container_signup'>
             <div className='signup_container'>
                 <h1> Signup Page </h1>
                 <input type="text" onChange={getName} onKeyUp={enter} value={data.value.name} placeholder='Enter Your Full Name' />
                 <input type="email" onChange={getEmail} onKeyUp={enter} value={data.value.email} placeholder='Enter Your Email' />
                 <input type="password" onChange={getPassword} onKeyUp={enter} value={data.value.password} placeholder='Enter Your Password' />
                 <div className='button_container_signup'>
                 <Button variant="contained" onClick={getData}>Sign Up</Button>
                 <Link to="/login"><Button variant="contained">Login</Button></Link>
                 </div>
                 
             </div>
        </div>
    </>
  )
}

export default Signup