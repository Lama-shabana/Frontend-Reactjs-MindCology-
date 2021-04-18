import React, {useState} from 'react';
import {connect} from "react-redux";
import classes from './therapist.css';
import DateTimePicker from 'react-datetime-picker';
import therapistImage from "../../../assets/schedule.jpg";
const TherapistDashboard = (props) => {

    const [value, onChange] = useState(new Date());

    return (
        <div>
             <div className="p-grid">
            <img className="therapistImage" src={therapistImage}/>
          <div className="schedule">
            <div className="p-datepicker">
                <DateTimePicker
                    onChange={onChange}
                    value={value}
                />
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
