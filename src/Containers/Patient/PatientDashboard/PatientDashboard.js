import React, {useState} from 'react';
import {connect} from "react-redux";
import LoggedInPatientTopbar from "../../../Components/LoggedInTopBar/LoggedInPatientTopbar";
import PatientAccountProfile from "./PatientAccountProfile";
import TakeAnAppointment from "./TakeAppointment";
import {ToastProvider} from "react-toast-notifications";

const PatientDashboard = (props) => {


    return (
        <div>

{/*<img  scr={pic}/>*/}

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
