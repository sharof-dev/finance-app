import React from 'react'
import Sidebar from '../pages/sidebar/Sidebar'
import Dashboard from '../pages/dashboard/Dashboard'

const MainLayout = () => {
  return (
    <div className="app-container">
      <div className="row g-0">
        <div className="col-md-3">
          {/* <Sidebar /> */}
        </div>
        <div className="col-md-12">
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
