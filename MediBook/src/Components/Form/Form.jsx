import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    speciality: "",
    doctor: "",
    date: "",
    time: "",
    type: "",
    reason: "",
    terms: false,
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setPatientData({
      ...patientData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="form-wrapper">
      <form className="appointment-form">
        <h3>Patient Information</h3>

        <label>Full Name</label>
        <input type="text" name="name" value={patientData.name} onChange={handleInput} />

        <label>Age</label>
        <input type="number" name="age" value={patientData.age} onChange={handleInput} />

        <label>Gender</label>
        <div className="radio-group">
          <label className="inline">
            <input type="radio" name="gender" value="Male" onChange={handleInput} /> Male
          </label>
          <label className="inline">
            <input type="radio" name="gender" value="Female" onChange={handleInput} /> Female
          </label>
        </div>

        <label>Contact No</label>
        <input type="tel" name="phone" value={patientData.phone} onChange={handleInput} />

        <label>Email Id</label>
        <input type="email" name="email" value={patientData.email} onChange={handleInput} />

        <label>Address</label>
        <textarea name="address" value={patientData.address} onChange={handleInput}></textarea>

        <h3>Appointment Details</h3>

        <label>Speciality</label>
        <select name="speciality" value={patientData.speciality} onChange={handleInput}>
          <option value="">Select...</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="General">General</option>
        </select>

        <label>Doctor's Name (if specific doctor is chosen)</label>
        <input type="text" name="doctor" value={patientData.doctor} onChange={handleInput} />

        <label>Preferred Date</label>
        <input type="date" name="date" value={patientData.date} onChange={handleInput} />

        <label>Preferred Time Slot</label>
        <input type="time" name="time" value={patientData.time} onChange={handleInput} />

        <label>Appointment Type</label>
        <select name="type" value={patientData.type} onChange={handleInput}>
          <option value="">Select...</option>
          <option value="Consultation">Consultation</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Emergency">Emergency</option>
          <option value="Health Checkup">Health Checkup</option>
        </select>

        <label>Reason for Visit</label>
        <textarea name="reason" value={patientData.reason} onChange={handleInput}></textarea>

        <div className="terms">
          <input
            type="checkbox"
            name="terms"
            checked={patientData.terms}
            onChange={handleInput}
          />
          <label>I agree to terms & privacy policy</label>
        </div>

        <button type="submit">Book Appointment</button>
      </form>

      {/* Display Data column */}

       <div className="details-card">
        <h3>Appointment Summary</h3>
        <p><strong>Name:</strong> {patientData.name}</p>
        <p><strong>Age:</strong> {patientData.age}</p>
        <p><strong>Gender:</strong> {patientData.gender}</p>
        <p><strong>Phone:</strong> {patientData.phone}</p>
        <p><strong>Email:</strong> {patientData.email}</p>
        <p><strong>Address:</strong> {patientData.address}</p>
        <p><strong>Speciality:</strong> {patientData.speciality}</p>
        <p><strong>Doctor:</strong> {patientData.doctor}</p>
        <p><strong>Date:</strong> {patientData.date}</p>
        <p><strong>Time:</strong> {patientData.time}</p>
        <p><strong>Type:</strong> {patientData.type}</p>
        <p><strong>Reason:</strong> {patientData.reason}</p>
        <p><strong>Terms Accepted:</strong> {patientData.terms ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
