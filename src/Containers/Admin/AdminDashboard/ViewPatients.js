import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonHeader } from 'primereact/button'
import * as profileActions from "../../Patient/store/PatientActions";
import './DataTableDemo.css';
const ViewPatients = (props) => {

    const [patients, setPatients] = useState([] );


    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getProfileData().then((data) => {
                setPatients(data.payload)
                {console.log(data, data.payload,"patients List")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])

    const header = (
        <div className="table-header">
            Patients
            <ButtonHeader icon="pi pi-refresh" />
        </div>
    );

    return (

            <div>
                <div>

                    <div   style={{marginTop:"6em"}}>

                        <div className="datatable-templating-demo">
                            <div className="card">

                                <DataTable value={patients}>
                                    <Column field="First name" header="First name"></Column>
                                    <Column field="Last name" header="Last name"></Column>
                                    <Column field="Gender" header="Gender"></Column>
                                    <Column field="Email" header="Email"></Column>
                                    <Column field="Age " header="Age"></Column>
                                    <Column field="Phone" header="Phone"></Column>
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewPatients);
