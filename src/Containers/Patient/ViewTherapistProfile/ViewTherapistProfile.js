import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from './ViewTherapistProfile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import profile from "../assets/profileTesting.jpg";
import {Button} from "primereact/button";
import * as profileActions from "../../Therapist/store/TherapistActions";
import VideoCalls from "../../VideoCalls/VideoCalls";

const ViewTherapistProfile = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)


    const userData = JSON.parse(localStorage.getItem("auth"))

    const therapistId = props.match.params.id;

    let dataLoaded = false;
    useEffect(() => {
        if (dataLoaded === false) {
            props.getProfileData({id: therapistId}).then((data) => {
                setTherapistInfo(data.payload)
                localStorage.setItem('visitedTherapist', JSON.stringify(data.payload))
            })
            dataLoaded = true;
        }
    }, [dataLoaded])

    let checked = false;
    const [appointmentPresent, setAppointmentPresent] = useState(false);
    const [appointmentData, setAppointmentData] = useState(false);


    useEffect(() => {
        if (checked === false) {

            props.getAppointment({id: parseInt(therapistId + userData.id)}).then((data) => {
                if (data.payload.id) {
                    console.log(data, "RECC")
                    setAppointmentPresent(true)
                    setAppointmentData(data.payload)
                }
            })
            checked = true
        }

    }, [])
    return (
        <div className={classes.form}>
            {console.log()}
            {therapistInfo ?
                <div className="p-grid">
                    <div className="p-col-2"/>

                    {appointmentPresent?
                        <div className="p-col-10">
                            <Button style={{backgroundColor: "#a474b7"}}
                                    onClick={() => {
                                        props.history.push("/video/"+appointmentData.meetingID+"/"+appointmentData.password+"/"+userData.firstName+" "+userData.lastName)
                                    }} label={"Please click here to enter your appointment on "+appointmentData.date+" at "+appointmentData.time} icon="pi pi-calendar-plus"/>
                        </div>
                        :null}



                    <div className="p-col-4">
                        <img
                            width={290}
                            // style={{width: "22em", height: "16em", paddingLeft: "1em"}}
                            src={profile}/>
                    </div>

                    <div className="p-col-8">
                        <div className="p-grid" style={{paddingLeft: "8em"}}>
                            <div className="p-col-12">
                                <h2 style={{fontFamily: "Arial,helvetica"}}>
                                    {therapistInfo.firstName} {therapistInfo.lastName}
                                </h2>
                                <h7 style={{fontFamily: "courier,helvetica"}}>
                                    {therapistInfo.specialization}
                                </h7>

                            </div>
                            <div className="p-col-12">
                                <hr style={{margin: "0"}}/>
                            </div>
                            <div className="p-col-12">
                                <h8 style={{fontFamily: "arial,helvetica"}}> {therapistInfo.educationLevel}</h8>
                                <p style={{fontFamily: "sans-serif"}}>
                                    {therapistInfo.description}

                                </p>

                                <Button label=" Message " icon="pi pi-comments"/>
                                <span> </span>
                                <Button style={{backgroundColor: "#a474b7"}}
                                        onClick={() => {
                                            props.history.push("/patientDashboard/takeAppointment")
                                        }} label=" Make Appointment " icon="pi pi-calendar-plus"/>
                            </div>
                        </div>
                    </div>
                    <div className="p-col-12">
                        <p><i style={{color: "purple"}} className="pi pi-envelope"/> {therapistInfo.email}</p>
                        <p><i style={{color: "purple"}} className="pi pi-phone"/> {therapistInfo.phoneNumber}</p>

                    </div>
                    {/*<div className="p-col-12">*/}
                    {/*</div>*/}


                </div>

                : null} </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getProfileData: (data) => dispatch(profileActions.getProfileData(data)),
        getAppointment: (data) => dispatch(profileActions.getAppointment(data)),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapistProfile);
