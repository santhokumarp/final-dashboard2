import React from 'react'
import './business.scss'
import icon from '../../../assets/icon1.svg'
import ass from '../../../assets/Assigned.svg'
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';

const Business = () => {
  return (
    <div className='business'>

      <div className='bus-top'>
        <img src={icon}  style={{width:'40px',height:'40px'}}/>
        <div className="bn">
        <div  style={{fontSize:'12px',fontWeight:'bold',color:'#A3AED0'}}>Business Design</div>
        <span className='nla'  style={{fontSize:'14px',fontWeight:'bold'}}>New lession is available</span>
        </div>
      </div>
      <div className="bm-text">
          <span>What do you need to know to </span>
         <p> create better products?</p>
        </div>

        <div className="f-content-box">
          
          <div className='box-items'>
            <div className="timer">
          <TimerOutlinedIcon style={{color:'#01B574',fontSize:'18px'}}/>
            <span>85 mins</span>
            </div>
            <div className="slow">
            <SlowMotionVideoOutlinedIcon style={{color:'#EE5D50',fontSize:'18px'}}/>
            <span>Video format</span>
            </div>
          </div>

          <div className="bi-bottom">
            <img src={ass} style={{width:'80px',height:'34px'}}/>
            <button>Get Started</button>
          </div>


        </div>
    </div>
  )
}

export default Business