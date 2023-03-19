import React, { useEffect, useState } from 'react'
import "./users.css"
import { getUsers , getFilteredUsers } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../Loading/Loading'

const Users = () => {
    const dispatch = useDispatch()
    const [selected, setSelected] = useState("all")

    const getData = () => {
        fetch("https://randomuser.me/api/?results=20")
            .then(res => res.json())
            .then(api => dispatch(getUsers(api.results)))
    }

    useEffect(() => {
        getData()

    }, [])

    const data = useSelector((state) => {
        return state.userDetails.users
    })
 
    
    let filteredData = []
    const getValue = (e) => {
       setSelected(e.target.value)
       if(e.target.value === "male"){
        filteredData = data.filter((ele) => {
            return ele.gender === "male"
         })
       }
       else if(e.target.value === "female"){
        filteredData = data.filter((ele) => {
           return ele.gender === "female"
        })
       }else{
        filteredData = data
       }
      
      dispatch(getFilteredUsers(filteredData))
    }

  
    

    let userData = useSelector((state) => {
        return state.userDetails.user
    })
    
    console.log(userData)

    if(userData === undefined){
        userData = data
    }
    return (
        <div className='user_container'>
            <div className='header'>
                <h2>User Details</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis tincidunt id aliquet risus feugiat in. A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Tincidunt arcu non sodales neque sodales ut. Ultrices vitae auctor eu augue ut lectus arcu. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Lacus vel facilisis volutpat est velit egestas. Bibendum neque egestas congue quisque egestas diam in. Egestas integer eget aliquet nibh praesent tristique magna sit. Consequat ac felis donec et odio pellentesque diam. Ultricies mi quis hendrerit dolor. Mus mauris vitae ultricies leo integer malesuada nunc. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. </p>
            </div>
            <div className='checkboxes'>
                <div className='radio'><input type="radio" id="all" value="all" name="radio" onChange={getValue} checked={selected === "all"}/> <label htmlFor="all">ALL</label></div>
                <div className='radio'><input type="radio" id="male" value="male" name="radio" onChange={getValue} checked={selected === "male"}/> <label htmlFor="male">Male</label>  </div>
                <div className='radio'><input type="radio" id="female" value="female" name="radio" onChange={getValue} checked={selected === "female"} /> <label htmlFor="female">Female</label></div>
            </div>
            <div className='users_list'>
            
                <table>
                {userData === undefined ? (<></>) : (<tr className='table_header'>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>)}
                    
                    {userData === undefined ? (<div className='loading'><Loading /></div>) :(
                        userData.map((ele, indx) => {
                            const {picture, name, email, gender} = ele
                            console.log(gender)
                            return <tr key={indx}>
                                <td><img src={picture.thumbnail} /></td>
                                <td>{name.first}</td>
                                <td>{email}</td>
                                <td>{gender}</td>
                            </tr>
                        })
                    )}
                </table>
            </div>
        </div>
    )
}

export default Users