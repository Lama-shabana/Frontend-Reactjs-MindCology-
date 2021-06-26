import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import Counselling from "../../../assets/schedule.jpg"
import * as profileActions from "../store/TherapistActions";
import {useHistory} from "react-router-dom";
import {Button} from "primereact/button";
import {useToasts} from "react-toast-notifications";


const TherapistDashboard = (props) => {
    const userData = JSON.parse(localStorage.getItem("auth"))
    let dataLoaded = false;

    let history = useHistory();
    const {addToast} = useToasts()

    const [appointments, setAppointments] = useState(null)

    useEffect(() => {
        if (dataLoaded === false) {
            props.getAllAppointments().then((data) => {
                let temp = []
                data.payload?.map((current) => {
                    if (current.therapistId === userData.id) {
                        console.log(current, "pushed")
                        temp.push(current)
                    }
                })
                if (temp.length > 0) {
                    setAppointments(temp)

                }
            })
            dataLoaded = true;

        }
    }, [dataLoaded])


    const checkDateBeforeAppointment = (appointment) => {
        if (appointment) {
            // Thu-Jun-10-2021 at 13:00 APPOINTMENT
            // Sat Jun 12 2021 18:37:16 GMT+0300 (Eastern European Summer Time)
            // console.log(appointmentData.date+" at "+appointmentData.time,"APPOINTMENT")
            let splitDate = Date().toLocaleString().split(" ");
            let manipulatedDate = splitDate[0] + "-" + splitDate[1] + "-" + splitDate[2] + "-" + splitDate[3];
            let manipulatedTime = splitDate[4];


            manipulatedTime = manipulatedTime.split(":")[0] + ":" + manipulatedTime.split(":")[1]

            let correctTime = true;
            let correctDate = true;

            if (!manipulatedDate.includes(appointment.date)) {
                correctDate = false;
            }
            if (manipulatedTime.split(":")[0] === appointment.time.split(":")[0]) {
                if (!(Math.abs(parseInt(manipulatedTime.split(":")[1]) - parseInt(appointment.time.split(":")[1])) <= 15)) {
                    correctTime = false
                }
            }
            if (correctTime && correctDate) {
                return true
            } else return false;

        }
    }


    return (

        <div className="p-grid">


            <h1 style={{marginTop: "2.5em", color: "#25032f", fontSize: "2em"}}>
                <blockquote>Always Remember that for each patient you see, you may be the only person in their life
                    capable of both hearing and holding their pain. If that isn't sacred, we don't know what is
                    <i className="pi pi-moon" style={{'fontSize': '1em', marginLeft: "0.25em", marginTop: "0.5em"}}/>

                </blockquote>
            </h1>

            <div className="p-col-4">
                <img style={{marginRight: "4%"}} src={Counselling}
                     width={480}
                     alt="logo"/>

            </div>

            <div className="p-col-8" style={{marginTop: "3%"}}
            >

                {appointments ?
                    <div>
                        <h1 style={{
                            textAlign: "center",
                            color: "#471b53",
                            fontSize: "2.5em",
                            marginTop:"2em"
                        }}>Appointments</h1>

                        {
                            appointments.map((appointment) => {
                                return <div>
                                    <Button
                                        style={{marginLeft: "2em",  marginBottom: "1em", backgroundColor: "#a474b7"}}
                                        onClick={() => {
                                            console.log("/video/" + appointment.meetingID + "/" + appointment.password + "/" + userData.firstName + " " + userData.lastName,"PATH")

                                            // history.push("/video/" + appointment.meetingID + "/" + appointment.password + "/" + "TEST" + " " + "NEW")
                                            history.push("/video/" + appointment.meetingID + "/" + appointment.password + "/" + userData.firstName + " " + userData.lastName)

                                            // if (checkDateBeforeAppointment(appointment)) {
                                            //     history.push("/video/" + appointment.meetingID + "/" + appointment.password + "/" + userData.firstName + " " + userData.lastName)
                                            // } else {
                                            //     addToast("The meeting isn't currently available", {
                                            //         appearance: 'error',
                                            //         autoDismiss: true,
                                            //     })
                                            // }
                                        }}
                                        label={"Please click here to enter your appointment on " + appointment.date + " at " + appointment.time}
                                        icon="pi pi-calendar-plus"/>

                                    <Button style={{backgroundColor: "#ad2525",  marginBottom: "1em", marginLeft: "2%"}}
                                            onClick={() => {
                                                console.log(appointment.therapistId.toString().concat(appointment.patientId), "sent")
                                                props.deleteAppointment({id: parseInt(appointment.therapistId.toString().concat(appointment.patientId))}).then(() => {
                                                    window.location.reload();
                                                })
                                            }}
                                            label="Delete Appointment"
                                            icon="pi pi-calendar-minus"/>
                                </div>

                            })
                        }

                    </div>


                    : null}
            </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        getAllAppointments: (data) => dispatch(profileActions.getAllAppointments(data)),
        deleteAppointment: (data) => dispatch(profileActions.deleteAppointment(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TherapistDashboard);
