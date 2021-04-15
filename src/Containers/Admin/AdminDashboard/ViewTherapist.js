import React, {useState} from 'react';
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import Add from "../../../assets/Add.png";
import './ViewTable.css';

const ViewTherapists = (props) => {


    return (
        <div>
            <div>
                <Button className="edit-profile" onClick={()=> props.history.push("/AdminDashboard/ViewTherapists/addTherapist")}>
                    <img src={Add}/>Add Therapist </Button>



            </div>
                <h4>Therapist</h4>
            <table>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Education Level</th>
                <th>specialization</th>
                <th>status</th>
                {/*active ,Deactivate */}


            </table>
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapists);
