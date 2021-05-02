import React, {useState} from 'react';
import {connect} from "react-redux";
import Counselling from "../../../assets/istockphoto-1169420428-612x612-1.jpg";

const AdminDashboard = (props) => {


    return (
        <div>

            <div style={{fontSize:"inherit"}}>
                <img style={{ paddingTop:"1em",width:"100%"}} src={Counselling}
                     alt="logo"/>
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
