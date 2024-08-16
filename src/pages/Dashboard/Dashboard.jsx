import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import "./dashboard.scss"
import Navbar from '../../component/navbar/Navbar';
import Widgets from '../../component/widgets/Widgets';
import Linechart from '../../component/linechart/Linechart'
import Barchart from '../../component/barchart/Barchart'
import Ctable from '../../component/ctable/Ctable';
import Btable from '../../component/btable/Btable'
import Ptable from '../../component/ptable/Ptable'
import Comtable from '../../component/complextable/Comtable';
import Task from '../../component/tasks/Task'
import Cal from '../../component/cal/Cal'
import Business from '../../component/footer/Business/Business'
import Team from '../../component/footer/Team /Team '
import Control from '../../component/footer/Control /Control '
import Starbucks from '../../component/footer/Starbucks/Starbucks'
import '../../style/dark.scss'
import { useState } from 'react';





const Dashboard = () => {
  const [theme, setTheme] = useState('light'); // State for theme

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };



  return (
    
    <div className={`home ${theme}`}>
           <Outlet/>
     <Sidebar/>
     <div className="home-container">
      <Navbar switchTheme={switchTheme} theme={theme} /> 
      <div className="widget">
      <Widgets type='Earnings'/>
      <Widgets type='Spend'/>
      <Widgets type='Sales'/>
      <Widgets type='balance'/>
      <Widgets type='Tasks'/>
      <Widgets type='Projects'/>
      </div>
      <div className="chart">
        <Linechart/>
        <Barchart/>
      </div>
      <div className="table">
       <Ctable/>
       <Btable/>
       <Ptable/>

      </div>
      <div className="cards3">
        <Comtable/>
        <Task/>
        <Cal/>
      </div>

      <div className="footer">
        <Business/>
         <Team/>
        <Control />
        <Starbucks/>
      </div>
        </div>   
    </div>
   
  )
}

export default Dashboard