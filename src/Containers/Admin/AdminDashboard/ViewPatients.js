import React, {useState} from 'react';
import {connect} from "react-redux";
import './ViewTable.css';
const ViewPatients = (props) => {


    return (
        <div>
            <h1>Patients</h1>
            <tablt>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Country</th>
                <th>user-name</th>
                <th>status</th>
                {/*active ,Deactivate */}
            </tablt>
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
