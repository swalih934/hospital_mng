import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctors from '../Datas/Doctordetails';

function TopDoctors() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginTop: '200px', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className="text-center" style={{ marginBottom: '20px',}}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Top Doctors To Book</h2>
          <p style={{ fontSize: '1rem', color: '#555', margin: '10px 0' }}>
            Simply browse through our extensive lists of trusted doctors.
          </p>
        </div>
        <div className="d-flex justify-content-center"style={{display: 'flex',flexWrap: 'wrap', gap: '20px',}} >
          {doctors.slice(0, 10).map((item, index) => (
            <div key={index} onClick={() => { navigate(`/appoinment/${item._id}`);scrollTo(0, 0); }}





              className="border rounded-2"
              style={{  flex: '1 1 200px', maxWidth: '250px',   textAlign: 'center',  cursor: 'pointer',  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px',overflow: 'hidden',   }} >
              <img className='p-3' style={{ width: '100%', height: '250px', objectFit: 'cover', }} src={item.image}  alt={item.name}  />
              <div style={{padding: '15px',  }}>
                <div
                  className="d-flex align-items-center"
                  style={{    display: 'flex', alignItems: 'center', justifyContent: 'center',   marginBottom: '10px', }} >
                  <p style={{margin: '0',padding: '0',color: '#2cce4c', fontSize: '10px',   marginRight: '5px' }} >
                    <i className="fa-solid fa-circle" style={{ color: '#2cce4c' }} />
                  </p>
                  <p style={{ margin: '0', color: '#2cce4c',    fontSize: '15px',   }}   >
                    Available
                  </p>
                </div>
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>{item.name}</p>
                <p style={{ fontSize: '15px', color: '#555' }}>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="align-items-center justify-content-center d-flex mt-4"style={{  display: 'flex',  justifyContent: 'center',  marginTop: '20px', }} >
          <button onClick={() => {  navigate('/doctors');  scrollTo(0, 0); }}
            className="btn btn-info" style={{  padding: '10px 20px',  fontSize: '1rem',  borderRadius: '8px',  backgroundColor: '#17a2b8',  color: 'white',  border: 'none',  cursor: 'pointer',  transition: 'all 0.3s ease', }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#138496')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#17a2b8')}
          >
            More
          </button>
        </div>
      </div>
    </>
  );
}

export default TopDoctors;
