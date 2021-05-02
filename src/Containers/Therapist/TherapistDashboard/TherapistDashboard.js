import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import { Calendar } from '@fullcalendar/core';
import Counselling from "../../../assets/schedule.jpg"
import {FullCalendar} from 'primereact/fullcalendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const TherapistDashboard = (props) => {
    const [events, setEvents] = useState([]);
    const options = {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        defaultView: 'dayGridMonth',
        defaultDate: '2017-02-01',
        header: {
            left: 'prev,next',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        editable: true
    };



    return (

        <div className="p-grid">
            <div className="p-col-12">
            <div style={{marginLeft:"1em",paddingTop:"100px"}}>
            </div>
                <div className="card">
                    <div className="p-col-12">
                    <div style={{fontSize:"inherit"}}>
                    <img style={{ paddingTop:"1em",width:"30%"}} src={Counselling}
                         alt="logo"/>

                    <FullCalendar
                        // events={events}
                         options={options}
                    />
                    </div>
                        </div>
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(TherapistDashboard);
