import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import OtpInput from "otp-input-react";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { toast, Toaster } from "react-hot-toast";
import { FiX } from 'react-icons/fi';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select'; 
import {Helmet} from 'react-helmet';


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

const getRelatedOptionsData = (selectedValue) => {
    const data = {
      BAN: ["Mysore", "Coorg", "Ooty", "No"],
      BNDVG: ["Marble rocks Jabalpur", "Kanha", "Khajuraho", "No"],
      CRT: ["Nainital", "Sattal", "Pangod", "No"],
      KAB: ["Mysore", "Coorg", "No"],
      PEN: ["Tadoba", "Ramtek temple", "Nagzira wildlife sanctuary", "NO"],
      RTR: ["Jaipur", "Jalana", "Udaipur", "Jailsalmer", "No"],
    };
    return data[selectedValue] || [];
  };

const BookingForm = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [relatedOptions, setRelatedOptions] = useState([]);
  const [nearestPlaces, setNearestPlaces] = useState([]);

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
    addNearestPlace:[],
    date: '',
    adults: '',
    childrens:'',
    duration: '',
    callbackTime: '',
    queries: '',
  });

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 30);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'destination') {
      const selectedValue = value;
      const relatedOptionsData = getRelatedOptionsData(selectedValue);
      setRelatedOptions(relatedOptionsData);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: selectedValue,
        addNearestPlace: [],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const handleNearestPlacesChange = (selectedOptions) => {
  const places = selectedOptions ? selectedOptions.map((option) => option.value) : [];
  setNearestPlaces(places);
  setFormData((prevFormData) => ({
    ...prevFormData,
    addNearestPlace: places,
  }));
};

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const { name, email, country, destination,addNearestPlace, date, adults, childrens, duration, callbackTime, queries } = formData;
      const response = await fetch('https://formbackend.netlify.app/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, country, destination,addNearestPlace, date, adults, childrens, duration, callbackTime, queries, phoneNumber }),
      });

      const data = await response.json();
      console.log(data.message);
      toast.success("Booking Successfull")
      setFormData({
        name: '',
        email: '',
        country: '',
        destination: '',
        addNearestPlace:[],
        date: '',
        adults: '',
        childrens:'',
        duration: '',
        callbackTime: '',
        queries: '',
      });
      setPhoneNumber('')
      setNearestPlaces([])
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <>
    <Helmet>
      <title>Book Your Wildlife Adventure Now with Travel Unbounded</title>
      <meta name="description" content="Book now for an unforgettable journey into the heart of the wild. Don't miss out on thrilling safaris and breathtaking encounters" />
    </Helmet>
    <Toaster toastOptions={{ duration: 5000 }} />
    <div className="container-fluid app">
    <div onClick={handleGoBack} style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <FiX size={40}/>
    </div>
      <div className='book-img'>
      <img src='https://res.cloudinary.com/dl3vc69uw/image/upload/v1704695956/Untitled_design_ageva5_je6sjt.png' alt='' className='pug-mark' />
      </div>
      <h2 className='text-center input-text'>Book Your Tour</h2>
      <p className='text-center input-text mb-4'>Game drives/Safari-zones subject to availability<br/> <span>Recommend to plan a travel post 30 days</span></p>
      <form onSubmit={handleSubmit}>
        <div className='container'>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Name*'
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
                placeholder='Email*'
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
                placeholder='Country Name*'
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
              <option value="" disabled>Select Destination*</option>
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
          <div className="form-group mb-3">
          <Select
            isMulti
            options={relatedOptions.map((option, index) => ({ value: option, label: option }))}
            value={nearestPlaces.map((place) => ({ value: place, label: place }))}
            onChange={(selectedOptions) => handleNearestPlacesChange(selectedOptions)}
            placeholder="Do you want to visit nearest places?"
          />
        </div>
              <div className="form-group mt-3 mb-3">
              <input
                type="number"
                className="form-control input-text"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                placeholder='Number of adults*'
                required
              />
            </div>
            </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
          <div className="form-group mb-3">
              <input
                type="number"
                className="form-control input-text"
                name="childrens"
                value={formData.childrens}
                onChange={handleChange}
                placeholder='Number of children (below 9years)*'
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control input-text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder='Duration of stay/No.of nights*'
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
                placeholder="select Date*"
                //dateFormat='dd/MM/YYYY'
                //dayClassName={(date) => (isBlockedDate(date) ? 'blocked-date' : '')}
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
                placeholder='Flexible time to reach out to you*'
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
                rows={3}
              />
            </div>
            </div>
          <div className='col-12 col-md-4 col-lg-4 col-xl-4'>
            <div className='form-group input-text mb-3'>
              <PhoneInput
                defaultCountry="IN"
                value={phoneNumber}
                placeholder='Enter Contact Number*'
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
        </div>
        </form>
        </div>
    </>
  );
};

export default BookingForm;
