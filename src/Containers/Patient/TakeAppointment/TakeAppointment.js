import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import './TakeAppointment.css';

const TakeAppointment = (props) => {

    return (
        <div style={{paddingTop:"4em"}}>
     <form>
         <label>
             <fieldset>
                 <legend>For Take An Appointment</legend>

                 <div >

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
                     <label> Email
                         <input type="radio" name="Confirmation requested by" value="email" checked/>

                     </label>
                     <label>  Phone call
                         <input type="radio" name="Confirmation requested by" value="phone"/>

                     </label>
                 </div>
                 <div >
                     <input type="text" name="_gotcha" placeholder="message"  />
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
