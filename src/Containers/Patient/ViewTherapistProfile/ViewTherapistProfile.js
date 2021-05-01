import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from '../../Therapist/TherapistDashboard/therapistProfile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab, Tabs} from "react-bootstrap";

import {Button} from "primereact/button";
import * as profileActions from "../../Therapist/store/TherapistActions";

const ViewTherapistProfile = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)



    const userId = JSON.parse(localStorage.getItem("auth"))?.id

    const therapistId=props.match.params.id;

    let dataLoaded = false;
    useEffect(() => {

        if (dataLoaded === false) {
            props.getAllTherapists({id:therapistId}).then((data) => {
                setTherapistInfo(data.payload[0])
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    const therapistInfoDisplay = () => {
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
                            {therapistInfo.firstName}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {therapistInfo.lastName}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {therapistInfo.age}
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
                            {therapistInfo.gender}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {therapistInfo.phoneNumber}
                        </label>




                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {therapistInfo.email}
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
                            {therapistInfo.username}
                        </label>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {therapistInfo.educationLevel}
                        </label>




                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>

                        <label>
                            {therapistInfo.specialization}
                        </label>


                </div>

            </div>


        </div>
    }


    return (
        <div className={classes.form}>
            {therapistInfo ?
                <div>
                    <label className={classes.headerLabel}> Profile
                        <i style={{marginLeft: "0.5em"}} className="pi pi-user"/>
                    </label>


                    <Tabs defaultActiveKey="therapistInfo" transition={false}>
                        <Tab eventKey="therapistInfo" title="therapist Info" tabClassName={classes.tab}>
                            {therapistInfoDisplay()}
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
