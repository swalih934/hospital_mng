import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Lanimg from '../images/header_img.png'
import grpimg from '../images/group_profiles.png'
import { useNavigate } from 'react-router-dom'
function Landing() {
   const navigate = useNavigate();
 
  return (
    <>
    <div className='align-items-center mx-4'>
        <div className='bg-warning container mt-5 rounded-2 '>
          <Row>
            <Col sm={12} md={6} className='p-5'>
              <h2 className='text-light'>Book Appoinment <br /> With Trusted Doctors</h2>
              <div className='d-flex mt-4' style={{gap:'12px'}}>
                {/* <img width={90} height={60} src={grpimg} alt="" /> */}
                <p className='text-light'>Ut, temporibus qui possimus optio, porro esse numquam hic quod voluptas, blanditiis doloribus ducimus.
                </p>
              </div>
              <div className='mt-5' style={{gap:'30px'}}>
                <button onClick={()=>{navigate('/doctors')}} className=' btn btn-success '>
                  Book appoinment
                {"  "}
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <img className='img-fluid' src=""
              // {Lanimg}
               alt="" />
            </Col>
          </Row>
  
        </div>
    </div>
    </>
  )
}

export default Landing