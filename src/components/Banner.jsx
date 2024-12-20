import React from 'react'
import { Col,Row } from 'react-bootstrap'
import appoinment from '../images/appointment_img.png'
import { useNavigate } from 'react-router-dom'
function Banner() {
    const navigate=useNavigate()

  return (
<>
<div className='mx-4'>
    <div className='container bg-warning rounded-3 mt-5 '>
        <Row >
            <Col className='p-5 d-flex justify-content-center flex-column' sm={12} md={8}>
            <div style={{fontSize:'40px',fontWeight:'bold'}}>
                <h1 className='text-light' style={{fontWeight:'bold'}}>Book Appoinment</h1>
                <h1 className='mt-3 text-light' style={{fontWeight:'bold'}}>With 100+ trusted Doctors</h1>
            </div>
    <div className='mt-5'>
                <button onClick={()=>{navigate('/');scrollTo(0,0)}} style={{cursor:'pointer'}} className='btn btn-success rounded-4 px-3 py-3'>Create account</button>
        
    </div>        </Col>
            <Col sm={12} md={4}>
            <img className='img-fluid' src={appoinment} alt="" />
            </Col>
        </Row>
    </div>
</div>

</>  )
}

export default Banner