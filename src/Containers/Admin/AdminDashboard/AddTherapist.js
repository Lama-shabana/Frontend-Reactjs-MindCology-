import React, {useState} from 'react';
import {connect} from "react-redux";
import './ViewTable.css';
const AddTherapist = (props) => {


    return (
        <div>

            <h1>Add Therapist</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddTherapist);
