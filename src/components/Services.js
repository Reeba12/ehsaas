import React from 'react'
import familyimg from '../images/family.png'
import educationimg from '../images/education.png'
import spoonimg from '../images/spoon.png'
import medicalimg from '../images/medical.png'
const Services = () => {
    return (
        <>
    <div className="services" >
        <div className="container d-flex square border bg-primary">
         <div className="row p-5 d-flex square border text-white" >
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center" >
              <img src={spoonimg} width="50px" height="50px" className="center"/><br/>
              <h2>125,000</h2><br/>
              <p>DAILY DASTAKHAN <b>(MONTHLY)</b></p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center" >
             <img src={familyimg} width="50px" height="50px" className="center"/><br/>

             <h2 style={{color: 'white' }}>7,500</h2><br/>
             <p>FAMILY ADOPTION <b>(MONTHLY)</b></p>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
             <img src={medicalimg} width="50px" height="50px" className="center"/><br/>
             <h2 style={{color: 'white'}}>43,749</h2><br/>
             <p>MEDICAL EXPENSE<b> (MONTHLY)</b></p>
         </div>
         <div className="col-lg-3 col-md-6 col-sm-6 col-12 text-center">
             <img src={educationimg} width="50px" height="50px" className=""/><br/>
             <h2 style={{color: 'white'}}>180,000</h2><br/>
             <p> EDUCATION EXPENSE <b>(MONTHLY)</b></p>
         </div>
         </div>
        </div>  
   </div>

        </>
    )
}

export default Services
