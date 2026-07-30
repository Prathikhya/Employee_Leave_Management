import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'



const DashboardLayout = () => {
 

  return (
    <div>
      {/* Main Content — offset by sidebar width */}
      <div>
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
