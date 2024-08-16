import React from 'react'
import './control.scss'
import FP from '../../../assets/FPicon.svg'

const Control  = () => {
  return (
    <div className='control'>

      <img src={FP} style={{width:'80px',height:'80px'}}/>
      <div className="cmc">
      <div className='cmc-text'>
        <p>Control card security</p>
        <p>in-app with a tap</p>

      </div>
      <p style={{color: '#A3AED0',fontSize:'10px'}}>Discover our cards benefits, with one tap.</p>
      </div>

      <button className='btn-cards'>Cards</button>




    </div>
  )
}

export default Control 