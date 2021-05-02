import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from './Profile.module.css';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from "primereact/dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Inplace, InplaceContent, InplaceDisplay} from "primereact/inplace";
import {Tab, Tabs} from "react-bootstrap";
import {Button} from "primereact/button";
import * as profileActions from "../store/PatientActions";

const PatientProfile = (props) => {

    const [patientInfo, setPatientInfo] = useState(null)


    const gender = ["Male","Female"];

    const id = JSON.parse(localStorage.getItem("auth"))?.id

    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getProfileData({id: id}).then((data) => {
                setPatientInfo(data.payload)
                {console.log(data, data.payload,"patient info")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    const patientInfoDisplay = () => {
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
                            {patientInfo.firstName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={patientInfo.firstName}
                                       onChange={(e) => setPatientInfo({
                                           ...patientInfo,
                                           firstName: e.target.value
                                       })}
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.lastName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={patientInfo.lastName}
                                       onChange={(e) => setPatientInfo({
                                           ...patientInfo,
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
                            {patientInfo.age}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={patientInfo.age}
                                       onChange={(e) => setPatientInfo({
                                           ...patientInfo,
                                           age: e.target.value
                                       })}
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
                            {patientInfo.gender}
                        </InplaceDisplay>
                        <InplaceContent>
                            <Dropdown className={classes.inputs}
                                      value={patientInfo.gender}
                                      options={gender}
                                      onChange={(e) => setPatientInfo({
                                          ...patientInfo,
                                          gender: e.target.value
                                      })}
                                      editable
                            />
                        </InplaceContent>
                    </Inplace>
                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.phoneNumber}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={patientInfo.phoneNumber}
                                       onChange={(e) => setPatientInfo({
                                           ...patientInfo,
                                           phoneNumber: e.target.value
                                       })}
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {patientInfo.email}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       onChange={(e) => setPatientInfo({
                                           ...patientInfo,
                                           email: e.target.value
                                       })}/>
                        </InplaceContent>
                    </Inplace>
                </div>

            </div>


        </div>
    }

    function onSave() {
        props.editProfile({id: id, patientInfo}).then((data) => console.log(data, "returned"))
    }

    function onDelete() {
        props.editProfile({id: id, patientInfo:{active:false}}).then((data) => console.log(data))
        localStorage.clear()
        props.history.push("/")

    }

    return (
        <div className={classes.form}>
            {patientInfo ?
                <div>
                    <div className="p-grid">
                        <div className="p-col-3"/>

                        <div className="p-col-5">
                            <label className={classes.headerLabel}> Profile
                                <i style={{marginLeft: "0.5em"}} className="pi pi-user"/>
                            </label>
                            <p className={classes.note}>Click on any field to edit</p>

                        </div>
                        <div className="p-col-1"/>

                        <div className="p-col-3">
                            <Button label="Delete Account" className="primaryBtn" icon="pi pi-trash
" style={{
                                width: "12em",
                                height: "2.5em",
                                marginLeft: "1em",
                                marginTop: "2em",
                                background: "#79428b"
                            }}
                                    onClick={() => {
                                        onDelete()
                                    }}
                            />
                        </div>

                    </div>



                    <Tabs defaultActiveKey="patientInfo" transition={false}>
                        <Tab eventKey="patientInfo" title="patient Info" tabClassName={classes.tab}>
                            {patientInfoDisplay()}
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
                                        onClick={() => {
                                            onSave()
                                        }}
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

export default connect(mapStateToProps, mapDispatchToProps)(PatientProfile);
