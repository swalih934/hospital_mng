import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../Datas/Doctordetails';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Relativedoctors from '../components/Relativedoctors';

function Appointment() {
    const { docId } = useParams();
    const [docInfo, setDocInfo] = useState(null);
    const [docSlots, setDocSlots] = useState([]);
    const [slotDetails, setSlotDetails] = useState({ date: '', time: '' });
    const [slotIndex, setSlotIndex] = useState(0);
    const navigate = useNavigate();

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const fetchDocInfo = () => {
        const doc = doctors.find((doc) => doc._id === docId);
        if (doc) {
            setDocInfo(doc);
        } else {
            console.error('Doctor not found!');
        }
    };

    const getAvailableSlots = () => {
        let today = new Date();
        let slots = [];

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            let endTime = new Date(currentDate);
            endTime.setHours(21, 0, 0, 0);

            currentDate.setHours(i === 0 ? Math.max(currentDate.getHours() + 1, 10) : 10);
            currentDate.setMinutes(0);

            let timeSlots = [];
            while (currentDate < endTime) {
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                });
                currentDate.setMinutes(currentDate.getMinutes() + 60);
            }

            slots.push(timeSlots);
        }
        setDocSlots(slots);
    };

    const bookAppointment = () => {
        if (!slotDetails.date || !slotDetails.time) {
            alert('Please select both a date and time.');
            return;
        }

        const selectedDate = docSlots[slotIndex]?.[0]?.datetime;
        if (!selectedDate) return;

        const formattedDate = `${selectedDate.getDate()}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`;
        alert(`Your appointment is successful on: ${formattedDate} at ${slotDetails.time}`);
    };

    useEffect(() => {
        fetchDocInfo();
    }, [docId]);

    useEffect(() => {
        if (docInfo) {
            getAvailableSlots();
        }
    }, [docInfo]);

    return (
        docInfo && (
            <>
                <Header />
                <div>
                    <Row className="p-5 d-flex">
                        <Col sm={12} md={2} className="border shadow">
                            <img className="img-fluid p-2" src={docInfo.image} alt={docInfo.name} />
                        </Col>
                        <Col sm={12} md={10} className="border border-1 shadow rounded-3">
                            <div className="p-2">
                                <p style={{ fontWeight: 'bold' }}>{docInfo.name}</p>
                                <div className="d-flex">
                                    <p style={{ fontSize: '15px' }}>
                                        {docInfo.degree} - {docInfo.speciality}
                                    </p>
                                    <button className="ms-2 btn border rounded-5 py-1 px-2">
                                        {docInfo.experience}
                                    </button>
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold', fontSize: '16px' }}>About</p>
                                    <p style={{ fontSize: '15px' }}>{docInfo.about}</p>
                                </div>
                                <p style={{ fontWeight: 'bold', fontSize: '15px' }}>
                                    Appointment Fee: <span>${docInfo.fees}</span>
                                </p>
                            </div>
                        </Col>
                        <div className="mt-4">
                            <h4>Booking Slots</h4>
                            <Row className="d-flex gap-3">
                                {docSlots.map((item, index) => (
                                    <Col
                                        key={index}
                                        onClick={() => {
                                            setSlotIndex(index);
                                            setSlotDetails({ ...slotDetails, date: item[0]?.datetime });
                                        }}
                                        className={`border rounded p-3 shadow text-center ${
                                            slotIndex === index ? 'bg-primary text-white' : 'border border-2'
                                        }`}
                                        style={{ maxWidth: '120px', cursor: 'pointer' }}
                                    >
                                        <p style={{ fontWeight: 'bold' }}>
                                            {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                                        </p>
                                        <p>{item[0] && item[0].datetime.getDate()}</p>
                                    </Col>
                                ))}
                            </Row>
                            <div className="mt-4">
                                <h4>Available Time Slots</h4>
                                <div className="d-flex flex-wrap gap-2">
                                    {docSlots[slotIndex]?.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSlotDetails({ ...slotDetails, time: item.time })}
                                            className={`cursor-pointer py-1 btn rounded border ${
                                                slotDetails.time === item.time
                                                    ? 'bg-primary text-white'
                                                    : 'border border-2'
                                            }`}
                                        >
                                            {item.time.toLowerCase()}
                                        </button>
                                    ))}
                                </div>
                                <button onClick={bookAppointment} className="btn btn-success mt-4 p-2 rounded-4">
                                    Book an Appointment
                                </button>
                            </div>
                            <Relativedoctors docId={docId} speciality={docInfo.speciality} />
                        </div>
                    </Row>
                </div>
            </>
        )
    );
}

export default Appointment;
