import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Outlet />
        </div>
    )
}

export default HomePage
