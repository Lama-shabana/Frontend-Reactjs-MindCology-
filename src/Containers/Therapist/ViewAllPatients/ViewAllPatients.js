import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as therapistProfileActions from "../store/TherapistActions";
import * as patientProfileActions from "../../Patient/store/PatientActions"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

const ViewAllPatients = (props) => {

    const id = JSON.parse(localStorage.getItem("auth"))?.id

    let loaded=false;

    let therapistAppointments=[]
    let allPatientsData=[]
    useEffect(()=>{
        if(!loaded){
            props.getAllAppointments().then((data)=>{
                therapistAppointments=data.payload.filter((x)=> id===x.therapistId)
                therapistAppointments.map((data)=>{
                    props.getProfileData({id:data.patientId}).then((data)=>{
                        allPatientsData.push(data.payload)
                    })
                })
            })
            loaded=true
        }
    },[loaded])
    return (
        <div>


            <div   style={{marginTop:"6em"}}>

                <div className="datatable-templating-demo">
                    <div className="card">

                        <DataTable
                            value={{data:allPatientsData}}
                        >
                            <Column field="firstname" header="First name">

                            </Column>
                            <Column field="lastname" header="Last name">

                            </Column>
                            <Column field="gender" header="Gender">

                            </Column>
                            <Column field="email" header="Email">

                            </Column>
                            <Column field="age" header="Age">

                            </Column>
                            <Column field="phone" header="Phone">

                            </Column>
                            {/*<Column field="Status" header="Status">*/}

                            {/*</Column>*/}
                            {/*<Column field="History patient's record" header="History patient's record">*/}

                            {/*</Column>*/}


                        </DataTable>
                    </div>
                </div>

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
        getAllAppointments: () => dispatch(therapistProfileActions.getAllAppointments()),
        getProfileData: (data) => dispatch(patientProfileActions.getProfileData(data)),


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewAllPatients);
