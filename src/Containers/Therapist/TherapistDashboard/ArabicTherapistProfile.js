import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import classes from './therapistProfile.module.css';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from "primereact/dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Inplace, InplaceContent, InplaceDisplay} from "primereact/inplace";
import {Tab, Tabs} from "react-bootstrap";
import {Button} from "primereact/button";
import * as profileActions from "../store/TherapistActions";

const ArabicTherapistProfile = (props) => {

    const [therapistInfo, setTherapistInfo] = useState(null)


    const gender = ["ذكر","انثى"];

    const id = JSON.parse(localStorage.getItem("auth"))?.id

    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getProfileData({id: id}).then((data) => {
                setTherapistInfo(data.payload)
                {console.log(data, data.payload,"patient info")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    const therapistInfoDisplay = () => {
        return <div>
            <div className="p-grid">
                <div className="p-col-4">
                    <label className={classes.labels}>الاسم الاول</label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}> الاسم الاخير</label>
                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>العمر</label>

                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.firstName}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.firstName}
                                       onChange={(e) => setTherapistInfo({
                                           ...therapistInfo,
                                           firstName: e.target.value
                                       })}
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
                                       onChange={(e) => setTherapistInfo({
                                           ...therapistInfo,
                                           age: e.target.value
                                       })}
                            />
                        </InplaceContent>
                    </Inplace>


                </div>


                <div className="p-col-4">
                    <label className={classes.labels}>الجنس</label>

                </div>

                <div className="p-col-4">
                    <label className={classes.labels}>الهاتف </label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>البريد الالكتروني </label>
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
                                      onChange={(e) => setTherapistInfo({
                                          ...therapistInfo,
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
                            {therapistInfo.phoneNumber}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.phoneNumber}
                                       onChange={(e) => setTherapistInfo({
                                           ...therapistInfo,
                                           phoneNumber: e.target.value
                                       })}
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
                                       onChange={(e) => setTherapistInfo({
                                           ...therapistInfo,
                                           email: e.target.value
                                       })}/>
                        </InplaceContent>
                    </Inplace>
                </div>


                <div className="p-col-4">
                    <label className={classes.labels}>مستوى الدراسات العليا</label>

                </div>

                <div className="p-col-4">
                    <label className={classes.labels}>التخصص </label>

                </div>
                <div className="p-col-4">
                    <label className={classes.labels}>الوصف </label>
                </div>


                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.educationLevel}
                        </InplaceDisplay>
                        <InplaceContent>
                            <Dropdown className={classes.inputs}
                                      value={therapistInfo.educationLevel}
                                      options={gender}
                                      onChange={(e) => setTherapistInfo({
                                          ...therapistInfo,
                                          educationLevel: e.target.value
                                      })}
                                      editable
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
                                       onChange={(e) => setTherapistInfo({
                                           ...therapistInfo,
                                           specialization: e.target.value
                                       })}
                            />

                        </InplaceContent>
                    </Inplace>


                </div>
                <div className="p-col-4" style={{textAlign: "center"}}>
                    <Inplace closable>
                        <InplaceDisplay>
                            {therapistInfo.description}
                        </InplaceDisplay>
                        <InplaceContent>
                            <InputText className={classes.inputs}
                                       value={therapistInfo.description}
                                       onChange={(e) => setTherapistInfo({
                                           ...therapistInfo,
                                           description: e.target.value
                                       })}/>
                        </InplaceContent>
                    </Inplace>
                </div>

            </div>


        </div>
    }

    function onSave() {
        props.editProfile({id: id, therapistInfo}).then((data) => console.log(data, "returned"))
    }

    // function onDelete() {
    //     props.editProfile({id: id, patientInfo:{active:false}}).then((data) => console.log(data))
    //     localStorage.clear()
    //     props.history.push("/")
    //
    // }

    return (
        <div className={classes.form}>
            {therapistInfo ?
                <div>
                    <div className="p-grid">
                        <div className="p-col-3"/>

                        <div className="p-col-5">
                            <label className={classes.headerLabel}> الملف الشخصي
                                <i style={{marginLeft: "0.5em"}} className="pi pi-user"/>
                            </label>
                            <p className={classes.note}>اضغط للتعديل </p>

                        </div>
                        <div className="p-col-1"/>

                        <div className="p-col-3">
                            {/*                            <Button label="Delete Account" className="primaryBtn" icon="pi pi-trash*/}
                            {/*" style={{*/}
                            {/*                                width: "12em",*/}
                            {/*                                height: "2.5em",*/}
                            {/*                                marginLeft: "1em",*/}
                            {/*                                marginTop: "2em",*/}
                            {/*                                background: "#79428b"*/}
                            {/*                            }}*/}
                            {/*                                    onClick={() => {*/}
                            {/*                                        onDelete()*/}
                            {/*                                    }}*/}
                            {/*                            />*/}
                        </div>

                    </div>



                    <Tabs defaultActiveKey="patientInfo" transition={false}>
                        <Tab eventKey="patientInfo" title="معلومات المعالج" tabClassName={classes.tab}>
                            {therapistInfoDisplay()}
                        </Tab>

                    </Tabs>
                    <div className="p-grid">
                        <div className="p-col-5"/>

                        <div className="p-col-3">
                            <div className="box">
                                <Button label="حفظ" className="primaryBtn" icon="pi pi-check" style={{
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

export default connect(mapStateToProps, mapDispatchToProps)(ArabicTherapistProfile);
