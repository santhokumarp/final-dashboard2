import React from 'react'
import './widgets.scss'
import Ellipse1 from '../../assets/Ellipse1.svg'
import Ellipse2 from '../../assets/Ellipse2.svg'
import bicon1 from '../../assets/bicon1.svg'
import bicon2 from '../../assets/bicon2.svg'
import bicon3 from '../../assets/bicon3.svg'

const Widgets = ({type}) => {
  let data;
        switch(type){
          case "Earnings":
            data = {
              title:"Earnings",
              amount: "$350.4",
              icon:(<img src={bicon1} style={{width:'45px',marginLeft:'8px',marginTop:'7px'}}/>) 
            };
            break;
          case "Spend":
            data = {
              title:"Spend this month",
              amount: "$642.39",
              icon:(<img src={bicon2} style={{width:'45px',marginLeft:'8px',marginTop:'7px'}}/>) 
            };
            break;
          case "Sales":
            data = {
              title:"Sales",
              amount:"$574.34",
              percentage:'+23% ',
              since:'since last month',
              
          
             
            };
            break;
          case "balance":
            data = {
              title:"Your balance",
              amount:"$1,000",
              img: (<img src={Ellipse1} style={{width:'40px',marginLeft:'10px',marginTop:'10px'}}/>) 
            };
            break;
          case "Tasks":
            data = {
              title:"New Tasks",
              amount: "154",
              img2: (<img src={Ellipse2} style={{width:'40px',marginLeft:'10px',marginTop:'10px'}}/>) 

              
               
            };
            break;
          case "Projects":
            data = {
              title:"Total Projects",
              amount: "2935",
              icon: (<img src={bicon3} style={{width:'45px',marginLeft:'8px',marginTop:'7px'}}/>) 
            };
            break;
            default:
              break;
        }
  return (
    <div className='widfull'>
      <div className="left">
      <span className='title'>{data?.title}</span>
      <span className='amount'>{data?.amount}</span>
      <div style={{fontSize:'12px',color:'#A3AED0'}}><span style={{color:'#05CD99',marginLeft:'10px'}}>{data?.percentage}</span>{data?.since}</div>
        <div className='bar-icon' style={{color:'#4318FF'}} >
       {data?.icon} </div>
       
       
       
       
       <div>{data?.img}</div>
       <div>{data?.img2}</div>
        



      </div>
    </div>
  )
}

export default Widgets