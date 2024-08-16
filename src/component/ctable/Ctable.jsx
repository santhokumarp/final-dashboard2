import React from 'react'
import './ctable.scss'
import  { useState} from 'react';

const Ctable = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='ctable'>
       <div className="table-container">
      <div className="table-header">
        <h1>Check Table</h1>
        <div className="action-icon" onClick={toggleDropdown}>
          <div className={`dropdown-menu ${dropdownVisible ? 'show' : ''}`}>
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
            <a href="#">Action 3</a>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>PROGRESS</th>
            <th>QUANTITY</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /> Horizon UI PRO</td>
            <td>17.5%</td>
            <td >2,458</td>
            <td >24.Jan.2024</td>
          </tr>
          <tr>
            <td><input type="checkbox" /> Horizon UI Free</td>
            <td>10.8%</td>
            <td>1,485</td>
            <td>12.Jun.2024</td>
          </tr>
          <tr>
            <td><input type="checkbox"  /> Weekly Update</td>
            <td>21.3%</td>
            <td>1,024</td>
            <td>5.Jan.2024</td>
          </tr>
          <tr>
            <td><input type="checkbox"  /> Venus 3D Asset</td>
            <td>31.5%</td>
            <td>858</td>
            <td>7.Mar.2024</td>
          </tr>
          <tr>
            <td><input type="checkbox" /> Marketplace</td>
            <td>12.2%</td>
            <td>258</td>
            <td>17.Dec.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Ctable