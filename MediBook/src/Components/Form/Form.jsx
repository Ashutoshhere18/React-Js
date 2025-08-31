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
    
  });
 
  const [Submit,SetSubmit]=useState([])
  const handleInput = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]:  value,
    });
  };
  
  const HandleSubmit=(e)=>{
    e.preventDefault();
  const isEmpty=Object.values(patientData).some((value)=>value.trim()==="");

  if(isEmpty){
   alert("All fields are required!!")
  }
  else{
    SetSubmit([...Submit,patientData]);
  }
  }


  return (

   <div className="main">
   
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
        <input type="tel" name="phone" value={patientData.phone} maxLength={"10"} onChange={handleInput} />

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


        <button type="submit" onClick={HandleSubmit}>Book Appointment</button>
      </form>


      
    </div>


    <div className="display">
      {
       Submit.map((Form,index)=><div key={index}> 
      <p>{Form.name}</p>
      <p>{Form.age}</p>
      <p>{Form.gender}</p>
      <p>{Form.phone}</p>
      <p>{Form.email}</p>
      <p>{Form.address}</p>
      <p>{Form.speciality}</p>
      <p>{Form.doctor}</p>
      <p>{Form.date}</p>
      <p>{Form.time}</p>
      <p>{Form.type}</p>
      <p>{Form.reason}</p>
    </div>)
      }
    </div>
   </div>


   
  );
}
