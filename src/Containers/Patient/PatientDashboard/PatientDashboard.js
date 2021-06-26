import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Carousel} from 'primereact/carousel';
import {Button} from 'primereact/button';
import './CarouselDemo.css';
import * as therapistProfileActions from "../../Therapist/store/TherapistActions";
import * as profileActions from "../../Therapist/store/TherapistActions";
import {useHistory} from "react-router-dom";
import {useToasts} from "react-toast-notifications";
import {auth} from "../../Chatting/Firebase";
import firebase from "firebase";

const PatientDashboard = (props) => {

    const [therapistInfo, setTherapistInfo] = useState()
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const userData = JSON.parse(localStorage.getItem("auth"))

    let dataLoaded = false;

    let history = useHistory();

    const [appointment, setAppointment] = useState(null)
    useEffect(() => {
        if (dataLoaded === false) {
            props.getAllTherapists().then((data) => {
                setTherapistInfo(data.payload)
            })
            props.getAllAppointments().then((data) => {
                console.log(data.payload, "pay")

                data.payload?.map((current) => {
                    if (current.patientId === userData.id) {
                        setAppointment(current)
                    }
                })
            })
            dataLoaded = true;

        }
    }, [dataLoaded])

    const checkDateBeforeAppointment = () => {
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

    const {addToast} = useToasts()
    const therapistTemplate = (therapistInfo) => {
        return (
            <div className="therapist-item">
                <div className="therapist-item-content">
                    <div className="p-mb-3">
                        {/*< className="therapist-image" img src={}/>*/}
                        <span style={{backgroundColor: "powderblue"}}>{therapistInfo.username}</span>
                    </div>
                    <div>
                        <h4 className="p-mb-1">{therapistInfo.email}</h4>
                        <h6 className="p-mt-0 p-mb-3">{therapistInfo.specialization}</h6>
                        <span>{therapistInfo.description}</span>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2"/>
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2"/>
                            <Button icon="pi pi-send" className="p-button-help p-button-rounded"/>
                            <div className="box">
                                <Button label="View Profile" className="primaryBtn" icon="pi pi-chevron-right"
                                        style={{
                                            width: "12em",
                                            height: "3em",
                                            marginLeft: "1em",
                                            marginTop: "2em",
                                            background: "purple"
                                        }}
                                        onClick={() => history.push("/patientDashboard/viewTherapistProfile/" + therapistInfo.id)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div style={{paddingTop: "2em"}}>
            {console.log(userData,"Data")}
            <h1 style={{marginTop:"1em",color:"#25032f",fontSize:"2.5em",marginBottom:"1em"}}>
                <blockquote >You don’t have to struggle in silence. We are here to provide you with the mental
                    health
                    care you need
                    <i className="pi pi-sun" style={{'fontSize': '1em',marginLeft:"0.25em",marginTop:"0.5em"}}/>

                </blockquote>
            </h1>
            {appointment ?
                <div>
                    <Button style={{marginLeft:"20%",marginBottom:"1em",backgroundColor: "#a474b7"}}
                            onClick={() => {
                                console.log("/video/" + appointment.meetingID + "/" + appointment.password + "/" + userData.firstName + " " + userData.lastName,"PATH")
                                history.push("/video/" + appointment.meetingID + "/" + appointment.password + "/" + userData.firstName + " " + userData.lastName)


                                // if (checkDateBeforeAppointment()) {
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

                    <Button style={{marginLeft:"3%",marginBottom:"1em",backgroundColor: "#ad2525"}}
                            onClick={() => {
                                console.log(appointment.therapistId.toString().concat(appointment.patientId), "sent")
                                props.deleteAppointment({id: parseInt(appointment.therapistId.toString().concat(appointment.patientId))}).then(() => {
                                    window.location.reload();
                                })
                            }}
                            label="Delete Appointment"
                            icon="pi pi-calendar-minus"/>

                    {/*<Button style={{marginLeft:"3%",marginBottom:"1em",backgroundColor: "#3ba193"}}*/}
                    {/*        onClick={() => {*/}
                    {/*            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())*/}
                    {/*        }}*/}
                    {/*        label="Chatting"*/}
                    {/*        icon="pi pi-calendar-minus"/>*/}
                </div>


                : null}

            <div>
                <div className="therapist-demo">
                    <div className="card">
                        <Carousel value={therapistInfo}
                                  numVisible={3} numScroll={3}
                                  responsiveOptions={responsiveOptions}
                                  itemTemplate={therapistTemplate}
                                  header={<h5>Therapists</h5>}/>
                    </div>


                </div>
            </div>

        </div>

    );
}


const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        getAllTherapists: () => dispatch(therapistProfileActions.getAllTherapists()),
        getAllAppointments: (data) => dispatch(profileActions.getAllAppointments(data)),
        deleteAppointment: (data) => dispatch(profileActions.deleteAppointment(data)),

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientDashboard);
