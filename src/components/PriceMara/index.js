import React from 'react';
import './index.css';

const PriceMara = () => {
    return (
        <div> <div className='container mt-5'>
        <div className='row'>
        <div className='col-12 col-md-12 col-xl-12 col-lg-12'>
        <h2 className='package-head'>NETT RATES VALID FOR AUGUST – USING 1 VEHICLE</h2>
        <table >
          <thead>
            <tr>
              <th>Per Adult Sharing</th>
              <th>Per Adult Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Each of 2 pax sharing</td>
              <td>US $2650</td>
            </tr>
            <tr>
              <td>Each of 3 pax sharing</td>
              <td>US $2440</td>
            </tr>
            <tr>
              <td>Each of 4 pax sharing</td>
              <td>US $2330</td>
            </tr>
            <tr>
              <td>Each of 5 pax sharing</td>
              <td>US $2270</td>
            </tr>
            <tr>
              <td>Each of 6 pax sharing</td>
              <td>US $2220</td>
            </tr>
            <tr>
              <td>Each of 7 pax sharing</td>
              <td>US $2190</td>
            </tr>
            <tr>
              <td>Single room supplement</td>
              <td>US $690</td>
            </tr>
            <tr>
              <td>Guests booking as a single traveler</td>
              <td>US $2650</td>
            </tr>
          </tbody>
        </table>
        </div>
         </div>
        </div>
        </div>
    );
}

export default PriceMara;
