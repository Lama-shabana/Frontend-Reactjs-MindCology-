import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from './TakeAppointment.module.css';
import {Dropdown} from "primereact/dropdown";
import {Button} from "primereact/button";
import appointment from "../assets/img.png";
const TakeAppointment = (props) => {
    const therapistData=JSON.parse(localStorage.getItem("visitedTherapist"));

    const therapistDateTime={startTime:'8:00',endTime:"17:00",startDay:0,endDay:4}

    const [dateTimeReady,setDateTimeReady]=useState(false);
    const [allDays,setAllDays]=useState([
        {id:0,name:"saturday"},
        {id:1,name:"sunday"},
        {id:2,name:"monday"},
        {id:3,name:"tuesday"},
        {id:4,name:"wednesday"},
        {id:5,name:"thursday"},
        {id:6,name:"friday"},

    ])
    const [availableDays,setAvailableDays]=useState([])
    const [availableHours,setAvailableHours]=useState([])


    const [selectedHour,setSelectedHour]=useState(null)
    const [selectedDay,setSelectedDay]=useState(null)

    useEffect(()=>{
        if(!dateTimeReady){
            for(let i=parseInt(therapistDateTime.startTime);i<=parseInt(therapistDateTime.endTime);i++){
                if(!availableHours.find(x=>x===(i+"00"))){
                    availableHours.push(i+":00")
                }
            }
            setDateTimeReady(true)


            let today=new Date()
            console.log(Date.today().add(-30).days(),"HI")
        }
    },[])
    return (
        <div className="p-grid" >
            <div className="p-col-7">
                <img src={appointment} className={classes.picture} width={600}/>
            </div>

            <div className="p-col-4" style={{marginTop:"10em"}}>
                    <label className={classes.headerLabel}> Schedule Appointment
                        <i style={{marginLeft: "0.5em",fontSize:"2em",marginTop:"10px"}} className="pi pi-calendar-plus"/>
                    </label>

                    <label className={classes.labels}>Select Suitable Date</label>

                    {dateTimeReady?
                        <Dropdown
                            className={classes.field}
                            value={selectedHour}
                            options={availableHours}
                            onChange={(e) => setSelectedHour(e.target.value)}
                            placeholder="Time"
                            // className={classes.field}
                            // style={{marginTop: "5px"}}
                        />
                        :null}
                    <label className={classes.labels}>Select Suitable Time</label>

                    {dateTimeReady?
                        <Dropdown
                            className={classes.field}
                            value={selectedHour}
                            options={availableHours}
                            onChange={(e) => setSelectedHour(e.target.value)}
                            placeholder="Time"
                            // className={classes.field}
                            // style={{marginTop: "5px"}}
                        />
                        :null}
                    <Button className={classes.submit} label='Submit'

                        // onClick={}
                    />
            </div>
            <div className="p-col-1"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(TakeAppointment);
