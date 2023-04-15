import React from 'react'
import './Dashboard.scss'

import SideNav from './SideNav/SideNav'
import TopNav from './TopNav/TopNav'
import HoriScroller from './HoriScroller/HoriScroller'

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <SideNav/>
      <TopNav />
      <HoriScroller/>
    </div>
  )
}
