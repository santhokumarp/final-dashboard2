import React from 'react'
import './Starbucks.scss'
import bg from '../../../assets/Background.svg'
import Star from '../../../assets/Star.svg'
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';

const Starbucks = () => {
  return (
    <div className='starbucks'>
      <img src={bg}  className='bg-img'/>
      <div className="stop-img">
      <img src={Star} style={{width:'45px',height:'45px',position:'absolute', marginTop:'-83px',marginLeft:'10px'}}/>
      </div>
      <div className="star-text">
        <span>Starbucks</span>
      </div>
      <div className="star-icon">
      <FastfoodOutlinedIcon/>
      <span>10% cashback & off</span>
      </div>
      


    </div>
  )
}

export default Starbucks