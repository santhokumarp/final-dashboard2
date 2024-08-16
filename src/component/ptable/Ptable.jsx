import React from 'react';
import './ptable.scss';
import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const Ptable = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Your files', 'System', 'Other'],
        datasets: [{
          data: [63, 25, 12],
          backgroundColor: ['#7551FF', '#39B8FF', '#E3E3EE'],
          borderWidth: 0,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        maintainAspectRatio: false
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="header">
        <span className="header-title">Your Pie Chart</span>
        <span className="header-subtitle">
          Monthly <ArrowDropDownRoundedIcon className="dropdown-icon" />
        </span>
      </div>
      <div className="pie-container">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="p-b">
        <div className="p-b-item">
          <span className="footer-item-dot" style={{ color: '#4318FF' }}>●</span>
          <span className="footer-item-label">Your files</span>
          <span className="footer-item-value1">63%</span>
        </div>
        <div className="p-b-item">
          <span className="footer-item-dot" style={{ color: '#6AD2FF' }}>●</span>
          <span className="footer-item-label">System</span>
          <span className="footer-item-value">25%</span>
        </div>
      </div>
    </div>
  );
};

export default Ptable;

