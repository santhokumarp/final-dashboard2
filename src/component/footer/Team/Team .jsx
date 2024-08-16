import React from 'react'
import './Team.scss'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import teamimg from '../../../assets/Tellipse1.svg'

const Team  = () => {
  

  return (
  <div className="team">


    <div className="team-top">
      <span className='team-text'>Team members</span>
      <AddCircleOutlinedIcon className='add-icon' style={{}}/>
    </div>

    <div className="team-bg">
    <div className="tbox1">
      <div className="tbox1-bg">
        <div className="content1">
          <img src={teamimg} style={{width:'40px',height:'40px'}}/> 
          <div className="ctext-bg">
        <span>Adela Parkson</span>
        <p>Creative Director</p>
        </div>
        </div>
        

        <MoreVertOutlinedIcon style={{color:'#A3AED0'}}/>
       

      </div>
    </div>
   

    <div className="tbox2">
      <div className="tbox2-bg">
        <div className="content2">
          <img src={teamimg} style={{width:'40px',height:'40px'}}/> 
          <div className="ctext-bg">
        <span>Adela Parkson</span>
        <p>Creative Director</p>
        </div>
        </div>
        

        <MoreVertOutlinedIcon style={{color:'#A3AED0'}}/>
       

      </div>
    </div>


    <div className="tbox3">
      <div className="tbox3-bg">
        <div className="content3">
          <img src={teamimg} style={{width:'40px',height:'40px'}}/> 
          <div className="ctext-bg">
        <span>Adela Parkson</span>
        <p>Creative Director</p>
        </div>
        </div>
        

        <MoreVertOutlinedIcon style={{color:'#A3AED0'}}/>
       

      </div>
    </div>
    </div>

  </div>
  )
}

export default Team
 
 