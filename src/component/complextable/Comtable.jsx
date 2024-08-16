import React from 'react'
import './comtable.scss'
import{ useState} from 'react'

const Comtable = () => {
 
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.action-icon')) {
      setDropdownVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="table-container">
    <div className="table-header">
      <h1>Complex Table</h1>
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
          <th>STATUS</th>
          <th>DATE</th>
          <th>PROGRESS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Horizon UI PRO</td>
          <td className="status"><span className="status-icon status-approved"></span>Approved</td>
          <td>18 Apr 2024</td>
          <td><div className="progress-bar"><div className="progress-bar-inner progress-17"></div></div></td>
        </tr>
        <tr>
          <td>Horizon UI Free</td>
          <td className="status"><span className="status-icon status-disabled"></span>Disabled</td>
          <td>18 Apr 2024</td>
          <td><div className="progress-bar"><div className="progress-bar-inner progress-10"></div></div></td>
        </tr>
        <tr>
          <td>Marketplace</td>
          <td className="status"><span className="status-icon status-approved"></span>Approved</td>
          <td>20 May 2024</td>
          <td><div className="progress-bar"><div className="progress-bar-inner progress-21"></div></div></td>
        </tr>
        <tr>
          <td>Weekly Updates</td>
          <td className="status"><span className="status-icon status-error"></span>Error</td>
          <td>12 Jul 2021</td>
          <td><div className="progress-bar"><div className="progress-bar-inner progress-12"></div></div></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Comtable