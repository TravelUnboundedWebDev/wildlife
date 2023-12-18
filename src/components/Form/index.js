import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import { FaMapMarked } from "react-icons/fa";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import OtpInput from "otp-input-react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { toast, Toaster } from "react-hot-toast";
import { FiX } from 'react-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';


const firebaseConfig = {
  apiKey: "AIzaSyB4BPMHKw0OXM2PhQX9NcT25lDBWpRpIPQ",
  authDomain: "phone-auth-d0a8d.firebaseapp.com",
  projectId: "phone-auth-d0a8d",
  storageBucket: "phone-auth-d0a8d.appspot.com",
  messagingSenderId: "309252587015",
  appId: "1:309252587015:web:3f9dc2505965e66269b4a2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



const BookingForm = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    try {
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      const confirmation = await firebase.auth().signInWithPhoneNumber(`+${phoneNumber}`, appVerifier);
      setConfirmationResult(confirmation);
      toast.success('OTP sent successfully');
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      await confirmationResult.confirm(otp);
      toast.success('OTP Verified Successfully')
      setOtp('')
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast.error('Please Enter Correct OTP');
    }
  };
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    destination: '',
    date: '',
    adults: '',
    childrens:'',
    duration: '',
    callbackTime: '',
    queries: '',
  });

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 30);

  const isBlockedDate = (date) => {
    return date < minDate;
  };
  
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const { name, email, country, destination, date, adults, childrens, duration, callbackTime, queries } = formData;
      const response = await fetch('https://formbackend.netlify.app/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, country, destination, date, adults, childrens, duration, callbackTime, queries, phoneNumber }),
      });

      const data = await response.json();
      console.log(data.message);
      toast.success("Booking Successfull")
      setFormData({
        name: '',
        email: '',
        country: '',
        destination: '',
        time:'',
        date: '',
        adults: '',
        childrens:'',
        duration: '',
        callbackTime: '',
        queries: '',
      });
      setPhoneNumber('')
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
    <Toaster toastOptions={{ duration: 5000 }} />
    <div className="container app">
    <div onClick={handleGoBack} style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <FiX size={40}/>
        </div>
      <div className='book-img'>
      <FaMapMarked size={40} />
      </div>
      <h2 className='text-center input-text'>Book Your Tour</h2>
      <p className='text-center input-text mb-5'>Mininum 30 days required to book Game Drives/Safaris</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name'
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control input-text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder='Country Name'
                required
              />
            </div>
            <div className="form-group mb-3">
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="form-control input-text"
              required
            >
              <option value="" disabled>Select Destination</option>
              <option value="BAN">Bandipur</option>
              <option value="BNDVG">Bandhavgarh</option>
              <option value="CRT">Corbett</option>
              <option value="KAB">Kabini</option>
              <option value="KEN">Kenya</option>
              <option value="PEN">Pench</option>
              <option value="RTR">Ranthambore</option>
              <option value="TAN">Tanzania</option>
            </select>
            </div>
              <div className="form-group mt-3 mb-3">
              <input
                type="number"
                className="form-control input-text"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                placeholder='Number of adults'
                required
              />
            </div>
            <div className="form-group mt-3 mb-3">
              <input
                type="number"
                className="form-control input-text"
                name="childrens"
                value={formData.childrens}
                onChange={handleChange}
                placeholder='Number of children (below 9years)'
                required
              />
            </div>
            </div>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder='Duration of stay/No.of nights'
                required
              />
            </div>
            <div className="form-group input-text mb-3">
              <input
                type='date'
                name='date'
                id='date'
                value={formData.date}
                min={minDate.toISOString().split('T')[0]}
                onChange={handleChange}
                placeholder="Select a date"
                dateFormat='dd/MM/YYYY'
                dayClassName={(date) => (isBlockedDate(date) ? 'blocked-date' : '')}
                required
              />
            </div>
            
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                name="callbackTime"
                value={formData.callbackTime}
                onChange={handleChange}
                placeholder='Flexible time to reach out to you'
                required
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control input-text"
                name="queries"
                value={formData.queries}
                onChange={handleChange}
                placeholder='Message'
                rows={5}
              />
            </div>
            </div>
          <div className='col-md-4'>
            <div className='form-group input-text mb-3'>
              <PhoneInput
                inputProps={{
                  type: 'text',
                }}
                defaultCountry="IN"
                value={phoneNumber}
                placeholder='Enter Contact Number'
                onChange={(value) => setPhoneNumber(value)} 
                required
              />
            </div>
            <div className='form-group mb-3'>
              <button type='button' onClick={handleSendOTP} className='btn btn-primary input-text mb-3'>
                Send OTP
              </button>
            </div>
            <div className='form-group mb-3'>
              <div id="recaptcha-container">
              </div>
            </div>
            
            <div className='form-group mb-3 mt-3 d-flex flex-column justify-content-center'>
            <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  required
                ></OtpInput>
            <button type='button' onClick={handleVerifyOTP} className='btn btn-primary input-text mt-3'>
              Verify OTP
            </button>
          </div>
          </div>
        </div>
      <div className='d-flex flex-row justify-content-center'>
          <button type="submit" className="btn btn-primary input-text">
          Submit
          </button>
        </div>
        </form>
        </div>
    </>
  );
};

export default BookingForm;
