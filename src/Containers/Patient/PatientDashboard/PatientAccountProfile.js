import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import '../PatientDashboard/Profile.css';
import '../PatientDashboard/TakeAppointment.css';
import myAccount from '../../../assets/images.png';
const PatientAccountProfile = (props) => {


    return (
       <div>
       <form>
           <div >


               <h4 >My Profile </h4>
               <img src={myAccount} />
             <p> Diala khalil</p>

               <div>
                   <div >
                       <ul className="profile-info">
                           <li>
                               <span className="title">Username: </span>
                               <span className="text"><a href="#">diala-khalil</a></span>
                           </li>
                           <li>
                               <span className="title">Age: </span>
                               <span className="text"><a href="#">32</a></span>
                           </li>
                           <li>
                               <span className="title">Phone:</span>
                               <span className="text"><a href="#">770-889-6484</a></span>
                           </li>
                           <li>
                               <span className="title">Email:</span>
                               <span className="text"><a href="#">cristinagroves@example.com</a></span>
                           </li>
                           <li>
                               <span className="title">County: </span>
                               <span className="text"><a href="#">Palestine</a></span>
                           </li>
                           <li>
                               <span className="title">Gender:</span>
                               <span className="text"><a href="#">Female</a></span>
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
