import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

import Counselling from "../../../assets/schedule.jpg"
import * as profileActions from "../store/TherapistActions";
import {useHistory} from "react-router-dom";
import {Button} from "primereact/button";
import {useToasts} from "react-toast-notifications";


const ArabicTherapistDashboard = (props) => {
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
                <blockquote>تذكر دائمًا أنه بالنسبة لكل مريض تراه ، قد تكون الشخص الوحيد في حياته
                    قادر على سماع آلامهم وإمساكها. إذا لم يكن هذا مقدسًا ، فنحن لا نعرف ما هو
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
                        }}>المواعيد</h1>

                        {
                            appointments.map((appointment) => {
                                return <div>
                                    <Button
                                        style={{marginLeft: "2em",  marginBottom: "1em", backgroundColor: "#a474b7"}}
                                        onClick={() => {
                                            if (checkDateBeforeAppointment(appointment)) {
                                                history.push("/video/" + appointment.meetingID + "/" + appointment.password + "/" + userData.firstName + " " + userData.lastName)
                                            } else {
                                                addToast("الاجتماع غير متاح حاليًا", {
                                                    appearance: 'error',
                                                    autoDismiss: true,
                                                })
                                            }
                                        }}
                                        label={"الرجاء النقر هنا لإدخال موعدك في " + appointment.date + " في " + appointment.time}
                                        icon="pi pi-calendar-plus"/>

                                    <Button style={{backgroundColor: "#ad2525",  marginBottom: "1em", marginLeft: "2%"}}
                                            onClick={() => {
                                                console.log(appointment.therapistId.toString().concat(appointment.patientId), "ارسال")
                                                props.deleteAppointment({id: parseInt(appointment.therapistId.toString().concat(appointment.patientId))}).then(() => {
                                                    window.location.reload();
                                                })
                                            }}
                                            label="حذف الموعد"
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
export default connect(mapStateToProps, mapDispatchToProps)(ArabicTherapistDashboard);
