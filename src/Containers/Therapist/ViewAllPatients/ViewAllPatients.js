import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import * as therapistProfileActions from "../store/TherapistActions";
import * as patientProfileActions from "../../Patient/store/PatientActions"

const ViewAllPatients = (props) => {

    const id = JSON.parse(localStorage.getItem("auth"))?.id

    let loaded=false;

    let therapistAppointments=[]
    let allPatientsData=[]
    useEffect(()=>{
        if(!loaded){
            props.getAllAppointments().then((data)=>{
                therapistAppointments=data.payload.filter((x)=> id===x.therapistId)
                therapistAppointments.map((data)=>{
                    props.getProfileData({id:data.patientId}).then((data)=>{
                        allPatientsData.push(data.payload)
                    })
                })
            })
            loaded=true
        }
    },[loaded])
    return (

        <div>

        </div>
    );
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAllAppointments: () => dispatch(therapistProfileActions.getAllAppointments()),
        getProfileData: (data) => dispatch(patientProfileActions.getProfileData(data)),


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewAllPatients);
