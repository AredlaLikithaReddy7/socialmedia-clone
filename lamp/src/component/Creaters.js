import React from 'react'
import '../creaters.css'
import likitha from '../images/likitha.png'
import arthi from '../images/arthi.png'
import muzamil from '../images/muzamil.png'
import pavan from '../images/pavan.png'
function Creaters() {
  return (
    <div>
    <h1 className='text-center'>From the creaters of LAMP</h1>
    <div className='row mt-5 mb-4'>
    <div className='col-3 card3  p-2'>
      <img src={likitha} className='image1 w-75 d-block mx-auto'></img>
      <div className='content3 '>
       <p>Facilisis aptent curabitur, libero pulvinar, odio per ad suscipit himenaeos congue orci. Sit netus aliquam adipiscing, risus ornare ultrices, praesent potenti tempor egestas imperdiet porta ullamcorper vehicula. Convallis sem venenatis, ullamcorper phasellus, volutpat interdum est blandit ante porta vitae.s</p>
      </div>
      <h1 className='letter1 text-center mt-3'>L</h1>
    </div>
    <div className='col-3 card4  p-2'>
    <img src={arthi} className='image2 w-75 d-block mx-auto'></img>
    <div className='content4 '>
     <p>Facilisis aptent curabitur, libero pulvinar, odio per ad suscipit himenaeos congue orci. Sit netus aliquam adipiscing, risus ornare ultrices, praesent potenti tempor egestas imperdiet porta ullamcorper vehicula. Convallis sem venenatis, ullamcorper phasellus, volutpat interdum est blandit ante porta vitae.s</p>
    </div>
    <h1 className='letter2 text-center mt-3'>A</h1>
  </div>
  <div className='col-3 card5  p-2'>
  <img src={muzamil} className='image3 w-75 d-block mx-auto'></img>
  <div className='content5 '>
   <p>Facilisis aptent curabitur, libero pulvinar, odio per ad suscipit himenaeos congue orci. Sit netus aliquam adipiscing, risus ornare ultrices, praesent potenti tempor egestas imperdiet porta ullamcorper vehicula. Convallis sem venenatis, ullamcorper phasellus, volutpat interdum est blandit ante porta vitae.s</p>
  </div>
  <h1 className='letter3 text-center mt-3'>M</h1>
</div>
<div className='col-3 card6  p-2'>
<img src={pavan} className='image4 w-75 d-block mx-auto'></img>
<div className='content6 '>
 <p>Facilisis aptent curabitur, libero pulvinar, odio per ad suscipit himenaeos congue orci. Sit netus aliquam adipiscing, risus ornare ultrices, praesent potenti tempor egestas imperdiet porta ullamcorper vehicula. Convallis sem venenatis, ullamcorper phasellus, volutpat interdum est blandit ante porta vitae.s</p>
</div>
<h1 className='letter4 text-center mt-3'>P</h1>
</div>
   </div>
    
    </div>
  )
}

export default Creaters