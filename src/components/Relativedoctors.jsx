import React, { useEffect, useState } from 'react'
import {doctors} from '../Datas/Doctordetails'
import { useNavigate } from 'react-router-dom'
function Relativedoctors({speciality,docId}) {

    const navigate=useNavigate()
    const [relDoc,setRelDoc]=useState([])
    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsData=doctors.filter((doc)=>doc.speciality === speciality && doc._id !==docId)
            setRelDoc(doctorsData)
        }

    },[doctors,speciality,docId])
  return (
<>
<div className=' ' style={{marginTop:'200px'}}>
<div className='text-center item-center'>
    <h2>Top Doctors To Book</h2>
    <p>Simply browse through our extensive lists of truseted doctors.</p>
    
</div>
<div className=" align-items-center justify-content-center ">

    <div  className='row  align-items-center justify-content-center   row-cols-1 row-cols-md-3 row-cols-xl-5   'style={{gap:'5px'}}>
        {
            relDoc.slice(0,5).map((item)=>(
                <div onClick={()=>{navigate(`/appoinment/${item._id}`);scrollTo(0,0)} }  className='border rounded-2 '>
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
    </div >

<div className='align-items-center justify-content-center d-flex mt-4'>
        <button onClick={()=>{navigate('./doctors');scrollTo(0,0)}} className='btn btn-info text-center align-items-center'> more</button>
    
</div>    </div>

</div>

</>  )
}

export default Relativedoctors