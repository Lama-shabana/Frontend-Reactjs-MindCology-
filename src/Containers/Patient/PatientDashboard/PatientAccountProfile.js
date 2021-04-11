import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import myAccount from '../../../assets/images.png';
import EditProfile from '../PatientDashboard/EditProfile';
import './Profile.css';
import Button from "react-bootstrap/Button";
import classes from "./Profile.css";
import './TakeAppointment.css';
const PatientAccountProfile = (props) => {
    return (
       <div>
       <form>
           <div>
               <Button className="edit-profile" onClick={()=> props.history.push("/patientDashboard/patientInfo/editProfile")}>Edit Profile </Button>
               <h4 >My Profile </h4>
               <img src={myAccount} />
             <p className={classes.profile}> Diala khalil</p>

               <div>
                   <div className={classes.profile}>
                       <ul className="profile-info">
                           <li>
                               <span className={classes.profile}>Username: </span>
                               <span className={classes.profile}><a href="#">diala-kalil</a></span>
                           </li>
                           <li>
                               <span className={classes.profile}>Age: </span>
                               <span className={classes.profile}><a href="#">32</a></span>
                           </li>
                           <li>
                               <span className={classes.profile}>Phone:</span>
                               <span className={classes.profile}><a href="#">770-889-6484</a></span>
                           </li>
                           <li>
                               <span className={classes.profile}>Email:</span>
                               <span className={classes.profile}><a href="#">cristinagroves@example.com</a></span>
                           </li>
                           <li>
                               <span className={classes.profile}>County: </span>
                               <span className={classes.profile}><a href="#">Palestine</a></span>
                           </li>
                           <li>
                               <span className={classes.profile}>Gender:</span>
                               <span className={classes.profile}><a href="#">Female</a></span>
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(PatientAccountProfile);
