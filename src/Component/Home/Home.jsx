import React from 'react'
import { Button } from '@mui/material'
import "./Home.css"

const Home = () => {
  return (
    <>
    <div className='home'>
    <h1>Welcome to React</h1>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Button className='button' variant="outlined">Explore More!!!</Button>
    </div>
        
    </>
  )
}

export default Home