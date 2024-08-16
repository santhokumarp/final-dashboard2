import React from 'react';
import './cal.scss';
import { useState, useEffect } from 'react';

const Cal = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [calendarDates, setCalendarDates] = useState([]);

  useEffect(() => {
      updateCalendar();
  }, [month, year]);

  const updateCalendar = () => {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const adjustedFirstDay = firstDay === 0 ? 7 : firstDay;
      const lastDate = new Date(year, month, 0).getDate();

      const dates = [];

      for (let i = 1; i < adjustedFirstDay; i++) {
          dates.push({ date: null });
      }

      for (let i = 1; i <= lastDate; i++) {
          const date = new Date(year, month - 1, i);
          dates.push({ date });
      }

      setCalendarDates(dates);
      updateRange();
  };

  const handleDateClick = (date) => {
      if (!startDate || (startDate && endDate)) {
          setStartDate(date);
          setEndDate(null);
          setCalendarDates(calendarDates.map(d => ({ ...d, selected: d.date === date, inRange: false })));
      } else if (startDate && !endDate) {
          setEndDate(date);
          updateRange();
      } else {
          setStartDate(date);
          setEndDate(null);
          setCalendarDates(calendarDates.map(d => ({ ...d, selected: d.date === date, inRange: false })));
      }
  };

  const updateRange = () => {
      if (startDate && endDate) {
          setCalendarDates(calendarDates.map(d => {
              if (!d.date) return d;
              const inRange = d.date >= startDate && d.date <= endDate;
              return {
                  ...d,
                  selected: d.date === startDate || d.date === endDate,
                  inRange
              };
          }));
      }
  };

  return (
    <div className='Cal'>
      <div className="calendar">
        <div className="calendar-header">
          <select value={month} onChange={e => setMonth(parseInt(e.target.value))}>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(0, i).toLocaleString('default', { month: 'long' })}
              </option>
            ))}
          </select>
          <select value={year} onChange={e => setYear(parseInt(e.target.value))}>
            {Array.from({ length: 110 }, (_, i) => (
              <option key={i} value={year - 100 + i}>
                {year - 100 + i}
              </option>
            ))}
          </select>
        </div>
        <div className="days-of-week">
          {['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="calendar-body">
          {calendarDates.map((dateObj, i) => (
            <div
              key={i}
              className={`${dateObj.selected ? 'selected' : ''} ${dateObj.inRange ? 'in-range' : ''}`}
              onClick={() => dateObj.date && handleDateClick(dateObj.date)}
            >
              {dateObj.date && dateObj.date.getDate()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cal;
