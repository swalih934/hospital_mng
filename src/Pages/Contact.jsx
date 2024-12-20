import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Header from '../components/Header'
function Contact() {
  return (
<>
<Header/>
<h5 className='text-center mt-5'>CONTACT US
</h5>
<div className='container mt-4 border border shadow'>
<Row>
  <Col sm={12} md={6}>
  <img src="" alt="" />
  </Col>
  <Col sm={12} md={6}>
 <div className='p-5'>
    <h6 style={{fontWeight:'bold'}}>OUR OFFICE</h6>
    <p>rtyufghbr <br />fghjfgh,us</p>
    <p>psjhsjh <br />dfghjkl.com</p>
    <p>Careers at PRESCRIPTO</p>
    <p>dfghj fghj ghj dfgh fgh gg thj ertyu</p>
    <button className='btn btn-primary'>Explore Jobs</button>
 </div>
  </Col>
</Row>
</div>


</>  )
}

export default Contact