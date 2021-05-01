import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import classes from './therapist.css';
import therapistImage from "../../../assets/schedule.jpg";
import { Calendar } from '@fullcalendar/core';
import { FullCalendar } from 'primereact/fullcalendar';

import axios from "axios";
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

        <div>

            <div style={{marginLeft:"1em",paddingTop:"100px"}}>
                <div className="card">
                    <FullCalendar
                        // events={events}
                         options={options}
                    />
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
