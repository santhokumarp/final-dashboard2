import React from 'react';
import './btable.scss';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import ArrowDropUpRoundedIcon from '@mui/icons-material/ArrowDropUpRounded';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Btable = () => {

  const data = {
    labels: ["00", "01", "08", "12", "14" ,"16","18"],
    datasets: [
      {
        label: "Dataset 1",
        data: [3, 4, 3, 4, 3 ,4,3],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 100);
          
          gradient.addColorStop(1, 'rgba(117, 81, 255, 1)');
          return gradient;
        },
        borderRadius: 5,
        barPercentage: 0.5, 
        categoryPercentage: 0.7, 
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
        titleFont: { size: 8, weight: "bold" },
        bodyColor: "#ffffff",
        bodyFont: { size: 8 },
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
          padding: 5, 
          font: {
            size: 8,
          },
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
    <div className='btable'>
       
       <div className="bc" style={{padding:"15px"}}>
    
        <div style={{color:'#A3AED0', fontSize:'14px'}}> Daily Traffic</div>
        <div style={{fontSize:'34px',fontWeight:'bold'}} className='dat'>2.579 <span style={{color:'#A3AED0',fontSize:'14px',fontWeight:'normal'}}>Visitors</span></div>
      
      
      
        <div style={{marginLeft:'175px',marginTop:'-65px',fontSize:'12px',fontWeight:'bold',color:'#05CD99'}}> <ArrowDropUpRoundedIcon/>+2.45%</div>
       
        
        </div>
       
      <div className="table1">
        <div style={{ width: "250px", height: "150px", position: "relative"}}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Btable;
