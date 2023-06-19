// BookingForm.js

import React, { useState } from 'react';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    requirements: ''
  });

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission - send data to backend or API
    console.log('Booking Submitted:', {
      selectedService,
      selectedDate,
      selectedTime,
      formData
    });
    // Reset form fields
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      requirements: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlForm="service">Select a Service:</label>
        <select id="service" value={selectedService} onChange={handleServiceChange}>
          <option value="">-- Select Service --</option>
          <option value="carpentry">Carpentry</option>
          <option value="cleaning">Cleaning</option>
          <option value="plumbing">Plumbing</option>
          <option value="painting">Painting</option>
        </select>
      </div>
      <div>
        <label htmlForm="date">Select a Date:</label>
        <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
      </div>
      <div>
        <label htmlForm="time">Select a Time:</label>
        <input type="time" id="time" value={selectedTime} onChange={handleTimeChange} />
      </div>
      <div>
        <label htmlForm="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlForm="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlForm="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlForm="requirements">Requirements:</label>
        <textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Booking;
