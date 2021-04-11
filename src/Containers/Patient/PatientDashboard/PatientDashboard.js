import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import PatientAccountProfile from "./PatientAccountProfile";
import TakeAnAppointment from "./TakeAppointment";
import {ToastProvider} from "react-toast-notifications";
import classes from './patientDashboard.css';
const PatientDashboard = (props) => {


    return (
        <div>

            <h1>
                <blockquote >You don’t have to struggle in silence. We are here to provide you with the mental health care you need
                </blockquote>
            </h1>


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
export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);
