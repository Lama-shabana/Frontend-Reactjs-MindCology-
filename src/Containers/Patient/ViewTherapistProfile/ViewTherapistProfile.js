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
import {useToasts} from "react-toast-notifications";
import {useHistory} from "react-router-dom";

const ViewTherapistProfile = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)


    const userData = JSON.parse(localStorage.getItem("auth"))

    const therapistId = props.props.match.params.id;

    let dataLoaded = false;
    useEffect(() => {
        if (dataLoaded === false) {
            props.getProfileData({id: therapistId}).then((data) => {
                setTherapistInfo(data.payload)
                localStorage.setItem('visitedTherapist', JSON.stringify(data.payload))
                console.log(data.payload, "THERAPIST DATA")
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
                    setAppointmentPresent(true)
                    setAppointmentData(data.payload)
                }
            })
            checked = true
        }

    }, [])

    const {addToast} = useToasts()

    const checkDateBeforeAppointment = () => {
        if (appointmentData) {

            // Thu-Jun-10-2021 at 13:00 APPOINTMENT
            // Sat Jun 12 2021 18:37:16 GMT+0300 (Eastern European Summer Time)
            // console.log(appointmentData.date+" at "+appointmentData.time,"APPOINTMENT")
            let splitDate = Date().toLocaleString().split(" ");
            let manipulatedDate = splitDate[0] + "-" + splitDate[1] + "-" + splitDate[2] + "-" + splitDate[3];
            let manipulatedTime = splitDate[4];


            manipulatedTime = manipulatedTime.split(":")[0] + ":" + manipulatedTime.split(":")[1]

            let correctTime = true;
            let correctDate = true;

            if (!manipulatedDate.includes(appointmentData.date)) {
                correctDate = false;
            }
            if (manipulatedTime.split(":")[0] === appointmentData.time.split(":")[0]) {
                if (!(Math.abs(parseInt(manipulatedTime.split(":")[1]) - parseInt(appointmentData.time.split(":")[1])) <= 15)) {
                    correctTime = false
                }
            }
            console.log(manipulatedTime, appointmentData.time, Math.abs(parseInt(manipulatedTime.split(":")[1]) - parseInt(appointmentData.time.split(":")[1])), "CALC")

            if (correctTime && correctDate) {
                return true
            } else return false;

            // console.log(manipulatedTime.split(":")[0],appointmentData.time.split(":")[0],"TIME")
            // console.log(manipulatedDate,"manipulatedDate")
            // console.log(manipulatedTime,"manipulatedTime")
            //
            // console.log(Date().toLocaleString(),"CURRENT")
        }
    }
    let test = "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
    let history=useHistory();
    return (
        <div className={classes.form}>
            {console.log(props,"IDD")}
            {therapistInfo ?
                <div className="p-grid">
                    {console.log(therapistInfo.imagePath, "PATH")}

                    <div className="p-col-2"/>

                    {appointmentPresent ?
                        <div className="p-col-10">
                            <Button style={{backgroundColor: "#a474b7"}}
                                    onClick={() => {
                                        if (checkDateBeforeAppointment()) {
                                            // props.history.push("/video/"+appointmentData.meetingID+"/"+appointmentData.password+"/"+userData.firstName+" "+userData.lastName)
                                        } else {

                                        }
                                    }}
                                    label={"Please click here to enter your appointment on " + appointmentData.date + " at " + appointmentData.time}
                                    icon="pi pi-calendar-plus"/>
                        </div>
                        : null}


                    <div className="p-col-4">

                        <img
                            src="https://drive.google.com/file/d/1QKwlxP6GDRycRiq7NJ-wshy5a4tIyrop/view?usp=sharing"
                            // src={therapistInfo.imagePath}
                            alt="new"
                            width={290}

                        />
                        {/*<img*/}
                        {/*    width={290}*/}
                        {/*    // style={{width: "22em", height: "16em", paddingLeft: "1em"}}*/}
                        {/*    src={therapistInfo.imagePath}/>*/}
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
                                            history.push("/patientDashboard/takeAppointment")
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
