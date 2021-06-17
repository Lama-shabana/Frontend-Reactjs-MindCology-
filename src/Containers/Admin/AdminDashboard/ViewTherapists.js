import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ButtonHeader } from 'primereact/button';
import './DataTableDemo.css';
import * as profileActions from "../../Therapist/store/TherapistActions";
import {useHistory} from "react-router-dom";

const ViewTherapists = (props) => {
    const [therapists, setTherapists] = useState([] );

    const id = JSON.parse(localStorage.getItem("auth"))?.id
    function onDelete() {
        props.editProfile({id: id, therapistInfo:{active:false}}).then((data) => console.log(data))
        localStorage.clear()
        // props.history.push("/")

    }
    let history = useHistory();
    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getAllTherapists().then((data) => {
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

    function actionActiveTemplate(e) {
        return (
            <div>
                <Button label="deactivate account" className="primaryBtn" icon="pi pi-trash
" style={{
                    width: "17em",
                    height: "2.5em",
                    marginTop: "2em",
                    background: "#79428b"
                }}
                        onClick={() => {
                            onDelete()
                        }}
                />
            </div>
        );
    }

    return (
        <div>
            <div>
                <div>
                    <Button   label="Add Therapist" icon="pi pi-plus" iconPos="left" style={{width:"220px",marginTop:"6em",marginLeft:"1em",height:"50px",backgroundColor:"var(--purple-300)"}}
                              onClick={()=> history.push("/adminDashboard/addTherapist")}/>
                </div>
                <div   style={{marginTop:"2em"}}>

                    <div className="datatable-templating-demo">
                        <div className="card">
                            <DataTable value={therapists}>
                                <Column field="firstName" header="First name"></Column>
                                <Column field="lastName" header="Last name"></Column>
                                <Column field="gender" header="Gender"></Column>
                                <Column field="phoneNumber" header="phone Number"></Column>
                                <Column field="email" header="Email"></Column>
                                <Column field="educationLevel" header="Education Level"></Column>
                                <Column field="specialization" header="specialization"></Column>
                                <Column field="description" header="Description"></Column>
                                <Column
                                    body={(e)=>actionActiveTemplate(e)}
                                    header=" Account">
                                </Column>
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
        getAllTherapists: () => dispatch(profileActions.getAllTherapists()),
        editProfile: (data) => dispatch(profileActions.editProfile(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTherapists);
