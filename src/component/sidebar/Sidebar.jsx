import React from 'react'
import "./sidebar.scss"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { Link } from 'react-router-dom';
 
const Sidebar = () => {
  return (
    <div className='siderbar'>
        <div className="top">
        
            <span className="logo"style={{fontWeight:"bold"}} >HORIZON 
               </span>
               <span id='free' style={{fontSize:'26px',fontFamily:'Poppins'}}>FREE</span>
               
               </div>

               
           
           <hr />


        <div className="center">
            <ul>
                <li  > <Link to="/" style={{color:'#A3AED0' }} ><HomeRoundedIcon className='icon' style={{border:'none'}}/>
                <span className='ntext'>Dashboard</span></Link> </li>
                <li><Link to="/" style={{color:'#A3AED0' }}><ShoppingCartOutlinedIcon className='icon' style={{border:'none'}}/>
                 <span className='ntext'>NFT Marketplace</span></Link></li>
                <li><Link to="/" style={{color:'#A3AED0' }}><BarChartRoundedIcon className='icon' style={{border:'none'}}/>
                <span className='ntext'>Tables</span></Link></li>
                <li><Link to="/" style={{color:'#A3AED0' }}><DashboardRoundedIcon className='icon' style={{border:'none'}}/>
                <span className='ntext'>Kanban</span></Link></li>
                <li><Link to="/" style={{color:'#A3AED0' }}><PersonRoundedIcon className='icon' style={{border:'none'}}/> 
                <span className='ntext'>Profile</span></Link></li>
                <li><Link to="/" style={{color:'#A3AED0' }}><LockRoundedIcon className='icon' style={{border:'none'}}/>
                <span className='ntext'>Sign In</span></Link></li>
            </ul>

        </div>
        <div className="bottom">

        </div>








    </div>
  )
}

export default Sidebar