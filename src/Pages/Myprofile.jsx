
import React, { useState ,useEffect} from 'react'
import {toast} from 'react-toastify'
import { profileUpdateApi } from '../services/Allapies';
import base_url from '../services/base_url';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
// import wadsapp from '../images/wadsapp.jpe'
function Myprofile() {


  const nav=useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    profile: "",
    phone: "",
    address: "",
    
    gender: "",
    dob: "",
  });

  const [preview,setPreview]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem('username')){
      setUserData({...userData,username:sessionStorage.getItem('username'),address:sessionStorage.getItem('address'),
        phone:sessionStorage.getItem('phone'),gender:sessionStorage.getItem('gender'),dob:sessionStorage.getItem('dob'),
        profile:sessionStorage.getItem('profile')
      })
    }
    
    
  },[])
useEffect(()=>{
  if(userData.profile && userData.profile.type){
    setPreview(URL.createObjectURL(userData.profile))
  }
  else{
    setPreview("")
  }
},[userData.profile])


  const [view, setView] = useState(false)
  const changeView = () => {
    setView(!view)
  }

  const handleProfileUpdation=async()=>{
    console.log(userData);
    const {username,address,phone,dob,gender,profile}=userData
    if(!username ||!address ||!phone ||!dob ||!gender ||!profile){
      toast.warning("Enter Valid Inputs!!")
    }else{
      if(userData.profile.type){
        const  fd=new FormData()
        fd.append('username',username)
        fd.append('address',address)
        fd.append('phone',phone)
        fd.append('dob',dob)
        fd.append('gender',gender)
        fd.append('profile',profile)

        const header={
          "Content-Type":"multipart/form-data",
          "Authorization":`Token ${sessionStorage.getItem("token")}`
        }

          const res=await profileUpdateApi(fd,header)
          console.log(res);
          if(res.status==200){
            toast.success("Profile Updated!!")
            changeView()
            sessionStorage.clear()
            nav('/')

          }else{
            toast.warning("profile Updation Failed")
          }
          
      }else{
        const header={
          "Content-Type":"application/json",
          "Authorization":`Token ${sessionStorage.getItem("token")}`
          //  'Content-Type': 'multipart/form-data',
          // 'Authorization': `Token ${sessionStorage.getItem('token')}`
        }

        const res=await  profileUpdateApi(userData,header)
        console.log(res);
        
        if(res.status==200){
          toast.success("Profile Updated!!")
          changeView()
          sessionStorage.clear()
          nav('/')
        }else{
          toast.warning("profile Updation Failed")
        }
      }
    }
    
  }
  return (
    <>
    <Header/>
      <div className=' p-2  mt-3  '>
        <div className='d-flex align-items-center justify-content-center '>
          <h3 className='text-center item-center  '>Profile Updation</h3>

         
        </div>
        
          
          <div className='d-flex flex-column justify-content-center align-items-center'>

            <label  >
              <input  onChange={(e)=>setUserData({...userData,profile:e.target.files[0]})}  type="file" name=''  style={{ display: 'none' }} />
              <img style={{ width: "200px" }} className='img-fluid' src={ preview ? preview : sessionStorage.getItem('profile') ? `${base_url}/Uploads/${sessionStorage.getItem('profile')}`:"https://i.pinimg.com/originals/26/61/9c/26619c16b5451afaa95956dff93ae3e5.jpg"} alt="" />
            </label>

            <FloatingLabel className='w-50 mb-2'  onChange={(e)=>setUserData({...userData,username:e.target.value})} controlId="floatingPassword" label="name">
        <Form.Control type="text" placeholder="username"  defaultValue={userData.username}/>
      </FloatingLabel>
      <FloatingLabel className='w-50 mb-2' onChange={(e)=>setUserData({...userData,address:e.target.value})}   controlId="floatingPassword" label="address">
        <Form.Control type="text" placeholder="Password" defaultValue={userData.address} />
      </FloatingLabel>
      <FloatingLabel className='w-50 mb-2' onChange={(e)=>setUserData({...userData,phone:e.target.value})} controlId="floatingPassword" label="phone">
        <Form.Control type="text" placeholder="Password"  defaultValue={userData.phone} />
      </FloatingLabel> 
        <FloatingLabel className='w-50 mb-2'  onChange={(e)=>setUserData({...userData,gender:e.target.value})}controlId="floatingPassword" label="genter">
        <Form.Control type="text" placeholder="Password"  defaultValue={userData.gender}  />
      </FloatingLabel>  
       <FloatingLabel className='w-50 mb-2' onChange={(e)=>setUserData({...userData,dob:e.target.value})}  controlId="floatingPassword" label="dob">
        <Form.Control type="text" placeholder="Password"  defaultValue={userData.dob}/>
      </FloatingLabel>


          
            <div className='d-flex justify-content-between'>
              <button onClick={handleProfileUpdation} className='btn btn-success'>Update</button>
              {/* <button onClick={changeView} className='btn btn-danger ms-3'>Cancel</button> */}
            </div>
          </div>
 

        
      </div>
     

    </>)
}

export default Myprofile