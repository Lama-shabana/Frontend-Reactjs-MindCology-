import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import '../PatientDashboard/TakeAppointment.css';

const TakeAppointment = (props) => {


    return (
        <div>
     <form>
         <label>
             <fieldset>
                 <legend>For take an appointment</legend>
                 <label>
                     Name
                     <input type="text" name="name" required/>
                 </label>
                 <div >
                     <label>
                         Email address
                         <input type="email" name="email" required/>
                     </label>
                     <label>
                         Phone number
                         <input type="tel" name="phone"/>
                     </label>
                     <label>
                        Time
                         <input type="time" name="time"/>
                     </label>
                     <label>
                        Date
                         <input type="date" name="Date"/>
                     </label>
                 </div>
                 <p>Confirmation requested by</p>
                 <div >
                     <label>
                         <input type="radio" name="Confirmation requested by" value="email" checked/>
                             Email
                     </label>
                     <label>
                         <input type="radio" name="Confirmation requested by" value="phone"/>
                             Phone call
                     </label>
                 </div>
                 <div >
                     <input type="text" name="_gotcha" value="message" />
                     <input type="submit" value="Submit request"/>
                 </div>
             </fieldset>

         </label>

         </form>
        </div>

    );
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TakeAppointment);
