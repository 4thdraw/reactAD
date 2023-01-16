import React from 'react';
import Banner from './Banner';

function Maincomponent() {
  return (
    <div>
      <Banner></Banner>
      <div>
        <div style={{height:"100vh"}} id="procss" className="border-top"></div>
        <div style={{height:"100vh"}} id="review" className="border-top bg-dark"></div>
        <div style={{height:"100vh"}} id="qna" className="border-top"></div>
      </div>
    </div>
  )
}

export default Maincomponent