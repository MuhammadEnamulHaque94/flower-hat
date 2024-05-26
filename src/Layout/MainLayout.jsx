/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
