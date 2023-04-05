import React from 'react';
import sa from './as.png';
import './Home.css';
import sp1 from './spo.png';
import sp2 from './spo2.png';
import sp3 from './spo3.png';


const TS = () => {
  return (
    <div className="toxi">
    <div>
      <h1>Explore New Things</h1>
      <p>To sell a product, you need the best power product landing pages. These landing page templates will power your conversions you generate more sales.</p>
      <a>L'ets Start</a>
      <div className='ctt'>
      <img className='cris' src={sp3}/>
      <img className='cris' src={sp1}/>
      <img className='crisw' src={sp2}/>
      </div>
      </div>
      <img src={sa} className='niw' alt="Product" />
    </div>
  );
}

export default TS;
