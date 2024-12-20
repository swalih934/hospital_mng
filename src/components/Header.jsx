import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { toast } from 'react-toastify';
function Header() {
    const navigate=useNavigate()
    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken]=useState(true)

    const handleLogOut=()=>{
      sessionStorage.clear()
      toast.info("User Logged Out!!")
      navigate('/')

    }
  return (
<>

  <Navbar expand="lg" className="bg-body-light border  border shadow">
      <Container>
      <img onClick={()=>navigate('/home')}  style={{width:'70px',cursor:"pointer"}} src="https://img.freepik.com/premium-vector/hospital-logo-vector_1277164-14253.jpg?semt=ais_hybrid" alt="" />

        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-5">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/doctors">All DOCTORS</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">CONTACT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>

          </Nav>
          
<div>
    {
        token?
        <div style={{cursor:'pointer'}} className='d-flex items-center '>
              <NavDropdown title="Account" onClick={()=>navigate('/home')}  className=' mt-3 btn btn-info '  id="basic-nav-dropdown">
                
              <NavDropdown.Item href='myprofile' onClick={()=>navigate('myprofile')}>My Profile</NavDropdown.Item>
              <NavDropdown.Item href='myappoinment' onClick={()=>navigate('myappoinment')} >
                My Appoinments
              </NavDropdown.Item>
              {/* <NavDropdown.Item onClick={()=>setToken(false)} >Logout</NavDropdown.Item> */}
         
            </NavDropdown>            {" "}

{/* <button className='btn btn-info ms-2'  >Account</button> */}
        </div>
        :
        <button onClick={ ()=>navigate('/')} className='btn btn-info rounded-5'>Create account</button>


    }
    
</div>
        </Navbar.Collapse>
        <button className='btn btn-danger mt-3 ms-2' onClick={handleLogOut}>LogOut</button>
      </Container>
    </Navbar>
 
</>
)
}

export default Header