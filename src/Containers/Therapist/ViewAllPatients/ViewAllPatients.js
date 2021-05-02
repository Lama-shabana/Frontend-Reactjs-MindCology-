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
    const [allPatientsData,setAllPatientsData]=useState([])
    useEffect(()=>{
        if(loaded===false){
            props.getAllAppointments().then((data)=>{
                console.log("entered")
                therapistAppointments=data.payload.filter((x)=> id===x.therapistId)
                therapistAppointments.map((data)=>{
                    props.getProfileData({id:data.patientId}).then((data)=>{
                        if(!allPatientsData.find((x)=>x.id===data.payload.id)){
                            setAllPatientsData([...allPatientsData,data.payload])
                        }
                    })
                })
            })
            loaded=true
        }
    },[loaded])
    return (
        <div>

            {allPatientsData.length>0?console.log(allPatientsData,"Data"):null}

            <div   style={{marginTop:"6em"}}>

                <div className="datatable-templating-demo">
                    <div className="card">

                        {allPatientsData.length>0?
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
                                {/*<Column field="Status" header="Status">*/}

                                {/*</Column>*/}
                                {/*<Column field="History patient's record" header="History patient's record">*/}

                                {/*</Column>*/}


                            </DataTable>
                            :null}

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
