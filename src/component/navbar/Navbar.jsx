import React, { useState } from 'react'
import './navbar.scss'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Elipse from '../../assets/Elipse.svg'



const Navbar = ({ switchTheme, theme }) => {
  return (

    <div className='navbar'>
        <div className="nav-container">
            <div className="title">
            <span className='p-d' >Pages / Dashboard</span>
            <div className='m-d'  style={{fontWeight:'bold',fontSize:'34px'}}>Main Dashboard</div>
            </div>
            <div className="nav-items">
               

                <div className="item1">
                <SearchRoundedIcon className='s-icon'/>
                <input type="text" name="search"n placeholder='Search' />
                
                </div>

                <div className="item2">
                <NotificationsNoneRoundedIcon/>
                </div>

                <div className="item3" onClick={switchTheme} >
                <BedtimeRoundedIcon   />
                </div>

                <div className="item4">
               <ErrorOutlineIcon/>

                </div>
                <div className="item5">
               <img src={Elipse}/>

                </div>
                




            </div>
        </div>
        
    </div>
    
  )
}

export default Navbar
/* 
import React from 'react';
import './navbar.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import BedtimeRoundedIcon from '@mui/icons-material/BedtimeRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Elipse from '../../assets/Elipse.svg';

const Navbar = ({ switchTheme, theme }) => {
  return (
    <div className='navbar'>
      <div className="nav-container">
        <div className="title">
          <span className='p-d'>Pages / Dashboard</span>
          <div className='m-d' style={{ fontWeight: 'bold', fontSize: '34px' }}>
            Main Dashboard
          </div>
        </div>
        <div className="nav-items">
          <div className="item1">
            <SearchRoundedIcon className='s-icon' />
            <input type="text" name="search" placeholder='Search' />
          </div>
          <div className="item2">
            <NotificationsNoneRoundedIcon />
          </div>
          <div className="item3" onClick={switchTheme} style={{ cursor: 'pointer' }}>
            <BedtimeRoundedIcon />
          </div>
          <div className="item4">
            <ErrorOutlineIcon />
          </div>
          <div className="item5">
            <img src={Elipse} alt="User Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
 */