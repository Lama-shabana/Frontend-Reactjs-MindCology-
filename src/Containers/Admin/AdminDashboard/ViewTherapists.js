import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonHeader } from 'primereact/button';
import './DataTableDemo.css';
import * as profileActions from "../../Therapist/store/TherapistActions";

const ViewTherapists = (props) => {
    const [therapists, setTherapists] = useState([] );


    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getProfileData().then((data) => {
                setTherapists(data.payload)
                {console.log(data, data.payload,"therapists List")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])

    const header = (
        <div className="table-header">
            Therapists
            <ButtonHeader icon="pi pi-refresh" />
        </div>
    );

    return (
        <div>
            <div>
                <div>
                    <Button   label="  Add Therapist" icon="pi pi-plus" iconPos="left" style={{width:"220px",marginTop:"6em",marginLeft:"1em",height:"50px",backgroundColor:"var(--purple-300)"}}
                              onClick={()=> props.history.push("/AdminDashboard/ViewTherapists/addTherapist")}/>
                </div>
                <div   style={{marginTop:"2em"}}>

                    <div className="datatable-templating-demo">
                        <div className="card">

                            <DataTable value={therapists}>
                                <Column field="First name" header="First name"></Column>
                                <Column field="Last name" header="Last name"></Column>
                                <Column field="Gender" header="Gender"></Column>
                                <Column field="Email" header="Email"></Column>
                                <Column field="Education Level" header="Education Level"></Column>
                                <Column field="Specialization" header="specialization"></Column>
                                <Column field="Description" header="Description"></Column>
                                <Column field="Status" header="Status"></Column>


                            </DataTable>
                        </div>
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
        getProfileData: () => dispatch(profileActions.getProfileData()),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapists);
