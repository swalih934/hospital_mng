import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
function About() {
  return (
    <>
    <Header/>
      <h3 className='text-center mt-4'>ABOUT US</h3>
      <div className='container border shadow'>
        <Row>
          <Col md={6} sm={12} >
            <img src="" alt="" />
          </Col>
          <Col md={6} sm={12} >
            <div className='p-3'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur doloremque veritatis molestiae
                laudantium totam cupiditate commodi aliquid consequatur accusamus ab? Quis in recusandae nihil quia
                cumque id minus, unde fugiat. <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus error sunt aspernatur dolores
                quaerat consequuntur consectetur, vero odit, harum facilis tempore optio, suscipit alias minus!
                Perferendis quo quas reprehenderit! <br /></p>
              <h6 style={{ fontWeight: 'bold' }}> Our Service</h6>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id repudiandae similique provident ab
                asperiores dignissimos consequuntur ipsa nobis corrupti, distinctio adipisci perferendis eaque,
                animi, sit iste veniam suscipit facere quia!</p>
            </div>
          </Col>
        </Row>

      </div>
      <div className='container mt-5'>
        <h4>WHY CHOOSE US</h4>

        <div>
          <Row className='border border-1'>
            <Col md={4} sm={12} className='border border-2'>
              <div className='p-4'>
                <h6 style={{ fontWeight: 'bold' }}>EFFICIENCY:        </h6>

                <p className='mt-4'>Lorem ipsum, dolor sit amet cm quaerat tenetur? Quod quae ab molesta debitis.</p>


              </div>      </Col>
            <Col md={4} sm={12} className='border border-1'>
              <div className='p-4'>
                <h6 style={{ fontWeight: 'bold' }}>PERSONAIZATIONA:        </h6>

                <p className='mt-4'>Lorem ipsum, dolor sit amet cm quaerat tenetur? Quod quae ab molesta debitis.</p>


              </div>
            </Col>
            <Col md={4} sm={12} className='border border-1'>
              <div className='p-4'>
                <h6 style={{ fontWeight: 'bold' }}>CONVENIENCE:        </h6>

                <p className='mt-4'>Lorem ipsum, dolor sit amet cm quaerat tenetur? Quod quae ab molesta debitis.</p>


              </div>
            </Col>
          </Row>
        </div>

      </div></>)
}

export default About