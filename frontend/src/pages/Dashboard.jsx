import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import DashboardHome from '../components/DashboardHome'
import MyDocuments from '../components/MyDocuments'

function Dashboard() {
  const [activeSection, setActiveSection] = useState("home");
  return (
<div className="flex">
      <Sidebar setActiveSection={setActiveSection} />
      <main className="flex-1 p-6">
        {activeSection === "home" && <DashboardHome />}
        {activeSection === "documents" && <MyDocuments />}
      </main>
    </div>
  )
}

export default Dashboard
