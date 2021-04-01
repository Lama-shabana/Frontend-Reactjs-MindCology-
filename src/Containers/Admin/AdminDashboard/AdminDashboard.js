import React, {useState} from 'react';
import {connect} from "react-redux";

const AdminDashboard = (props) => {


    return (
        <div>

            <h1>admin</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
