import React from "react";
import { doctors } from "../Datas/Doctordetails";
import Header from "../components/Header";

function MyAppoinment() {
  return (
    <>
    <Header/>
      <div
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "1rem",
          background: "#f9f9f9",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          My Appointments
        </p>
        <div>
          {doctors.slice(0, 3).map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "1rem",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Image Section */}
              <div>
                <img
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* Doctor Details */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {item.name}
                </p>
                <p style={{ color: "#666" }}>{item.speciality}</p>
                <p style={{ fontWeight: "bold", color: "#555" }}>Address:</p>
                <p style={{ color: "#666" }}>{item.address.line1}</p>
                <p style={{ color: "#666" }}>{item.address.line2}</p>
                <p style={{ fontSize: "0.9rem", color: "#333" }}>
                  <span style={{ fontWeight: "bold", color: "#007bff" }}>
                    Date & Time:
                  </span>{" "}
                  23, June, 2024 | 8:00 PM
                </p>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <button
                  style={{
                    padding: "10px 15px",
                    fontSize: "0.9rem",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007bff",
                    color: "white",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
                >
                  Pay Online
                </button>
                <button
                  style={{
                    padding: "10px 15px",
                    fontSize: "0.9rem",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    backgroundColor: "#f9f9f9",
                    color: "#333",
                    cursor: "pointer",
                    transition: "background-color 0.3s, color 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#ffcccc";
                    e.target.style.color = "red";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#f9f9f9";
                    e.target.style.color = "#333";
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyAppoinment;
