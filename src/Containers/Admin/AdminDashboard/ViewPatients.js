import React, {useState} from 'react';
import {connect} from "react-redux";
import './ViewTable.css';
const ViewPatients = (props) => {


    return (
        <div>

            <h1>Patients</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewPatients);
