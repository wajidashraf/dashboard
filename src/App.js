import React from 'react'
import Header from './header/header'
import './bootstrap.min.css'
import './header/header.css'
import './App.css'
import Card from './summary/Card'
import AnalysisStat from './AnalysisStat'
import CustSummry from './CustSummry'
import RepeatedVisitor from './RepeatedVisitor'
import Sidebar from './sideBar/Sidebar'
import List from './sideBar/List'

function App() {
  return (
    <>
      <Header />
      <main className='wrapper'>
        <div className='row mb-5'>
          {/* SideBar */}
          <div className='col-lg-3 leftSidebar'>
            <div className='bgff'></div>
            <Sidebar />
            <List />
          </div>

          {/* Mian Dashboard */}
          <div className='col-lg-9 pl-2'>
            <Card />
            <AnalysisStat />
            <CustSummry />
            <RepeatedVisitor />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
