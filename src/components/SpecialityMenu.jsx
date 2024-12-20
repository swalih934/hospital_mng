import React from 'react';
import { Link } from 'react-router-dom';
import { specialityData } from '../Doctors/assets/assets';

function SpecialityMenu() {
  return (
    <>
      <div
        id="speciality"
        className="text-center mt-5"
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Find By Speciality
        </h2>
        <p
          className="mt-5"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            color: '#555',
            fontSize: '1rem',
            lineHeight: '1.5',
          }}
        >
          Ducimus laboriosam, nemo quam voluptatem atque porro soluta. Ducimus laboriosam, 
          nemo quam voluptatem atque porro soluta.
        </p>
        <div
          className="mt-5 container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '2rem',
          }}
        >
          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              style={{
                textDecoration: 'none',
                color: 'black',
                textAlign: 'center',
                flex: '1 1 150px', // Allows items to shrink/grow and align properly
                maxWidth: '200px',
              }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src={item.image}
                alt={item.speciality}
                style={{
                  width: '100%',
                  maxWidth: '150px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  transition: 'transform 0.3s ease',
                }}
                className="trans"
                onMouseOver={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
              />
              <p style={{ marginTop: '10px', fontSize: '1rem', fontWeight: '500' }}>
                {item.speciality}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SpecialityMenu;
