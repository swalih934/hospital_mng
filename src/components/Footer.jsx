import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
<>
<div className='container mt-5 '>
        <Row className='p-4'>
          <Col md={5}>
            <h4>Abcdef ghi</h4>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus corporis fugit ipsam eveniet obcaecati magni earum dicta! Rerum quisquam aliquam, quas odio vero corporis officiis a, fuga itaque nisi modi?</p>
          </Col>
          <Col md={4}>
            <h4>COMPANY</h4>
            <div className=' mt-3 d-flex flex-column' style={{gap:'6px'}}>
              <Link to={'/'}  style={{ textDecoration: 'none',color:'black' }}>Home</Link>
              <Link to={'/about'}  style={{ textDecoration: 'none',color:'black'  }}>About us</Link>
              <Link to={'/contact'}  style={{ textDecoration: 'none',color:'black'  }}>Contact us</Link>
              <Link to={'/doctors'} style={{ textDecoration: 'none',color:'black'  }}>Contact us</Link>

            </div>
          </Col>
          <Col md={3}>
            {/* <h4>Feedback</h4>
            <textarea className='form-control mt-3' name="" id=""></textarea>
            <button className='btn btn-dark mt-3'>Submit</button> */}
            <h4>GET IN TOUCH</h4>
            <ul className='mt-3'>
                <li>+1-212-987-9876</li>
                <li>swalih@gmail.com</li>
            </ul>
          </Col>
        </Row>
        <div>
            <hr />
            <p className='py-3 text-center'>Copyright 2024@ Hospitalso -All Reserved</p>
        </div>
      </div>

</>

)
}

export default Footer