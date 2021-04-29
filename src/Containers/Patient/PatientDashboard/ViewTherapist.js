import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from './therapistProfile.module.css';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from "primereact/dropdown";
import {Steps} from "primereact/steps";
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputNumber} from "primereact/inputnumber";
import {InputTextarea} from "primereact/inputtextarea";
import {Inplace, InplaceContent, InplaceDisplay} from "primereact/inplace";
import {Tab, Tabs} from "react-bootstrap";
// import { Tabs, Tab } from 'react-tab-view'

import {Button} from "primereact/button";
import * as profileActions from "../../Therapist/store/TherapistActions";

const ViewTherapist = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)


    const gender = ["Male","Female"];

    const id = JSON.parse(localStorage.getItem("auth"))?.id

    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getProfileData({id: id}).then((data) => {
                setTherapistInfo(data.payload)
                {console.log(data, data.payload,"therapist info")}
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
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.firstName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.firstName}
                                       // onChange={(e) => setTherapistInfo({
                                       //     ...therapistInfo,
                                       //     firstName: e.target.value
                                       // })}
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.lastName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.lastName}
                                       onChange={(e) => setTherapistInfo({
                                           ...therapistInfo,
                                           lastName: e.target.value
                                       })}
                                       editable
                            />
                        </InplaceContent>
                    </Inplace>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.age}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.age}
                                       // onChange={(e) => setTherapistInfo({
                                       //     ...therapistInfo,
                                       //     age: e.target.value
                                       // })}
                            />
                        </InplaceContent>
                    </Inplace>


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
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.gender}
                        </InplaceDisplay>
                        <InplaceContent>
                            <Dropdown className={classes.inputs}
                                      value={therapistInfo.gender}
                                      options={gender}
                                      // onChange={(e) => setTherapistInfo({
                                      //     ...therapistInfo,
                                      //     gender: e.target.value
                                      // })}
                                      editable
                            />
                        </InplaceContent>
                    </Inplace>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.phoneNumber}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.phoneNumber}
                                       // onChange={(e) => setTherapistInfo({
                                       //     ...therapistInfo,
                                       //     phoneNumber: e.target.value
                                       // })}
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.email}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       // onChange={(e) => setTherapistInfo({
                                       //     ...therapistInfo,
                                       //     email: e.target.value
                                       // })}
                            />
                        </InplaceContent>
                    </Inplace>
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
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.username}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       placeholder="Industry"
                                       value={therapistInfo.username}
                                       options={gender}
                                       // onChange={(e) => setTherapistInfo({
                                       //     ...therapistInfo,
                                       //     username: e.target.value
                                       // })}
                                       editable
                            />
                        </InplaceContent>
                    </Inplace>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.educationLevel}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}

                                       value={therapistInfo.educationLevel}
                                       // onChange={(e) => setTherapistInfo({
                                       //     ...therapistInfo,
                                       //     educationLevel: e.target.value
                                       // })}
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.specialization}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.specialization}
                                       // onChange={(e) => setTherapistInfo({
                                       //     ...therapistInfo,
                                       //     specialization: e.target.value
                                       // })}
                            />


                        </InplaceContent>
                    </Inplace>


                </div>

            </div>


        </div>
    }

    function onSave() {
        props.editProfile({id: id, therapistInfo}).then((data) => console.log(data, "returned"))
    }

    return (
        <div className={classes.form}>
            {therapistInfo ?
                <div>
                    <label className={classes.headerLabel}> Profile
                        <i style={{marginLeft: "0.5em"}} className="pi pi-user"/>
                    </label>

                    <p className={classes.note}>Click on any field to edit</p>

                    <Tabs defaultActiveKey="therapistInfo" transition={false}>
                        <Tab eventKey="therapistInfo" title="therapist Info" tabClassName={classes.tab}>
                            {TherapistInfoDisplay()}
                        </Tab>

                    </Tabs>
                    <div className="p-grid">
                        <div className="p-col-5"/>

                        <div className="p-col-3">
                            <div className="box">
                                <Button label="Save" className="primaryBtn" icon="pi pi-check" style={{
                                    width: "9em",
                                    height: "3em",
                                    marginLeft: "1em",
                                    marginTop: "2em",
                                    background: "#a474b7"
                                }}
                                        // onClick={() => {
                                        //     onSave()
                                        // }}
                                />
                            </div>
                        </div>
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
        editProfile: (data) => dispatch(profileActions.editProfile(data)),
        getProfileData: (data) => dispatch(profileActions.getProfileData(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapist);
