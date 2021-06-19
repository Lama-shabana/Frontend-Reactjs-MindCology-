import React,{useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as patientProfileActions from "../../Patient/store/PatientActions"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import * as profileActions from "../../Therapist/store/TherapistActions";
import {Button} from "primereact/button";
import classes from "../../Therapist/ViewAllPatients/ViewAllPatients.module.css";

const ArabicViewPatients = (props) => {

    const [patients, setPatients] = useState([] );
    const id = JSON.parse(localStorage.getItem("auth"))?.id

    function onDelete(patientId) {

        props.editProfile({id: patientId, patientInfo: {active: false}}).then((data) => {
            let deletedPatientIndex=patients.findIndex(x=> x.id===patientId)
            let temp=[...patients]
            if (deletedPatientIndex > -1) {
                temp.splice(deletedPatientIndex, 1);
                setPatients(temp)
            }
        })
    }
    function actionActiveTemplate(e) {
        return (
            <div>
                <Button label="تعطيل الحساب" className="primaryBtn" icon="pi pi-trash
" style={{
                 background: "#79428b"
                }}
                        onClick={() => {
                            onDelete(e.id)
                        }}
                />
            </div>
        );
    }
    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getAllPatients().then((data) => {
                let temp=[]
                console.log(data.payload,"payy")
                data.payload.map((current)=>{
                    if(current.active){
                        temp.push(current)
                    }
                })
                setPatients(temp)

            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    return (
        <div>


            <div   style={{marginTop:"7em"}}>

                <label className={classes.headerLabel}>
                    <i style={{fontSize:"2.5em",marginRight: "0.3em"}} className="pi pi-users"/>

                    المرضى

                </label>


                        <DataTable
                            value={patients}
                        >
                            <Column field="firstName" header="الاسم الأول "/>

                            <Column field="lastName" header="الاسم الاخير">

                            </Column>
                            <Column field="gender" header="الجنس">

                            </Column>
                            <Column field="email" header="البريد الالكتروني">

                            </Column>
                            <Column field="age" header="العمر">

                            </Column>
                            <Column field="phoneNumber" header="رقم الهاتف">

                            </Column>
                            <Column
                                body={(e)=>actionActiveTemplate(e)}
                                header=" الحساب ">
                            </Column>


                        </DataTable>
                        {/*:null}*/}


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
        getAllPatients: () => dispatch(patientProfileActions.getAllPatients()),
        editProfile: (data) => dispatch(profileActions.editProfile(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArabicViewPatients);
