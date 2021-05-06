import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import * as therapistProfileActions from "../store/TherapistActions";
import * as patientProfileActions from "../../Patient/store/PatientActions"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from 'primereact/button'; //lowercase
import classes from "./ViewAllPatients.module.css"
const ViewAllPatients = (props) => {

    const id = JSON.parse(localStorage.getItem("auth"))?.id

    let loaded = false;

    let therapistAppointments = []
    const [allPatientsData, setAllPatientsData] = useState([])
    useEffect(() => {
        if (loaded===false) {
            console.log("entered")
            props.getAllAppointments().then((data) => {
                therapistAppointments = data.payload.filter((x) => id === x.therapistId)
                therapistAppointments.map((data) => {
                    props.getProfileData({id: data.patientId}).then((data) => {
                        if (!allPatientsData.find((x) => x.id === data.payload.id)) {
                            setAllPatientsData([...allPatientsData,data.payload])
                            // allPatientsData.push(allPatientsData=>allPatientsData.concat(data.payload))
                        }
                    })
                })

            })
            loaded = true
        }
    }, [loaded])

    function actionBodyTemplate(rowData) {
        return (
            <div>
                <Button label="View" className="primaryBtn" style={{
                    width: "6em",
                    height: "2.5em",
                    background: "#6d3986"
                }}
                    onClick={() => {
                        props.history.push("/therapistDashboard/historyPatientsRecord/"+rowData.id)
                        console.log(rowData.id,"TES")
                    }}
                />
            </div>
        );
    }

    return (
        <div>
            {console.log(loaded,"CURRENT")}
            {allPatientsData.length>0 ?
                // <div style={{marginTop:"6em"}} >
                    <div className={classes.tableData}>
                        <label className={classes.headerLabel}> Patients
                            <i style={{fontSize:"2.5em",marginLeft: "0.3em"}} className="pi pi-users"/>
                        </label>
                    <div className="datatable-templating-demo">
                        <div className="card">
                            <DataTable
                                value={allPatientsData}
                            >
                                <Column field="firstName" header="First name"/>

                                <Column field="lastName" header="Last name">

                                </Column>
                                <Column field="gender" header="Gender">

                                </Column>
                                <Column field="email" header="Email">

                                </Column>
                                <Column field="age" header="Age">

                                </Column>
                                <Column field="phoneNumber" header="Phone">

                                </Column>


                                <Column field="filledMedicalHistoryForm"
                                        body={(e)=>actionBodyTemplate(e)}
                                        header="Medical Record">
                                </Column>


                            </DataTable>
                        </div>
                    </div>

                </div>
                : null}

        </div>
    );
}

const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        getAllAppointments: () => dispatch(therapistProfileActions.getAllAppointments()),
        getProfileData: (data) => dispatch(patientProfileActions.getProfileData(data)),


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewAllPatients);
