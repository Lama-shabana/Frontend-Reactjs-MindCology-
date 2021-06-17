import React,{useEffect, useState} from 'react';
import {connect} from "react-redux";
import * as patientProfileActions from "../../Patient/store/PatientActions"
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import * as profileActions from "../../Patient/store/PatientActions";

const ViewPatients = (props) => {

    const [patients, setPatients] = useState([] );


    let dataLoaded = false;
    useEffect(() => {
        console.log("entered 1")

        if (dataLoaded === false) {
            console.log("entered 2")
            props.getAllPatients().then((data) => {
                setPatients(data.payload)
                {console.log(data, data.payload,"patients List")}
            })
            dataLoaded = true;
        }
    }, [dataLoaded])
    const id = JSON.parse(localStorage.getItem("auth"))?.id
    function onDelete() {
        props.editProfile({id: id, patientInfo:{active:false}}).then((data) => console.log(data))
        localStorage.clear()
       // props.history.push("/")

    }

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


            <div   style={{marginTop:"6em"}}>

                <div className="datatable-templating-demo">
                    <div className="card">


                            <DataTable
                                value={patients}
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

                        <Column
                                body={(e)=>actionActiveTemplate(e)}
                                header=" Account">
                        </Column>


                            </DataTable>
                            {/*:null}*/}

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
        getAllPatients: () => dispatch(patientProfileActions.getAllPatients()),
        editProfile: (data) => dispatch(profileActions.editProfile(data)),


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPatients);
