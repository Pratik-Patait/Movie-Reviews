import React from 'react'
import NavBar from '../../componets/Navbar/NavBar'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>

    )
}

export default Home
