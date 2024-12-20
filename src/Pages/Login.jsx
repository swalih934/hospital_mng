import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import{ registerApi,loginApi} from '../services/Allapies'
import { toast } from 'react-toastify';

function Login() {
  const [authStatus, setAuthStatus] = useState(false);
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
  });

  const nav = useNavigate();

  const changeAuth = () => {
    setAuthStatus(!authStatus);
    setUser({
      email: '',
      username: '',
      password: '',
    });
  };

  const handleRegister = async () => {
    console.log(user);
    const { email, username, password } = user

    if (!email || !username || !password) {
      toast.warning("enter valid data")
    }
    else {
      const res = await registerApi(user)
      console.log(res);
      if (res.status == 200) {
        toast.success("registration successfull")
        setUser({
          email: "", username: "", password: ""
        })
        changeAuth()

      }
      else if (res.status === 400) {
        toast.error("registration failed")
      }

    }




  }
  const handleLogin = async () => {
    const { email, password } = user
    if (!email || !password) {
      toast.warning("enter valid data")
    }
    else {
      const res = await loginApi(user)
      console.log(res);
      if (res.status == 200) {
        toast.success("signin successfull")
        setUser({
          email: "", username: "", password: ""
        })
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem("username", res.data.username)
        sessionStorage.setItem("address",res.data.address)
        sessionStorage.setItem("phone",res.data.phone)
        sessionStorage.setItem("gender",res.data.gender)
        sessionStorage.setItem("dob",res.data.dob)
        sessionStorage.setItem("profile",res.data.profile)



// setTokenStatus(true)
        nav('/home')

      }
      else {
        toast.error(res.response.data)
      }

    }
  }

  return (
    <>
      {/* <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
        <div style={{  width: '100%',  maxWidth: '450px',  background: '#fff', borderRadius: '12px',  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',  }}className="p-4" >
          <h2 className="text-center"  style={{ color: '#333', fontWeight: 'bold', marginBottom: '10px' }} >
            {authStatus ? 'Create Account' : 'Login'}
          </h2>
          <p className="text-center" style={{ fontSize: '14px', color: '#777' }}>
            {authStatus
              ? 'Please sign up to book appointments'
              : 'Please login to book appointments'}
          </p>

          <Form>
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control type="email"   placeholder="name@example.com"     style={{
                  borderRadius: '8px',     border: '1px solid #ddd',    padding: '12px',}}/>
            </FloatingLabel>

            {authStatus && (
              <FloatingLabel controlId="floatingUsername" label="Full Name" className="mb-3">
                <Form.Control
                  type="text"    placeholder="Full Name"      style={{      borderRadius: '8px',        border: '1px solid #ddd',       padding: '12px',}} />  </FloatingLabel>)}

            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password"placeholder="Password"style={{  borderRadius: '8px',  border: '1px solid #ddd',  padding: '12px', }} />
            </FloatingLabel>

            <div className="d-grid mt-4">
              <button  className="btn"  style={{  background: '#007bff',  color: '#fff',  fontWeight: 'bold',  borderRadius: '8px',   padding: '10px',   }}  >
                {authStatus ? 'Create Account' : 'Login'}
              </button>
            </div>
          </Form>

          <div className="text-center mt-3">
            <button className="btn btn-link text-decoration-none"  style={{ fontSize: '14px', color: '#007bff' }} onClick={changeAuth} >
              {authStatus
                ? 'Already have an account? Login'
                : "Don't have an account? Create one"}
            </button>
          </div>
        </div>
      </div> */}
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="w-75 border shadow p-5 row">
          
          <div className="col">
            {
              authStatus ?
                <h2 style={{color:'blue'}}>User Registration</h2>
                :
                <h2 style={{color:'blue'}}>Login</h2>

            }
            <div className="my-3">
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} type="email" placeholder="name@example.com" />
              </FloatingLabel>
              {
                authStatus &&
                <FloatingLabel className="my-3" controlId="floatingPassword" label="UserName">
                  <Form.Control value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }} type="text" placeholder="Password" />
                </FloatingLabel>
              }


              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} type="password" placeholder="Password" />
              </FloatingLabel>

              {
                authStatus ?
                  <div className='mt-3 d-grid'>
                    <button onClick={handleRegister} className='btn btn-info'>sign up</button>
                  </div>
                  :
                  <div className='mt-3 d-grid'>
                    <button onClick={handleLogin}  className='  btn btn-info'>sign in</button>
                  </div>
              }

              {
                authStatus ?
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-link' onClick={changeAuth}>have an accound</button>
                  </div>
                  :
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-link' onClick={changeAuth}>already a user</button>
                  </div>
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
