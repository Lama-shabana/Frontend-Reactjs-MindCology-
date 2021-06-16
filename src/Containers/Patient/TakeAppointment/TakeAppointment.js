import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from './TakeAppointment.module.css';
import {Dropdown} from "primereact/dropdown";
import {Button} from "primereact/button";
import appointment from "../assets/img.png";
import {useToasts} from "react-toast-notifications";
import * as profileActions from "../store/PatientActions";
import {useHistory} from "react-router-dom";
import * as therapistActions from "../../Therapist/store/TherapistActions";

const TakeAppointment = (props) => {
    const therapistData = JSON.parse(localStorage.getItem("visitedTherapist"));

    const therapistDateTime = {startTime: '8:00', endTime: "17:00", startDay: 0, endDay: 4}

    const [dateTimeReady, setDateTimeReady] = useState(false);
    const [allDays, setAllDays] = useState([
        {id: 0, name: "sat"},
        {id: 1, name: "sun"},
        {id: 2, name: "mon"},
        {id: 3, name: "tue"},
        {id: 4, name: "wed"},
        {id: 5, name: "thu"},
        {id: 6, name: "fri"},

    ])
    const userId = JSON.parse(localStorage.getItem("auth"))?.id

    const [availableDays, setAvailableDays] = useState([])
    const [availableHours, setAvailableHours] = useState([])


    const [selectedHour, setSelectedHour] = useState(null)
    const [selectedDay, setSelectedDay] = useState(null)

    useEffect(() => {
        if (!dateTimeReady) {
            for (let i = parseInt(therapistDateTime.startTime); i <= parseInt(therapistDateTime.endTime); i++) {
                if (!availableHours.find(x => x === (i + "00"))) {

                    availableHours.push(i + ":00")
                }
            }
            setDateTimeReady(true)


            var date = new Date();


            for (var x = 0; x < 30; ++x) {
                var d = date.getDate();
                date.setDate(d + 1);
                let withoutTime = date.toString().split(" ")
                if (allDays.find(x => x.name = withoutTime[0])) {
                    availableDays.push(withoutTime[0] + "-" + withoutTime[1] + "-" + withoutTime[2] + "-" + withoutTime[3])
                }
                // console.log(date,"HERE")
            }
        }
    }, [])
    const {addToast} = useToasts()

    let history=useHistory()
    useEffect(() => {




    }, [])
    function makeAppointment() {
        if (selectedHour && selectedDay) {
            let foundAppointment=false

            props.getAllAppointments().then((data) => {
                data.payload?.map((current) => {
                    if (current.patientId === userId) {
                    foundAppointment=true;
                    }
                })
                if(foundAppointment){
                    addToast("You already have an appointment.", {
                        appearance: 'error',
                        autoDismiss: true,
                    })
                }else {
                    props.createApppointment({
                        therapistId:therapistData.id,
                        patientId:userId,
                        meetingID: therapistData.id.toString().concat(userId),
                        password: userId.toString().concat(therapistData.id),
                        date: selectedDay,
                        time: selectedHour
                    }).then(()=>{
                        addToast("Appointment Successfully Created ", {
                            appearance: 'success',
                            autoDismiss: true,
                        })
                        history.push("/patientDashboard")

                    })
                }

            })




        } else addToast('Please fill all fields', {
            appearance: 'error',
            autoDismiss: true,
        })
    }

    return (
        <div className="p-grid">
            {console.log(availableDays, "DAYS")}
            <div className="p-col-7">
                <img src={appointment} className={classes.picture} width={600}/>
            </div>

            <div className="p-col-4" style={{marginTop: "10em"}}>
                <label className={classes.headerLabel}> Schedule Appointment
                    <i style={{marginLeft: "0.5em", fontSize: "2em", marginTop: "10px"}}
                       className="pi pi-calendar-plus"/>
                </label>

                <label className={classes.labels}>Select Suitable Date</label>

                {dateTimeReady ?
                    <Dropdown
                        className={classes.field}
                        value={selectedDay}
                        options={availableDays}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        placeholder="Date"
                        // className={classes.field}
                        // style={{marginTop: "5px"}}
                    />
                    : null}
                <label className={classes.labels}>Select Suitable Time</label>

                {dateTimeReady ?
                    <Dropdown
                        className={classes.field}
                        value={selectedHour}
                        options={availableHours}
                        onChange={(e) => setSelectedHour(e.target.value)}
                        placeholder="Time"
                        // className={classes.field}
                        // style={{marginTop: "5px"}}
                    />
                    : null}
                <Button className={classes.submit} label='Submit'

                        onClick={() => makeAppointment()}
                />
            </div>
            <div className="p-col-1"/>
        </div>


    );
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        createApppointment: (data) => dispatch(profileActions.createApppointment(data)),
        getAllAppointments: (data) => dispatch(therapistActions.getAllAppointments(data)),


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TakeAppointment);
