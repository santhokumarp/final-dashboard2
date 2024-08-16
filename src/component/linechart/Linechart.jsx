import React from 'react'
import './linechart.scss'
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';
import Track from '../../assets/Track.svg'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Tooltip, Legend, CategoryScale } from "chart.js";


ChartJS.register(LineElement, PointElement, LinearScale, Tooltip, Legend, CategoryScale);


const Linechart = () => {
  const data = {
    labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    datasets: [
      {
        label: "Dataset 1",
        data: [50, 60, 108, 70, 85, 90],
        borderColor: "#7551FF",
        borderWidth: 4, // Increased line thickness
        borderCapStyle: 'round', // Rounded edges
        pointRadius: 0,
      },
      {
        label: "Dataset 2",
        data: [30, 40, 60, 45, 70, 75],
        borderColor: "#39B8FF",
        borderWidth: 4, // Increased line thickness
        borderCapStyle: 'round', // Rounded edges
        pointRadius: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#7551FF",
        titleColor: "#ffffff",
        titleFont: { size: 14, weight: "bold" },
        bodyColor: "#ffffff",
        bodyFont: { size: 14 },
        displayColors: false,
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}.00`;
          },
          title: function () {
            return '';
          }
        },
        yAlign: 'bottom',
        xAlign: 'center',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    hover: {
      mode: 'nearest',
      intersect: false
    }
  };

  return (
    <div className='linechart'>
      <div className="left">
        <button className='mbutton'><span><CalendarTodayRoundedIcon  style={{fontSize:'18px'}}/></span>This month</button>
       
        <BarChartRoundedIcon style={{fontSize:'18px', padding:'10px',borderRadius:'10px'}}  className='lbar'/>
       
      </div>
      
      <div className="right">
      <span className='dollar'>$37.5K</span>
      <div style={{fontSize:'14px',color:'#A3AED0' ,marginTop:'-10px'}}>Total Spent<span style={{color:'#05CD99'}}><ArrowDropUpRoundedIcon/>+2.45%</span></div>
      <img src={Track} style={{marginTop:'24px'}}/>

       <div className="middle">
      <div style={{ width: "506px",  position: "relative", }} className="feature">
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Line data={data} options={options} />
      </div>
      </div>
      </div>


      </div>
    </div>
  )
}

export default Linechart