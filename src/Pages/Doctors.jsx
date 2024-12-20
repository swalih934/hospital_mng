import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Col,Row } from 'react-bootstrap';
import doctors from '../Datas/Doctordetails';
import Header from '../components/Header';
function Doctors() {
  const {speciality}=useParams()
  console.log(speciality);

  const [filterDoc,setFilterDoc]=useState([])
  const navigate=useNavigate()

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc=>doc.speciality===speciality))
    }else{
      setFilterDoc(doctors)
    }
  }
  useEffect(()=>{
applyFilter()
  },[doctors,speciality])
  
  return (
<>
<Header/>
<div style={{margin:'20px'}}>
  {/* <p >Brows through the doctors specialist</p> */}
  <Row>
    <Col  sm={12} md={3}>
      <div style={{margin:'20px'}}>
        <p  onClick={()=>speciality ==='General physician' ? navigate('/doctors'):navigate('/doctors/General physician')} style={{cursor:'pointer'}} className={`form-control  ${speciality==="General physician"?"bg-warning ":""}`}>General physician</p>
        <p  onClick={()=>speciality ==='Gynecologist' ? navigate('/doctors'):navigate('/doctors/Gynecologist')}style={{cursor:'pointer'}}  className={`form-control ${speciality===" Gynecologist"?"bg-warning ":""}`} >Gynecologist</p>
        <p  onClick={()=>speciality ==='Dermatologist' ? navigate('/doctors'):navigate('/doctors/Dermatologist')}style={{cursor:'pointer'}}   className={` form-control mt-3 ${speciality===" Dermatologist" ? "bg-warning":""}`}  >Dermatologist</p>
        <p  onClick={()=>speciality ==='pediatricians' ? navigate('/doctors'):navigate('/doctors/Pediatricians')}style={{cursor:'pointer'}}  className={`form-control mt-3 ${speciality==="Pediatricians "?"bg-warning":""}`}>Pediatricians</p>
        <p onClick={()=>speciality ==='Neurologist' ? navigate('/doctors'):navigate('/doctors/Neurologist')} style={{cursor:'pointer'}}    className={`form-control mt-3 ${speciality==="Neurologist "?"bg-warning":""}`}  >Neurologist</p>
        <p onClick={()=>speciality ==='Gastroenolist' ? navigate('/doctors'):navigate('/doctors/Gastroenolist')}style={{cursor:'pointer'}} className={`form-control mt-3 ${speciality==="Gastroenolist "?"bg-warning":""}`} >Gastroenolist</p>
        {/* <input onClick={()=>speciality ==='General physician' ? navigate('/doctors'):navigate('/doctors/General physician')} className={` cursor-pointer ${speciality==="General physician"?"bg-warning ":""}`} placeholder='General physician' type="text" />
        <input onClick={()=>speciality ==='Gynacologist' ? navigate('/doctors'):navigate('/doctors/Gynecologist')}           className={` ${speciality===" Gynacologist"?"bg-warning ":""}`}   placeholder='Gynacologist' type="text" />
        <input onClick={()=>speciality ==='Dermatologist' ? navigate('/doctors'):navigate('/doctors/Dermatologist')}         className={` mt-3 ${speciality===" Dermatologist" ? "bg-warning":""}`}  placeholder='Dermatologist' type="text" />
        <input onClick={()=>speciality ==='pediatrician' ? navigate('/doctors'):navigate('/doctors/Pediatricians')}          className={` mt-3 ${speciality==="pediatrician "?"bg-warning":""}`} placeholder='pediatrician' type="text" />
        <input onClick={()=>speciality ==='Neurologist' ? navigate('/doctors'):navigate('/doctors/Neurologist')}             className={` mt-3 ${speciality==="Neurologist "?"bg-warning":""}`} placeholder='Neurologist' type="text" />
        <input onClick={()=>speciality ==='Gastroenolist' ? navigate('/doctors'):navigate('/doctors/Gastroenolist')}         className={` mt-3 ${speciality==="Gastroenolist "?"bg-warning":""}`}  placeholder='Gastroenolist' type="text" /> */}
      </div>
    </Col>
    <Col sm={12} md={9}>
    <div  className='row  align-items-center justify-content-center   row-cols-1 row-cols-md-3 row-cols-xl-5  mt-5 '>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    {
            filterDoc.map((item)=>(
                <div  onClick={()=>navigate(`/appoinment/${item._id}`)}   className='border rounded-2 m-2' style={{width:'265px'}}>
                                            <img style={{height:'250px'}} className='img-fluid' src={item.image} alt="" />

                    <div  className=' align-items-center'>
                        <div className='d-flex align-items-center'>
                            <p className=' shadow'><i className="fa-solid fa-circle" style={{color: "#2cce4c",fontSize:'10px'}} /></p>
                            <p style={{color: "#2cce4c",fontSize:'15px',marginTop:'4px'}}>Available</p>


                        </div>
                        <p style={{fontWeight:'bold'}}>{item.name}</p>
                        <p style={{fontSize:'15px'}}>{item.speciality}</p>
                        
                        
                        
                    </div>
                </div>
        
            ))
        }
                                </div>

    </Col>
  </Row>
</div>
</>  )
}

export default Doctors