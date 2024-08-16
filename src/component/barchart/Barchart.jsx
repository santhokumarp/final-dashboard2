import React from 'react'
import './barchart.scss'
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchart = () => {
  const data = {
    labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    datasets: [
      {
        label: "Dataset 1",
        data: [3, 2, 3, 4, 2, 2, 4, 3, 3],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          gradient.addColorStop(0, 'rgba(57, 184, 255, 1)');
          gradient.addColorStop(1, 'rgba(117, 81, 255, 1)');
          return gradient;
        },
        borderRadius: 10,
        barPercentage: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        ticks: {
          color: "#A3AED0",
          padding: 10, 
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
  };
  return (
    <div className='barchart'>
      <div className="top-items">
      <span style={{fontSize:'24',fontWeight:'bold'}}>Weekly Revenue</span>
      <BarChartRoundedIcon style={{fontSize:'18px', padding:'10px',borderRadius:'10px'}} className='bri'/>
      </div>
      <div className="bottom-item">
     
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ width: "560px", height: "150px", position: "relative" ,marginTop:'100px'}}>
        <Bar data={data} options={options} />
      </div>
    </div>



      </div>
      </div>
  
      
   
  )
}

export default Barchart