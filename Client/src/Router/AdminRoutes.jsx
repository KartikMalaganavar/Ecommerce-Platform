import React from 'react'
import Admin from '../Admin/Admin'
import { Routes, Route } from 'react-router-dom'

const AdminRoutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/*" element={<Admin/>}></Route>

       </Routes>
    </div>
  )
}

export default AdminRoutes
    