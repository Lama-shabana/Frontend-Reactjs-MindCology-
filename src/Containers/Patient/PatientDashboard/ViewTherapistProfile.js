import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from '../../Therapist/TherapistDashboard/therapistProfile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from "react-bootstrap";

import {Button} from "primereact/button";
import * as profileActions from "../../Therapist/store/TherapistActions";

const ViewTherapistProfile = (props) => {

    const [TherapistInfo, setTherapistInfo] = useState(null)



    const idTherapist = JSON.parse(localStorage.getItem("auth"))?.id

    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            props.getAllTherapists().then((data) => {
                setTherapistInfo(data.payload)
                console.log(data, data.payload, "therapist profile")
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    const TherapistInfoDisplay = () => {
        return <div>
            <div className="p-grid">
                <div className="p-col-4">
                    <label className={classes.labels}>First Name</label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>Last Name</label>
                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>Age</label>

                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.firstName}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.lastName}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.age}
                        </label>




                </div>


                <div className="p-col-4">
                    <label className={classes.labels}>Gender</label>

                </div>

                <div className="p-col-4">
                    <label className={classes.labels}>Telephone </label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>Email </label>
                </div>


                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.gender}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.phoneNumber}
                        </label>




                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.email}
                        </label>


                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>user-name</label>

                </div>

                <div className="p-col-4">
                    <label className={classes.labels}>Education-level </label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>specialization </label>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.username}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.educationLevel}
                        </label>




                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {TherapistInfo.specialization}
                        </label>


                </div>

            </div>


        </div>
    }


    return (
        <div className={classes.form}>
            {TherapistInfo ?
                <div>
                    <label className={classes.headerLabel}> Profile
                        <i style={{marginLeft: "0.5em"}} className="pi pi-user"/>
                    </label>


                    <Tabs defaultActiveKey="therapistInfo" transition={false}>
                        <Tab eventKey="therapistInfo" title="therapist Info" tabClassName={classes.tab}>
                            {TherapistInfoDisplay()}
                        </Tab>

                    </Tabs>
                    <div className="p-grid">
                        <div className="p-col-5"/>


                        <div className="p-col-4"/>
                    </div>

                </div>
                : null}


        </div>
    );
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTherapists: () => dispatch(profileActions.getAllTherapists()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapistProfile);
